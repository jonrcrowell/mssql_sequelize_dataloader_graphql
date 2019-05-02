require('dotenv').config();
const { ApolloServer, gql, makeExecutableSchema } = require('apollo-server');
import sequelize from './database/localhostConn'

import typeDefs from './src/typedefs'
import resolvers from './src/resolvers'
import Team from './Models/Team'

const { PORT, DB_NAME } = process.env;

sequelize.authenticate()
    .then(() => {
        console.log(`Successfully connected to the ${DB_NAME} database.`);
    })
    .catch(err => {
        console.log('Sad Panda! Unable to connect to the database: ', err)
    })

// Get data using raw query
sequelize.query("SELECT * FROM player").then(myTableRows => {
    console.log(myTableRows)
})

// Return promise using sequelize method
Team.findByPk(1).then(team => {
    console.log("My Team: ", team.Team)
})

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ schema });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});