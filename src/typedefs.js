import { gql } from 'apollo-server'

const typeDefs = gql`
# Comments in GraphQL are defined with the hash (#) symbol.

  type Player {
    PlayerId: ID!
    FullName: String!
    Nickname: String
    Teams: [Team!]
    Countries: Country!
  }

  type Team {
      TeamId: ID!
      Team: String!
      Stadium: String!
      Colors: String!
      Players: [Player!]
  }

  type Country {
      CountryId: ID!
      Country: String!
      Abbreviation: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    teams: [Team]
    players: [Player]
    countries: [Country]
  }
`
export default typeDefs;