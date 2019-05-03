import { INTEGER, Model  } from 'sequelize';

import sequelize from '../database/localhostConn';
import Player from './Player';
import Team from './Team';

class PlayerTeam extends Model { };
PlayerTeam.init({
    FromYear: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    ToYear: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
    }
    }, { sequelize })

export default PlayerTeam;