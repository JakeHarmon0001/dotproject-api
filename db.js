
const { STRING } = require("sequelize");
const sequelize = require("sequelize");
const { Sequelize } = require("./models");

// const db = new Sequelize("dotproject","graphQL","dgT4JPcWeg1JPi4wrdiT",{
//         host: "MySQLCDevNode002.ovatn.net",
//         dialect: "mysql"
// });

const db = new Sequelize('dotproject', 'graphQL', 'dgT4JPcWeg1JPi4wrdiT', {
        host: 'MySQLCDevNode002.ovatn.net',
        dialect: 'mariadb' 
      });

db.authenticate().then(() =>
        console.log("Connected to the database !")
);

// console.log(db)
const user = db.define('user', {
        name: {type: STRING}
})

module.exports = {db}