import { events } from '../data/events';

const resolvers = {
  Query: {
    events: (_, { limit, offset = 0, filter, search }) => {
      let filteredEvents = [...events];

      if (search) {
        const searchLower = search.toLowerCase();
        filteredEvents = filteredEvents.filter(event => 
          event.name.toLowerCase().includes(searchLower) ||
          event.description?.toLowerCase().includes(searchLower)
        );
      }

      if (filter) {
        if (filter.name) {
          const nameLower = filter.name.toLowerCase();
          filteredEvents = filteredEvents.filter(event =>
            event.name.toLowerCase().includes(nameLower)
          );
        }
        
        if (filter.description) {
          const descLower = filter.description.toLowerCase();
          filteredEvents = filteredEvents.filter(event =>
            event.description?.toLowerCase().includes(descLower)
          );
        }
      }

      const startIndex = offset;
      const endIndex = limit ? startIndex + limit : undefined;
      
      return filteredEvents.slice(startIndex, endIndex);
    },
    
    event: (_, { id }) => events.find(event => event.id.toString() === id)
  }
};

export default resolvers;