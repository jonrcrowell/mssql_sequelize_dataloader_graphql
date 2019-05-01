import Sequelize from 'sequelize'
import { Model } from 'sequelize'
import sequelize from '../database/localhostConn'
import Team from './Team'
import Country from './Country'

class Player extends Model { };
Player.init({
    PlayerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    FullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Nickname: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    CountryId: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true
    },
}, { sequelize })

Player.belongsToMany(Team,
    { through: 'Player_Team', foreignKey: 'PlayerId', otherKey: 'TeamId' });


export default Player;