import { Model, INTEGER, STRING } from 'sequelize';

import sequelize from '../database/localhostConn';

class Team extends Model { };
Team.init({
    TeamId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Team: {
        type: STRING,
        allowNull: false,
    },
    Stadium: {
        type: STRING,
        allowNull: false,
    },
    Colors: {
        type: STRING,
        allowNull: false,
    },
}, { sequelize })


export default Team;