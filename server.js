const { ApolloServer, makeExecutableSchema } = require('apollo-server');

import sequelize from './database/localhostConn'
import loaders from './src/api/loaders';
import Player, { Team } from './Models/Player'
import Country from './Models/Country';
import typeDefs from './src/typedefs'
import resolvers from './src/resolvers'
const { DB_NAME } = process.env;

sequelize.authenticate()
    .then(() => {
        console.log(`Successfully connected to the ${DB_NAME} database.`);
    })
    .catch(err => {
        console.log('Sad Panda! Unable to connect to the database: ', err)
    })


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ 
    schema,    
    context: {
        models: {
            team: Team,
            player: Player,
            country: Country
        },
        loader: loaders()
    }, 
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});