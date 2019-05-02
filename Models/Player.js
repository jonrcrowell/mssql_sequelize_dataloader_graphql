import { INTEGER, STRING, Model  } from 'sequelize'
import sequelize from '../database/localhostConn'
import Team from './Team'
import Country from './Country'

class Player extends Model { };
Player.init({
    PlayerId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    FullName: {
        type: STRING,
        allowNull: false,
    },
    Nickname: {
        type: STRING,
        allowNull: true,
    },
    CountryId: {
        type: STRING,
        allowNull: false,
        foreignKey: true
    },
}, { sequelize })

 Player.belongsTo(Country, { foreignKey: 'CountryId' });
// Player.belongsToMany(Team,
//     { through: 'Player_Team', foreignKey: 'PlayerId', otherKey: 'TeamId' });


export default Player;