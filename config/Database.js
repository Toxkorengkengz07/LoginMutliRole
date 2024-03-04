import {Sequelize} from "sequelize";

const db = new Sequelize('db_upark', 'root', {
    host: "localhost",
    dialect: "mysql"
});

export default db;