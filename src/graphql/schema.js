const typeDefs = `
  type Event {
    id: ID!
    name: String!
    image: String
    description: String
  }

  type Query {
    events: [Event]
    event(id: ID!): Event
  }
`;

export default typeDefs;