require('dotenv').config();
import sequelize from './database/localhostConn'

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
const myTeam = Team.findByPk(1).then(team => {
    team.Team
})

console.log("My Team: ", myTeam)