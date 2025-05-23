const typeDefs = `
  type Event {
    id: ID!
    name: String!
    image: String
    description: String
  }

  input EventFilter {
    name: String
    description: String
  }

  type Query {
    events(limit: Int, offset: Int, filter: EventFilter, search: String): [Event]
    event(id: ID!): Event
  }
`;

export default typeDefs;