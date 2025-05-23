import { events } from '../data/events';

const resolvers = {
  Query: {
    events: () => events,
    event: (_, { id }) => events.find(event => event.id.toString() === id)
  }
};

export default resolvers;