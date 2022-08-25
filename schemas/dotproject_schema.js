/**
 * Contains the schema for the dotproject API
 * fields for each table to do a retrieve all query and a searchable query 
 */
const express = require("express")
const graphql = require('graphql')
const Sequelize = require('sequelize');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql
//importing object types
const { companiestype } = require("../object_types/company_types/companiestype")
const { companiesbackuptype } = require("../object_types/company_types/companiesbackuptype")
const { companiesbackup2type } = require("../object_types/company_types/companiesbackup2type")
const { company_additionaltype } = require("../object_types/company_types/company_additionaltype")
const { company_advn_backuptype } = require("../object_types/company_types/company_advn_backuptype")
const { company_advntype } = require("../object_types/company_types/company_advntype")
const { company_allviewtype } = require("../object_types/company_types/company_allviewtype")
const { company_assigned_field_techtype } = require("../object_types/company_types/company_assigned_field_techtype")
const { company_citytype } = require("../object_types/company_types/company_citytype")
const { company_field_techstype } = require("../object_types/company_types/company_field_techstype")
const { company_flagtype } = require("../object_types/company_types/company_flagtype")
const { company_franchisortype } = require("../object_types/company_types/company_franchisortype")
const { company_liscensestype } = require("../object_types/company_types/company_liscensestype")
const { company_locktype } = require("../object_types/company_types/company_locktype")
const { company_phonetype } = require("../object_types/company_types/company_phonetype")
const { company_resellertype } = require("../object_types/company_types/company_resellertype")
const { company_states_amtype } = require("../object_types/company_types/company_states_amtype")
const { company_statestype } = require("../object_types/company_types/company_statestype")
const { company_tagstype } = require("../object_types/company_types/company_tagstype")
const { helpdesk_item_statustype } = require("../object_types/helpdesk_items_types/helpdesk_item_statustype")
const { helpdesk_item_status_archivetype } = require("../object_types/helpdesk_items_types/helpdesk_item_status_archivetype")
const { helpdesk_item_status_backuptype } = require("../object_types/helpdesk_items_types/helpdesk_item_status_backuptype")
const { helpdesk_item_watcherstype } = require("../object_types/helpdesk_items_types/helpdesk_item_watcherstype")
const { helpdesk_items_additionaltype } = require("../object_types/helpdesk_items_types/helpdesk_items_additionaltype")
const { helpdesk_items_attachtype } = require("../object_types/helpdesk_items_types/helpdesk_items_attachtype")
const { helpdesk_items_backuptype } = require("../object_types/helpdesk_items_types/helpdesk_items_backuptype")
const { helpdesk_items_archivetype } = require("../object_types/helpdesk_items_types/helpdesk_items_archivetype")
const { helpdesk_itemstype } = require("../object_types/helpdesk_items_types/helpdesk_itemstype")
//importing models
const { companies } = require("../models/company_models/companies")
const { companiesbackup } = require("../models/company_models/companiesbackup")
const { companiesbackup2 } = require("../models/company_models/companiesbackup2")
const { company_additional } = require("../models/company_models/company_additional")
const { company_advn_backup } = require("../models/company_models/company_advn_backup")
const { company_advn } = require("../models/company_models/company_advn")
const { company_allview } = require("../models/company_models/company_allview")
const { company_assigned_field_tech } = require("../models/company_models/company_assigned_field_tech")
const { company_city } = require("../models/company_models/company_city")
const { company_field_techs } = require("../models/company_models/company_field_techs")
const { company_flag } = require("../models/company_models/company_flag")
const { company_franchisor } = require("../models/company_models/company_franchisor")
const { company_liscenses } = require("../models/company_models/company_liscences")
const { company_lock } = require("../models/company_models/company_lock")
const { company_phone } = require("../models/company_models/company_phone")
const { company_reseller } = require("../models/company_models/company_reseller")
const { company_states_am } = require("../models/company_models/company_states_am")
const { company_states } = require("../models/company_models/company_states")
const { company_tags } = require("../models/company_models/company_tags")
const { helpdesk_item_status } = require("../models/helpdesk_items_models/helpdesk_item_status")
const { helpdesk_item_status_archive } = require("../models/helpdesk_items_models/helpdesk_item_status_archive")
const { helpdesk_item_status_backup } = require("../models/helpdesk_items_models/helpdesk_item_status_backup")
const { helpdesk_item_watchers } = require("../models/helpdesk_items_models/helpdesk_item_watchers")
const { helpdesk_items_additional } = require("../models/helpdesk_items_models/helpdesk_items_additional")
const { helpdesk_items_attach } = require("../models/helpdesk_items_models/helpdesk_items_attach")
const { helpdesk_items_backup } = require("../models/helpdesk_items_models/helpdesk_items_backup")
const { helpdesk_items_archive } = require("../models/helpdesk_items_models/helpdesk_items_archive")
const { helpdesk_items } = require("../models/helpdesk_items_models/helpdesk_items")

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Contains Schema to query information on tables in the dotproject db",
  fields: {
    /**
     * query that returns all company_states db items
     * can filter which fields are returned
     */
    allcompany_states: {
      type: new GraphQLList(company_statestype),
      description: "Returns the data on all company_states items in the dotproject db allowing you to filter which fields are returned",
      args: {},
      resolve(parent, args) {
        return company_states.findAll({})
      }
    },

    /**
     * query that returns all companies items in the db
     * can filter which fields are returned
     */
    allcompanies: {
      type: new GraphQLList(companiestype),
      description: "Returns the data on all companies items in the dotproject db allowing you to filter which fields are returned",
      args: {},
      resolve(parent, args) {
        return companies.findAll({})
      }
    },

    /**
     * query that returns all company_city items in the db
     * can filter which fields are returned
     */
    allcompany_city: {
      type: new GraphQLList(company_citytype),
      description: "Returns the data on all company_city items in the dotproject db allowing you to filter which fields are returned",
      args: {},
      resolve(parent, args) {
        return company_city.findAll({})
      }
    },

    /**
     * query that returns all company_flag items in the db
     * can filter which fields are returned
     */
    allcompany_flag: {
      type: new GraphQLList(company_flagtype),
      description: "Returns the data on all company_flag items in the dotproject db allowing you to filter which fields are returned",
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: {},
      resolve(parent, args) {
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
      args: { company_state_id: { type: GraphQLString, description: "ID representing the company state" }, company_state_name: { type: GraphQLString, description: "Name of existing company state" } }, //args
      resolve(parent, args) {
        if (args.company_state_id == undefined) { args.company_state_id = '' } //if no values given for args, sets them to null to avoid 
        if (args.company_state_name == undefined) { args.company_state_name = '' }//an error being thrown
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
      args: { company_id: { type: GraphQLInt, description: "ID representing existing company" }, company_name: { type: GraphQLString, description: "Name of existing company" }, company_city: { type: GraphQLString, description: "City where company resides" }, company_state: { type: GraphQLString, description: "State where company resides" }, company_flag: { type: GraphQLString, description: "Three letter code corresponding to the company franchise" } }, //args
      resolve(parent, args) {
        if (args.company_id == undefined) { args.company_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.company_name == undefined) { args.company_name = 'Empty' }//an error being thrown
        if (args.company_city == undefined) { args.company_city = 'Empty' }
        if (args.company_state == undefined) { args.company_state = 'Empty' }
        if (args.company_flag == undefined) { args.company_flag = 'Empty' }
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
      args: { company_city_id: { type: GraphQLInt, description: "ID representing existing company_city" }, company_city_ccc: { type: GraphQLString, description: "Three letter code representing existing a company_city's company_city_name " }, company_city_name: { type: GraphQLString, description: "Name of existing companies city" }, company_city_sound: { type: GraphQLString, description: "Phonetic description of how to say city name" } },  //args
      resolve(parent, args) {
        if (args.company_city_id == undefined) { args.company_city_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.company_city_ccc == undefined) { args.company_city_ccc = 'Empty' }//an error being thrown
        if (args.company_city_name == undefined) { args.company_city_name = 'Empty' }
        if (args.company_city_sound == undefined) { args.company_city_sound = 'Empty' }

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
      args: { company_flag_id: { type: GraphQLInt, description: "Flag ID" }, company_flag_nnn: { type: GraphQLString, description: "Three letter code representing the flag's name" }, company_flag_name: { type: GraphQLString, description: "Flag name" }, company_flag_franchisor: { type: GraphQLInt, description: "Id of franchisor using flag" }, company_flag_sound: { type: GraphQLString, description: "Phonetic description of how to say the flag name" }, company_flag_color: { type: GraphQLString, description: "Flag color in hexadecimal color code" }, company_flag_body: { type: GraphQLString, description: "File representing body of flag" }, company_flag_ad: { type: GraphQLString, description: "Image file representing company_flag" }, company_flag_css: { type: GraphQLString, description: "css code representing company flag" }, company_flag_terms: { type: GraphQLString, description: ".txt file with terms of the flag" } },  //args
      resolve(parent, args) {
        if (args.company_flag_id == undefined) { args.company_flag_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.company_flag_nnn == undefined) { args.company_flag_nnn = 'Empty' }//an error being thrown
        if (args.company_flag_name == undefined) { args.company_flag_name = 'Empty' }
        if (args.company_flag_franchisor == undefined) { args.company_flag_franchisor = -1 }
        if (args.company_flag_sound == undefined) { args.company_flag_sound = 'Empty' }
        if (args.company_flag_color == undefined) { args.company_flag_color = 'Empty' }
        if (args.company_flag_body == undefined) { args.company_flag_body = 'Empty' }
        if (args.company_flag_ad == undefined) { args.company_flag_ad = 'Empty' }
        if (args.company_flag_css == undefined) { args.company_flag_css = 'Empty' }
        if (args.company_flag_terms == undefined) { args.company_flag_terms = 'Empty' }

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
      args: { company_franchisor_id: { type: GraphQLInt, description: "Franchisor ID " }, company_franchisor_name: { type: GraphQLString, description: "Franchisor name" } }, //args
      resolve(parent, args) {
        if (args.company_franchisor_id == undefined) { args.company_franchisor_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.company_franchisor_name == undefined) { args.company_franchisor_name = '' }//an error being thrown
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
      args: { item_id: { type: GraphQLInt }, item_title: { type: GraphQLString }, item_priority: { type: GraphQLInt } }, //args
      resolve(parent, args) {
        if (args.item_id == undefined) { args.item_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.item_title == undefined) { args.item_title = 'err' }//an error being thrown
        if (args.item_priority == undefined) { args.item_priority = -1 }
        return helpdesk_items.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { item_id: args.item_id },
              { item_title: args.item_title },
              { item_priority: args.item_priority }
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
      args: { add_item_id: { type: GraphQLInt }, add_item_type: { type: GraphQLInt }, add_item_value: { type: GraphQLString } }, //args
      resolve(parent, args) {
        if (args.add_item_id == undefined) { args.add_item_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.add_item_type == undefined) { args.add_item_type = -1 }//an error being thrown
        if (args.add_item_value == undefined) { args.add_item_value = "err" }
        return helpdesk_items_additional.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { add_item_id: args.add_item_id },
              { add_item_type: args.add_item_type },
              { add_item_value: args.add_item_value }
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
      args: { item_id: { type: GraphQLInt }, item_title: { type: GraphQLString }, item_value_priority: { type: GraphQLInt } }, //args
      resolve(parent, args) {
        if (args.item_id == undefined) { args.item_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.item_title == undefined) { args.item_title = 'err' }//an error being thrown
        if (args.item_priority == undefined) { args.item_priority = -1 }
        return helpdesk_items_archive.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { item_id: args.item_id },
              { item_title: args.item_title },
              { item_priority: args.item_priority }
            ]
          }
        })
      }
    },

    helpdesk_items_attach: {
      type: new GraphQLList(helpdesk_items_attachtype),
      description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
      args: { attach_id: { type: GraphQLInt }, attach_item_id: { type: GraphQLString }, attach_role: { type: GraphQLInt }, attach_note: { type: GraphQLString } }, //args
      resolve(parent, args) {
        if (args.attach_id == undefined) { args.attach_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.attach_item_id == undefined) { args.attach_item_id = -1 }//an error being thrown
        if (args.attach_role == undefined) { args.attach_role = -1 }
        if (args.attach_note == undefined) { args.attach_note = 'err' }
        return helpdesk_items_attach.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { attach_item_id: args.attach_item_id },
              { attach_id: args.attach_id },
              { attach_role: args.attach_role },
              { attach_note: args.attach_note }
            ]
          }
        })
      }
    },

    helpdesk_item_status: {
      type: new GraphQLList(helpdesk_item_statustype),
      description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
      args: { status_id: { type: GraphQLInt }, status_item_id: { type: GraphQLInt }, status_code: { type: GraphQLInt } }, //args
      resolve(parent, args) {
        if (args.status_id == undefined) { args.status_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.status_item_id == undefined) { args.status_item_id = -1 }//an error being thrown
        if (args.status_code == undefined) { args.status_code = -1 }

        return helpdesk_item_status.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { status_item_id: args.status_item_id },
              { status_id: args.status_id },
              { status_code: args.status_code }

            ]
          }
        })
      }
    },

    helpdesk_item_status_archive: {
      type: new GraphQLList(helpdesk_item_status_archivetype),
      description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
      args: { status_id: { type: GraphQLInt }, status_item_id: { type: GraphQLInt }, status_code: { type: GraphQLInt } }, //args
      resolve(parent, args) {
        if (args.status_id == undefined) { args.status_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.status_item_id == undefined) { args.status_item_id = -1 }//an error being thrown
        if (args.status_code == undefined) { args.status_code = -1 }

        return helpdesk_item_status_archive.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { status_item_id: args.status_item_id },
              { status_id: args.status_id },
              { status_code: args.status_code }

            ]
          }
        })
      }
    },

    helpdesk_item_status_backup: {
      type: new GraphQLList(helpdesk_item_status_backuptype),
      description: "Returns the data on helpdesk_items_additional item(s) by searching using arguments entered, allows you to filter which fields are returned",
      args: { status_id: { type: GraphQLInt }, status_item_id: { type: GraphQLInt }, status_code: { type: GraphQLInt, } }, //args
      resolve(parent, args) {
        if (args.status_id == undefined) { args.status_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.status_item_id == undefined) { args.status_item_id = -1 }//an error being thrown
        if (args.status_code == undefined) { args.status_code = -1 }

        return helpdesk_item_status_backup.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { status_item_id: args.status_item_id },
              { status_id: args.status_id },
              { status_code: args.status_code }

            ]
          }
        })
      }
    },

    helpdesk_item_watchers: {
      type: new GraphQLList(helpdesk_item_watcherstype),
      description: "Returns the data on helpdesk_item_watchers item(s) by searching using arguments entered, allows you to filter which fields are returned",
      args: { item_id: { type: GraphQLInt }, user_id: { type: GraphQLInt }, notify: { type: GraphQLString } }, //args
      resolve(parent, args) {
        if (args.item_id == undefined) { args.item_id = -1 } //if no values given for args, sets them to null to avoid 
        if (args.user_id == undefined) { args.user_id = -1 }//an error being thrown
        if (args.notify == undefined) { args.notify = '!' }

        return helpdesk_item_watchers.findAll({ //returns items found in the db
          where: {
            [Sequelize.Op.or]: [
              { item_id: args.item_id },
              { user_id: args.user_id },
              { notify: args.notify }

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
      resolve(parent, args) {
        return
      }
    }
  }
})

const schema = new graphql.GraphQLSchema({ query: RootQuery, mutation: Mutation }) //creating the schema to be used 
module.exports = { schema }