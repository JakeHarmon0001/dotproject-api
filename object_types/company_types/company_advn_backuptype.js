/**
 * graphql object type of the company_advn_backup table
 */
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

const company_advn_backuptype = new GraphQLObjectType({
  name: "company_advn_backup",
  fields: () => ({
    advn_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: GraphQLInt },
    advn_guid: { type: GraphQLString },
  })
})

module.exports = { company_advn_backuptype }
