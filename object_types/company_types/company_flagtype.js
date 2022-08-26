/**
 * graphql object type of the company_flagtype table
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

const company_flagtype = new GraphQLObjectType({
  name: "company_flag",
  description: "Flags used by companies working with Ovation Networks",
  fields: () => ({
    company_flag_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true, description: "ID of company flag" },
    company_flag_nnn: { type: GraphQLString, description: "Three letter code representing the company name" },
    company_flag_name: { type: GraphQLString, description: "Name of company flag" },
    company_flag_franchisor: { type: GraphQLInt, },
    company_flag_sound: { type: GraphQLString },
    company_flag_color: { type: GraphQLString, description: "Color of company_flag" },
    company_flag_body: { type: GraphQLString, description: "A file for the body/background of the company_flag" },
    company_flag_ad: { type: GraphQLString, description: "Image file representing company_flag" },
    company_flag_css: { type: GraphQLString, description: "css code representing the company_flag" },
    company_flag_terms: { type: GraphQLString, description: "Terms of the company_flag, a .txt file" },
  })
})

module.exports = { company_flagtype }
