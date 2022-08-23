/**
 * Contains the schema for the dotproject API
 * fields for each table to do a retrieve all query and a searchable query 
 */

const express = require("express")
const graphql = require('graphql')
const Sequelize = require('sequelize');

 const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql
 //const{graphqlHTTP} = require('express-graphql')
 const {company_statestype, companiestype, company_citytype, company_flagtype, company_franchisortype} = require('../object_types/companiesType')
 const {helpdesk_itemstype, helpdesk_items_additionaltype, helpdesk_items_archivetype, helpdesk_items_attachtype, helpdesk_item_statustype, helpdesk_items_backuptype, helpdesk_item_status_backuptype, helpdesk_item_watcherstype, helpdesk_item_status_archivetype} = require("../object_types/helpdesk_itemsType")
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
    helpdesk_items,
    helpdesk_item_status,
    helpdesk_item_status_archive,
    helpdesk_item_status_backup,
    helpdesk_item_watchers,
    helpdesk_items_additional,
    helpdesk_items_archive,
    helpdesk_items_attach,
    helpdesk_items_backup
  } = require("../models/index.js");

  const RootQuery = new GraphQLObjectType ({
    name: "RootQuery",
    description:"Contains Schema to query information on tables in the dotproject db",
    fields: {
        /**
         * query that returns all company_states db items
         * can filter which fields are returned
         */
        allcompany_states: {
            type: new GraphQLList(company_statestype),
            description: "Returns the data on all company_states items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return company_states.findAll({})                
            }
        },

        /**
         * query that returns all companies items in the db
         * can filter which fields are returned
         */
         allcompanies:{
            type: new GraphQLList(companiestype),
            description: "Returns the data on all companies items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return companies.findAll({})                
            }
        }, 

        /**
         * query that returns all company_city items in the db
         * can filter which fields are returned
         */
         allcompany_city:{
            type: new GraphQLList(company_citytype),
            description: "Returns the data on all company_city items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return company_city.findAll({})                
            }
        },

        /**
         * query that returns all company_flag items in the db
         * can filter which fields are returned
         */
         allcompany_flag:{
            type: new GraphQLList(company_flagtype),
            description: "Returns the data on all company_flag items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return company_flag.findAll({})                
            }
        },

        /**
         * query that returns all company_franchisor items in the db
         * can filter which fields are returned
         */
         allcompany_franchisor: {
            type: new GraphQLList(company_franchisortype),
            description: "Returns the data on all company_franchisor items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return company_franchisor.findAll({})                
            }
        },

        /**
         * query that returns all helpdesk_items db items
         * can filter which fields are returned
         */
         allhelpdesk_items: {
            type: new GraphQLList(helpdesk_itemstype),
            description: "Returns the data on all company_states items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_items.findAll({})                
            }
        },

         /**
         * query that returns all helpdesk_items_additional db items
         * can filter which fields are returned
         */
          allhelpdesk_items_additional: {
            type: new GraphQLList(helpdesk_items_additionaltype),
            description: "Returns the data on all helpdesk_items_additional items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_items_additional.findAll({})                
            }
        },

         /**
         * query that returns all company_states db items
         * can filter which fields are returned
         */
          allhelpdesk_items_archive: {
            type: new GraphQLList(helpdesk_items_archivetype),
            description: "Returns the data on all helpdesk_items_archive items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_items_archive.findAll({})                
            }
        },

         /**
         * query that returns all helpdesk_items_attach db items
         * can filter which fields are returned
         */
          allhelpdesk_items_attach: {
            type: new GraphQLList(helpdesk_items_attachtype),
            description: "Returns the data on all helpdesk_items_attach items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_items_attach.findAll({})                
            }
        },

         /**
         * query that returns all helpdesk_item_status db items
         * can filter which fields are returned
         */
          allhelpdesk_item_status: {
            type: new GraphQLList(helpdesk_item_statustype),
            description: "Returns the data on all helpdesk_item_status items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_item_status.findAll({})                
            }
        },

         /**
         * query that returns all company_states db items
         * can filter which fields are returned
         */
          allhelpdesk_items_archive: {
            type: new GraphQLList(helpdesk_items_archivetype),
            description: "Returns the data on all helpdesk_items_archive items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_items_archive.findAll({})                
            }
        },

         /**
         * query that returns all company_states db items
         * can filter which fields are returned
         */
          allhelpdesk_items_backup: {
            type: new GraphQLList(helpdesk_items_backuptype),
            description: "Returns the data on all helpdesk_items_backup items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_items_backup.findAll({})                
            }
        },

         /**
         * query that returns all company_states db items
         * can filter which fields are returned
         */
          allhelpdesk_item_watchers: {
            type: new GraphQLList(helpdesk_item_watcherstype),
            description: "Returns the data on all company_states items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_item_watchers.findAll({})                
            }
        },



         /**
         * query that returns all helpdesk_item_status_backup db items
         * can filter which fields are returned
         */
          allhelpdesk_item_status_backup: {
            type: new GraphQLList(helpdesk_item_status_backuptype),
            description: "Returns the data on all helpdesk_item_status_backup items in the dotproject db allowing you to filter which fields are returned",
            args: { }, 
            resolve(parent,args) {
                return helpdesk_item_status_backup.findAll({})                
            }
        },
        /**
         * query that allows client to search company_states items by company_states_name or company_states_id
         * can filter which fields are returned
         */
        company_states: { 
            type: new GraphQLList(company_statestype),
            description: "Returns the data on company_states item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { company_state_id: {type: GraphQLString, description: "ID representing the company state"}, company_state_name: {type: GraphQLString, description: "Name of existing company state"}}, //args
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
         * query that allows client to search companies items by company_states_name or company_states_id
         * can filter which fields are returned
         */
        companies: { 
            type: new GraphQLList(companiestype),
            description: "Returns the data on companies item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { company_id: {type: GraphQLInt, description: "ID representing existing company"}, company_name: {type: GraphQLString, description: "Name of existing company"} , company_city: {type: GraphQLString, description: "City where company resides"},  company_state: {type: GraphQLString, description: "State where company resides"} , company_flag: {type: GraphQLString, description: "Three letter code corresponding to the company franchise"}}, //args
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
         * query that allows client to search company_city items by field values
         * can filter which fields are returned
         */
         company_city: { 
            type: new GraphQLList(company_citytype),
            description: "Returns the data on company_city item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { company_city_id: {type: GraphQLInt, description: "ID representing existing company_city"}, company_city_ccc: {type: GraphQLString,  description: "Three letter code representing existing a company_city's company_city_name "} , company_city_name: {type: GraphQLString, description: "Name of existing companies city"},  company_city_sound: {type: GraphQLString, description: "Phonetic description of how to say city name"} },  //args
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
         * query that allows client to search company_flag items by field values
         * can filter which fields are returned
         */
         company_flag: { 
            type: new GraphQLList(company_flagtype),
            description: "Returns the data on company_flag item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { company_flag_id: {type: GraphQLInt, description: "Flag ID"}, company_flag_nnn: {type: GraphQLString, description: "Three letter code representing the flag's name"} , company_flag_name: {type: GraphQLString, description: "Flag name"},  company_flag_franchisor: {type: GraphQLInt, description: "Id of franchisor using flag" },  company_flag_sound: {type: GraphQLString, description: "Phonetic description of how to say the flag name"},  company_flag_color: {type: GraphQLString, description: "Flag color in hexadecimal color code"},  company_flag_body: {type: GraphQLString, description: "File representing body of flag"},  company_flag_ad: {type: GraphQLString, description: "Image file representing company_flag"},  company_flag_css: {type: GraphQLString, description: "css code representing company flag"},  company_flag_terms: {type: GraphQLString, description: ".txt file with terms of the flag"} },  //args
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
         * query that allows client to search company_franchisor items by field values
         * can filter which fields are returned
         */
        company_franchisor: { 
            type: new GraphQLList(company_franchisortype),
            description: "Returns the data on company_franchisor item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { company_franchisor_id: {type: GraphQLInt, description: "Franchisor ID "}, company_franchisor_name: {type: GraphQLString, description: "Franchisor name"}}, //args
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
        /**
         * query that allows client to search helpdesk_items items by field values
         * can filter which fields are returned
         */
        helpdesk_items: { 
            type: new GraphQLList(helpdesk_itemstype),
            description: "Returns the data on helpdesk_items item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { item_id: {type: GraphQLInt, description: "helpdesk_item ID "}, item_title: {type: GraphQLString, description: "helpdesk_item title"}, item_priority: {type: GraphQLInt, description: "priority of helpdesk_item"}}, //args
            resolve(parent,args) {
                 if(args.item_id == undefined) {args.item_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.item_title == undefined) {args.item_title = 'err'}//an error being thrown
                 if(args.item_priority == undefined) {args.item_priority = -1}
                return helpdesk_items.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { item_id: args.item_id },
                        { item_title: args.item_title },
                        { item_priority: args.item_priority}
                      ]
                    }
                  })                
            }
        },
        /**
         * query that allows client to search helpdesk_items_additional items by field values
         * can filter which fields are returned
         */
        helpdesk_items_additional: { 
            type: new GraphQLList(helpdesk_items_additionaltype),
            description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { add_item_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, add_item_type: {type: GraphQLInt, description: "helpdesk_item_additional type"}, add_item_value: {type: GraphQLString, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                 if(args.add_item_id == undefined) {args.add_item_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.add_item_type == undefined) {args.add_item_type = -1}//an error being thrown
                 if(args.add_item_value == undefined) {args.add_item_value = "err"}
                return helpdesk_items_additional.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { add_item_id: args.add_item_id },
                        { add_item_type: args.add_item_type },
                        { add_item_value: args.add_item_value}
                      ]
                    }
                  })                
            }
        },

        /**
         * query that allows client to search helpdesk_items_archive items by field values
         * can filter which fields are returned
         */
         helpdesk_items_archive: { 
            type: new GraphQLList(helpdesk_items_archivetype),
            description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { item_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, item_title: {type: GraphQLString, description: "helpdesk_item_additional type"}, item_value_priority: {type: GraphQLInt, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                if(args.item_id == undefined) {args.item_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.item_title == undefined) {args.item_title = 'err'}//an error being thrown
                 if(args.item_priority == undefined) {args.item_priority = -1}
                return helpdesk_items_archive.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { item_id: args.item_id },
                        { item_title: args.item_title },
                        { item_priority: args.item_priority}
                      ]
                    }
                  })                
            }
        },

        helpdesk_items_attach: { 
            type: new GraphQLList(helpdesk_items_attachtype),
            description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { attach_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, attach_item_id: {type: GraphQLString, description: "helpdesk_item_additional type"}, attach_role: {type: GraphQLInt, description: "value of helpdesk_item_additional"}, attach_note: {type: GraphQLString, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                if(args.attach_id == undefined) {args.attach_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.attach_item_id == undefined) {args.attach_item_id = -1}//an error being thrown
                 if(args.attach_role == undefined) {args.attach_role= -1}
                 if(args.attach_note == undefined) {args.attach_note = 'err'}
                return helpdesk_items_attach.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { attach_item_id: args.attach_item_id },
                        { attach_id: args.attach_id},
                        { attach_role: args.attach_role},
                        {attach_note: args.attach_note}
                      ]
                    }
                  })                
            }
        },

        helpdesk_item_status: { 
            type: new GraphQLList(helpdesk_item_statustype),
            description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { status_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, status_item_id: {type: GraphQLInt, description: "helpdesk_item_additional type"}, status_code: {type: GraphQLInt, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                if(args.status_id == undefined) {args.status_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.status_item_id == undefined) {args.status_item_id = -1}//an error being thrown
                 if(args.status_code == undefined) {args.status_code = -1}
                 
                return helpdesk_item_status.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { status_item_id: args.status_item_id },
                        { status_id: args.status_id},
                        { status_code: args.status_code}
                        
                      ]
                    }
                  })                
            }
        },

        helpdesk_item_status_archive: { 
            type: new GraphQLList(helpdesk_item_status_archivetype),
            description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { status_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, status_item_id: {type: GraphQLInt, description: "helpdesk_item_additional type"}, status_code: {type: GraphQLInt, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                if(args.status_id == undefined) {args.status_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.status_item_id == undefined) {args.status_item_id = -1}//an error being thrown
                 if(args.status_code == undefined) {args.status_code = -1}
                 
                return helpdesk_item_status_archive.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { status_item_id: args.status_item_id },
                        { status_id: args.status_id},
                        { status_code: args.status_code}
                        
                      ]
                    }
                  })                
            }
        },

        helpdesk_item_status_backup: { 
            type: new GraphQLList(helpdesk_item_status_backuptype),
            description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { status_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, status_item_id: {type: GraphQLInt, description: "helpdesk_item_additional type"}, status_code: {type: GraphQLInt, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                if(args.status_id == undefined) {args.status_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.status_item_id == undefined) {args.status_item_id = -1}//an error being thrown
                 if(args.status_code == undefined) {args.status_code = -1}
                 
                return helpdesk_item_status_backup.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { status_item_id: args.status_item_id },
                        { status_id: args.status_id},
                        { status_code: args.status_code}
                        
                      ]
                    }
                  })                
            }
        },

        helpdesk_item_watchers: { 
            type: new GraphQLList(helpdesk_item_watcherstype),
            description: "Returns the data on helpdesk_item_watchers item(s) by searching using arguments entered, allows you to filter which fields are returned",
            args: { item_id: {type: GraphQLInt, description: "helpdesk_item_additional ID "}, user_id: {type: GraphQLInt, description: "helpdesk_item_additional type"}, notify: {type: GraphQLString, description: "value of helpdesk_item_additional"}}, //args
            resolve(parent,args) {
                if(args.item_id == undefined) {args.item_id = -1} //if no values given for args, sets them to null to avoid 
                 if(args.user_id == undefined) {args.user_id = -1}//an error being thrown
                 if(args.notify == undefined) {args.notify = '!'}
                 
                return helpdesk_item_watchers.findAll({ //returns items found in the db
                    where: {
                      [Sequelize.Op.or]: [
                        { item_id: args.item_id },
                        { user_id: args.user_id},
                        { notify: args.notify}
                        
                      ]
                    }
                  })                
            }
        }

        
    }
 })

 //Mutation can be ignored for now, taken from my first graphql project
const Mutation = new GraphQLObjectType({
     name: "Mutation",
    fields: {
        createCompany: {
            type: companiestype,
            args: {},
            resolve(parent,args) {
                return
            }
        }
    }
 })

const schema = new graphql.GraphQLSchema({query: RootQuery, mutation: Mutation})

 module.exports = {schema}