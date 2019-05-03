import { INTEGER, STRING, Model  } from 'sequelize'
import sequelize from '../database/localhostConn'
import Team from './Team'
import Country from './Country'
import PlayerTeam from './PlayerTeam'

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
}, { sequelize })

Player.belongsTo(Country, { foreignKey: 'CountryId' });
Player.belongsToMany(Team, { through: PlayerTeam, foreignKey: 'PlayerId', otherKey: 'TeamId' });
Team.belongsToMany(Player, { through: PlayerTeam, foreignKey: 'TeamId', otherKey: 'PlayerId' });
PlayerTeam.belongsTo(Player, { foreignKey: 'PlayerId' });
PlayerTeam.belongsTo(Team, { foreignKey: 'TeamId' });

export default Player;
export {Team, PlayerTeam};