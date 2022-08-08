const express = require("express")
const graphql = require('graphql')
 const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql
 //const{graphqlHTTP} = require('express-graphql')
 const {company_statestype} = require('../object_types/companiesType')

 const {
    companies,
    companiesbackup,
    companiesbackup2,
    company_additional,
    company_advn,
    company_advn_backup,
    company_allview,
    company_assigned_field_tech,
    company_city,
    company_field_techs,
    company_flag,
    company_franchisor,
    company_liscenses,
    company_lock,
    company_phone,
    company_reseller,
    company_states,
    company_states_am,
    company_tags,
  } = require("../models/companies.js");


  const RootQuery = new GraphQLObjectType ({
    name: "RootQueryType",
    fields: {
        getAllCompany_states: {
            type: new GraphQLList(company_statestype),
            args: { id: {type: GraphQLString}}, //THERE COULD BE POTENTIAL ISSUES WITH THIS LINE OF CODE HEADS UP
            resolve(parent,args) {
                 //return company_states.findAll({id}) //await might cause some issues
                return company_states.findAll({})                
            }
        }
        
    }
 })

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createCompany: {
            type: company_statestype,
            args: {
                compId: {type: GraphQLString},
                name: {type: GraphQLString},
                email: {type: GraphQLString},
                owner: {type: GraphQLString},
                phoneNumber: {type: GraphQLString},
                location: {type: GraphQLString}
            },
            resolve(parent,args) {
                const company = new Company({ //creating new company document
                    compId: args.compId,
                    name: args.name,
                    email: args.email,
                    owner: args.owner,
                    phoneNumber: args.phoneNumber,
                    location: args.location,
                })
                //const newCompany =  company.save() //used to have await
                return args
            }
           
        }
    }
 })

const schema = new graphql.GraphQLSchema({query: RootQuery, mutation: Mutation})

//const newSchema = {typedefs, resolvers}
 module.exports = {schema}