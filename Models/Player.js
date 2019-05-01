import Sequelize from 'sequelize'
import { Model } from 'sequelize'
import sequelize from '../database/localhostConn'

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

export default Player;