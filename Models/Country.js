import Sequelize from 'sequelize'
import { Model } from 'sequelize'
import sequelize from '../database/localhostConn'

class Country extends Model { };
Country.init({
    CountryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Abbreviation: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, { sequelize })

export default Country;