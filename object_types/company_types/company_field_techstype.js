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

const company_field_techstype = new GraphQLObjectType({
  name: "company_city_techs",
  fields: () => ({
    ft_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    ft_company_name: { type: GraphQLString },
    ft_company_number: { type: GraphQLString },
    ft_name: { type: GraphQLString },
    ft_contact_number: { type: GraphQLString },
    ft_secondary_number: { type: GraphQLString },
    ft_available_days: { type: GraphQLInt },
    ft_available_hours_weekday: { type: GraphQLString },
    ft_available_hours_weekend: { type: GraphQLString },
    ft_hourly_rate_weekday: { type: GraphQLInt },
    ft_hourly_rate_weekend: { type: GraphQLInt },
    ft_notes: { type: GraphQLString },
  })
})

module.exports = { company_field_techstype }
