import Sequelize from 'sequelize'
import { Model } from 'sequelize'
import sequelize from '../database/localhostConn'

class Team extends Model { };
Team.init({
    TeamId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Team: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Stadium: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Colors: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, { sequelize })

export default Team;