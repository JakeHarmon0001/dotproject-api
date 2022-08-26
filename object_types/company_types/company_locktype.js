/**
 * graphql object type of the company_lock table
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

const company_locktype = new GraphQLObjectType({
  name: "company_lock",
  fields: () => ({
    id: { type: GraphQLInt, autoIncrement: true, primaryKey: true },
    company_id: { type: GraphQLInt },
    lockedFlag: { type: GraphQLInt },
    lockedUser: { type: GraphQLInt },
    lockedMessage: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    modifiedAt: { type: GraphQLString },
  })
})

module.exports = { company_locktype }
