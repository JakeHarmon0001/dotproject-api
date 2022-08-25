This project contains a graphql API made for retreiving data from a mysql db called 'dotproject'
It runs on a graphQL Yoga server and uses sequelize to connect to the mysql database
The graphql object types are stored in the ./object_types folder 
The sequelize models are stored in the ./models folder
The schema is found in the schema folder and alllows the client to request data on several companies related tables and all helpdeak_items related tables by either requesting all items in the tables or searching for one specific item based on certain arguments
All querys are able to be filtered based on which fields you want to have returned

The DB must be set up with a config.json file in a with the structure :
{
  "development": {
    "username": "name",
    "password": "pass",
    "database": "name",
    "host": "host",
    "dialect": "mysql"
  },
  "test": {
    "username": "name",
    "password": "pass",
    "database": "name",
    "host": "host",
    "dialect": "mysql"
  },
  "production": {
    "username": "name",
    "password": "pass",
    "database": "name",
    "host": "host",
    "dialect": "mysql"
  }
}

This file should be located in a folder called config, so ./config/config.json
The db.js located in the mysql folder will use this config file to connect to your db 

To add more db tables you must create more sequelize models and graphql object types and follow the previous query models in the dotproject_schema file but substitute the arguments, models and object types accordingly

This makes the basic structure to create a graphql api is like the following:
connect to your db --> create models and graphql object types of your tables --> construct a schema using the following --> export that schema into app.js and use it in the const 'server'