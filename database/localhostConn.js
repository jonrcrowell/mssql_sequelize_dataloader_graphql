import Sequelize from 'sequelize'
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST, PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

export default sequelize;