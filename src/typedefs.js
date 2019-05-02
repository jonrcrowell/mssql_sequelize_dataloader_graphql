import { gql } from 'apollo-server'

const typeDefs = gql`
# Comments in GraphQL are defined with the hash (#) symbol.

    # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

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
  }

  type Country {
      CountryId: ID!
      Country: String!
      Abbreviation: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    players: [Player]
    teams: [Team]
    countries: [Country]
  }
`
export default typeDefs;