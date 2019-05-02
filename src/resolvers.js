import Team from '../Models/Team'
import Player from '../Models/Player'
import Country from '../Models/Country';

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
    {
        title: 'So Long and Thanks For All The Fish',
        author: 'Ford Prefect',
    }
];

const resolvers = {
    Query: {
        books: () => books,
        countries: () => Country.findAll(),
        teams: () => Team.findAll(),
        players: () => Player.findAll({ include: [Country] })
    },
    Player: {
        Countries (parent){
            console.log(' player Countries '); 
            return Country.findByPk(parent.CountryId)
        }
    }
}



export default resolvers;