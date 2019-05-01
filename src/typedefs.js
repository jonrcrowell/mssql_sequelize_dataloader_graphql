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
    Fullname: String!
    Nickname: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    players: [Player]
  }
`
export default typeDefs;