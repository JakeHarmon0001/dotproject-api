const db = require("../../mysql/db.js"); //database variable
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQL,
  GraphQLList,
} = graphql;

const company_citytype = new GraphQLObjectType({
  name: "company_city",
  description: "Item that represents a city where Ovation Networks has a customer",
  fields: () => ({
    company_city_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    company_city_ccc: { type: GraphQLString },
    company_city_name: { type: GraphQLString },
    company_city_sound: { type: GraphQLString },
  })
})

module.exports = { company_citytype }
