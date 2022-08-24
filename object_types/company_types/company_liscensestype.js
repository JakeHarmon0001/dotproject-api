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

const company_liscensestype = new GraphQLObjectType({
  name: "company_liscenses",
  fields: () => ({
    licenses_id: {
      type: GraphQLInt,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: { type: GraphQLInt },
    item_id: { type: GraphQLInt },
    purchase_date: { type: GraphQLString },
    start_date: { type: GraphQLString },
    licenses_months: { type: GraphQLInt, unique: true },
  })
})

module.exports = { company_liscensestype }
