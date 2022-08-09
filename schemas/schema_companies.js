const express = require("express")
const graphql = require('graphql')
const Sequelize = require('sequelize');

 const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql
 //const{graphqlHTTP} = require('express-graphql')
 const {company_statestype, companiestype, company_citytype, company_flagtype, company_franchisortype} = require('../object_types/companiesType')

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
        /**
         * query that returns all company_states db items
         * can filter which fields are returned
         */
        allcompany_states: {
            type: new GraphQLList(company_statestype),
            args: { id: {type: GraphQLString}}, 
            resolve(parent,args) {
                return company_states.findAll({})                
            }
        },
        /**
         * query that allows client to search company_states items by company_states_name or company_states_id
         * can filter which fields are returned
         */
        company_states: { 
            type: new GraphQLList(company_statestype),
            args: { company_state_id: {type: GraphQLString}, company_state_name: {type: GraphQLString}}, //args
            resolve(parent,args) {
                 if(args.company_state_id == undefined) {args.company_state_id = ''} //if no values given for args, sets them to null to avoid 
                 if(args.company_state_name == undefined) {args.company_state_name = ''}//an error being thrown
                return company_states.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { company_state_id: args.company_state_id },
                        { company_state_name: args.company_state_name }
                      ]
                    }
                  })                
            }
        },
        /**
         * query that returns all companies items in the db
         * can filter which fields are returned
         */
        allcompanies:{
            type: new GraphQLList(companiestype),
            args: { id: {type: GraphQLString}}, 
            resolve(parent,args) {
                return companies.findAll({})                
            }
        }, 
        /**
         * query that allows client to search companies items by company_states_name or company_states_id
         * can filter which fields are returned
         */
        companies: { 
            type: new GraphQLList(companiestype),
            args: { company_id: {type: GraphQLInt}, company_name: {type: GraphQLString} , company_city: {type: GraphQLString},  company_state: {type: GraphQLString} , company_flag: {type: GraphQLString}}, //args
            resolve(parent,args) {
                 if(args.company_id == undefined) {args.company_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.company_name == undefined) {args.company_name = 'Empty'}//an error being thrown
                 if(args.company_city == undefined) {args.company_city = 'Empty'}
                 if(args.company_state == undefined) {args.company_state = 'Empty'}
                 if(args.company_flag == undefined) {args.company_flag = 'Empty'}
                return companies.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { company_id: args.company_id },
                        { company_name: args.company_name },
                        { company_city: args.company_city },
                        { company_state: args.company_state },
                        { company_flag: args.company_flag },
                      ]
                    }
                  })                
            }
        },
        /**
         * query that returns all company_city items in the db
         * can filter which fields are returned
         */
         allcompany_city:{
            type: new GraphQLList(company_citytype),
            args: { id: {type: GraphQLString}}, 
            resolve(parent,args) {
                return company_city.findAll({})                
            }
        },

        /**
         * query that allows client to search company_city items by field values
         * can filter which fields are returned
         */
         company_city: { 
            type: new GraphQLList(company_citytype),
            args: { company_city_id: {type: GraphQLInt}, company_city_ccc: {type: GraphQLString} , company_city_name: {type: GraphQLString},  company_city_sound: {type: GraphQLString} },  //args
            resolve(parent,args) {
                 if(args.company_city_id == undefined) {args.company_city_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.company_city_ccc == undefined) {args.company_city_ccc = 'Empty'}//an error being thrown
                 if(args.company_city_name == undefined) {args.company_city_name = 'Empty'}
                 if(args.company_city_sound == undefined) {args.company_city_sound = 'Empty'}
        
                return company_city.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { company_city_id: args.company_city_id },
                        { company_city_ccc: args.company_city_ccc },
                        { company_city_name: args.company_city_name },
                        { company_city_sound: args.company_city_sound }
                      ]
                    }
                  })                
            }
        
            
        },

        /**
         * query that returns all company_flag items in the db
         * can filter which fields are returned
         */
         allcompany_flag:{
            type: new GraphQLList(company_flagtype),
            args: { id: {type: GraphQLString}}, 
            resolve(parent,args) {
                return company_flag.findAll({})                
            }
        },

        /**
         * query that allows client to search company_flag items by field values
         * can filter which fields are returned
         */
         company_flag: { 
            type: new GraphQLList(company_flagtype),
            args: { company_flag_id: {type: GraphQLInt}, company_flag_nnn: {type: GraphQLString} , company_flag_name: {type: GraphQLString},  company_flag_franchisor: {type: GraphQLInt},  company_flag_sound: {type: GraphQLString},  company_flag_color: {type: GraphQLString},  company_flag_body: {type: GraphQLString},  company_flag_ad: {type: GraphQLString},  company_flag_css: {type: GraphQLString},  company_flag_terms: {type: GraphQLString} },  //args
            resolve(parent,args) {
                 if(args.company_flag_id == undefined) {args.company_flag_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.company_flag_nnn== undefined) {args.company_flag_nnn = 'Empty'}//an error being thrown
                 if(args.company_flag_name == undefined) {args.company_flag_name = 'Empty'}
                 if(args.company_flag_franchisor == undefined) {args.company_flag_franchisor = -1}
                 if(args.company_flag_sound == undefined) {args.company_flag_sound = 'Empty'}
                 if(args.company_flag_color == undefined) {args.company_flag_color = 'Empty'}
                 if(args.company_flag_body == undefined) {args.company_flag_body = 'Empty'}
                 if(args.company_flag_ad == undefined) {args.company_flag_ad = 'Empty'}
                 if(args.company_flag_css == undefined) {args.company_flag_css = 'Empty'}
                 if(args.company_flag_terms == undefined) {args.company_flag_terms = 'Empty'}
        
                return company_flag.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { company_flag_id: args.company_flag_id },
                        { company_flag_nnn: args.company_flag_nnn },
                        { company_flag_name: args.company_flag_name },
                        { company_flag_franchisor: args.company_flag_franchisor },
                        { company_flag_sound: args.company_flag_sound },
                        { company_flag_color: args.company_flag_color },
                        { company_flag_body: args.company_flag_body },
                        { company_flag_ad: args.company_flag_ad },
                        { company_flag_css: args.company_flag_css },
                        { company_flag_terms: args.company_flag_terms }
                      ]
                    }
                  })                
            }
        
            
        },
        /**
         * query that returns all company_franchisor items in the db
         * can filter which fields are returned
         */
        allcompany_franchisor: {
            type: new GraphQLList(company_franchisortype),
            args: { id: {type: GraphQLString}}, 
            resolve(parent,args) {
                return company_franchisor.findAll({})                
            }
        },
        /**
         * query that allows client to search company_franchisor items by field values
         * can filter which fields are returned
         */
        company_franchisor: { 
            type: new GraphQLList(company_franchisortype),
            args: { company_franchisor_id: {type: GraphQLInt}, company_franchisor_name: {type: GraphQLString}}, //args
            resolve(parent,args) {
                 if(args.company_franchisor_id == undefined) {args.company_state_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.company_franchisor_name == undefined) {args.company_state_name = ''}//an error being thrown
                return company_franchisor.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { company_franchisor_id: args.company_franchisor_id },
                        { company_franchisor_name: args.company_franchisor_name }
                      ]
                    }
                  })                
            }
        },
    }
 })

 //Mutation can be ignored for now, taken from my first graphql project
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