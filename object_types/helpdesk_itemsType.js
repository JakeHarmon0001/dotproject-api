/**
 * graphql object types of helpdesk_items/related tables in mysql db
 */

const db = require("../mysql/db.js") //database variable
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString,GraphQL, GraphQLList} = graphql
//const{graphqlHTTP} = require('express-graphql')
//const { STRING: GraphQLString } = require("sequelize")

// import { TEXT as GraphQLString, TINYINT as GraphQLInt } from 'sequelize'
// import { FLOAT } from 'sequelize'
// import { DATE as GraphQLString } from 'sequelize'
// import { CHAR } from 'sequelize'
// import { DECIMAL } from 'sequelize'
// import { INTEGER as GraphQLInt } from 'sequelize'
// import { Sequelize, Model, DataTypes } from 'sequelize';

// const {
//     GraphQLObjectType,
//     GraphQLSchema,
//     GraphQLInt,
//     GraphQLString,
//     GraphQL,
//     GraphQLList,
//   } = graphql;
//const sequelize = new Sequelize('sqlite::memory:');

const helpdesk_itemstype = new GraphQLObjectType({
    name: "helpdesk_items",
    fields: () => ({

    item_id: {type: GraphQLInt, unique: true, autoIncrement: true, primaryKey: true},
    item_title: {type: GraphQLString},
    item_summary: {type: GraphQLString},
    item_calltype: {type: GraphQLInt, unique: true},
    item_cause: {type: GraphQLInt},
    item_source: {type: GraphQLInt, unique: true},
    item_os:{type: GraphQLString},
    item_application: {type: GraphQLString},
    item_priority: {type: GraphQLInt, unique: true},
    item_severity: {type: GraphQLInt},
    item_status: {type: GraphQLInt, unique: true},
    item_assigned_to: {type: GraphQLInt},
    item_created_by: {type: GraphQLInt},
    item_notify: {type: GraphQLInt},
    item_requestor: {type: GraphQLString},
    item_requestor_id: {type: GraphQLString},
    item_requestor_email: {type: GraphQLInt},
    item_requestor_phone: {type: GraphQLString},
    item_requestor_type: {type:GraphQLInt},
    item_created: {type: GraphQLString},
    item_modified: {type: GraphQLString},
    item_parent: {type: GraphQLInt, unique: true},
    item_project_id: {type: GraphQLInt},
    item_company_id: {type: GraphQLInt},
    item_requestor_room: {type: GraphQLString},
    item_angel_hotel: {type: GraphQLString},
    item_angel_city: {type: GraphQLString},
    item_log_status: {type: GraphQLString},
    item_staff: {type: GraphQLString},
    item_connection: {type: GraphQLString},
    item_angel_qagent: {type: GraphQLString},
    item_angel_qoutcome: {type: GraphQLString},
    item_angel_qtalk: {type: GraphQLInt},
    item_angel_qwait: {type: GraphQLInt},
    item_angel_state: {type: GraphQLString},
    item_angel_expiration: {type: GraphQLString},
    item_angel_queue: {type: GraphQLInt},
    item_angel_cflow: {type: GraphQLString},
    item_pending: {type: GraphQLInt},
    item_actiontime: {type: GraphQLString},
    item_action: {type: GraphQLInt},
    item_accounting: {type: GraphQLInt},
    item_updated: {type: GraphQLString},
    item_zabbix: {type: GraphQLInt},
    item_newdb: {type: GraphQLInt}
    
})
})

const helpdesk_items_additionaltype = new GraphQLObjectType({
    name: "helpdesk_items_additional",
    fields: () => ({
    add_item_id: {type: GraphQLInt, primaryKey: true},
    add_item_type: {type: GraphQLInt, primaryKey:true},
    add_item_value: {type: GraphQLString}
})
})

const helpdesk_items_archivetype = new GraphQLObjectType({
    name: "helpdesk_itemes_archive",
    fields: () => ({
    item_id: {type: GraphQLInt, unique: true, autoIncrement: true, primaryKey: true},
    item_title: {type: GraphQLString},
    item_summary: {type: GraphQLString},
    item_calltype: {type: GraphQLInt, unique: true},
    item_cause: {type: GraphQLInt},
    item_source: {type: GraphQLInt, unique: true},
    item_os:{type: GraphQLString},
    item_application: {type: GraphQLString},
    item_priority: {type: GraphQLInt, unique: true},
    item_severity: {type: GraphQLInt},
    item_status: {type: GraphQLInt, unique: true},
    item_assigned_to: {type: GraphQLInt},
    item_created_by: {type: GraphQLInt},
    item_notify: {type: GraphQLInt},
    item_requestor: {type: GraphQLString},
    item_requestor_id: {type: GraphQLString},
    item_requestor_email: {type: GraphQLInt},
    item_requestor_phone: {type: GraphQLString},
    item_requestor_type: {type:GraphQLInt},
    item_created: {type: GraphQLString},
    item_modified: {type: GraphQLString},
    item_parent: {type: GraphQLInt, unique: true},
    item_project_id: {type: GraphQLInt},
    item_company_id: {type: GraphQLInt},
    item_requestor_room: {type: GraphQLString},
    item_angel_hotel: {type: GraphQLString},
    item_angel_city: {type: GraphQLString},
    item_log_status: {type: GraphQLString},
    item_staff: {type: GraphQLString},
    item_connection: {type: GraphQLString},
    item_angel_qagent: {type: GraphQLString},
    item_angel_qoutcome: {type: GraphQLString},
    item_angel_qtalk: {type: GraphQLInt},
    item_angel_qwait: {type: GraphQLInt},
    item_angel_state: {type: GraphQLString},
    item_angel_expiration: {type: GraphQLString},
    item_angel_queue: {type: GraphQLInt},
    item_angel_cflow: {type: GraphQLString},
    item_pending: {type: GraphQLInt},
    item_actiontime: {type: GraphQLString},
    item_action: {type: GraphQLInt},
    item_accounting: {type: GraphQLInt},
    item_updated: {type: GraphQLString},
    item_zabbix: {type: GraphQLInt},
    item_newdb: {type: GraphQLInt}
})
})

const helpdesk_items_attachtype = new GraphQLObjectType({
    name: "helpdesk_items_attach",
    fields: () => ({
    attach_id: {type: GraphQLInt, autoIncrement: true, primaryKey: true},
    attach_type: {type: GraphQLInt},
    attach_attached_id: {type: GraphQLInt},
    attach_role: {type: GraphQLInt},
    attach_date_created: {type: GraphQLString},
    attach_date_updated: {type: GraphQLString},
    attach_attached_by: {type: GraphQLString},
    attach_note: {type: GraphQLString}
})
})

const helpdesk_items_backuptype = new GraphQLObjectType({
    name: "helpdesk_items_backup",
    fields: () => ({

    item_id: {type: GraphQLInt, unique: true, autoIncrement: true, primaryKey: true},
    item_title: {type: GraphQLString},
    item_summary: {type: GraphQLString},
    item_calltype: {type: GraphQLInt, unique: true},
    item_cause: {type: GraphQLInt},
    item_source: {type: GraphQLInt, unique: true},
    item_os:{type: GraphQLString},
    item_application: {type: GraphQLString},
    item_priority: {type: GraphQLInt, unique: true},
    item_severity: {type: GraphQLInt},
    item_status: {type: GraphQLInt, unique: true},
    item_assigned_to: {type: GraphQLInt},
    item_created_by: {type: GraphQLInt},
    item_notify: {type: GraphQLInt},
    item_requestor: {type: GraphQLString},
    item_requestor_id: {type: GraphQLString},
    item_requestor_email: {type: GraphQLInt},
    item_requestor_phone: {type: GraphQLString},
    item_requestor_type: {type:GraphQLInt},
    item_created: {type: GraphQLString},
    item_modified: {type: GraphQLString},
    item_parent: {type: GraphQLInt, unique: true},
    item_project_id: {type: GraphQLInt},
    item_company_id: {type: GraphQLInt},
    item_requestor_room: {type: GraphQLString},
    item_angel_hotel: {type: GraphQLString},
    item_angel_city: {type: GraphQLString},
    item_log_status: {type: GraphQLString},
    item_staff: {type: GraphQLString},
    item_connection: {type: GraphQLString},
    item_angel_qagent: {type: GraphQLString},
    item_angel_qoutcome: {type: GraphQLString},
    item_angel_qtalk: {type: GraphQLInt},
    item_angel_qwait: {type: GraphQLInt},
    item_angel_state: {type: GraphQLString},
    item_angel_expiration: {type: GraphQLString},
    item_angel_queue: {type: GraphQLInt},
    item_angel_cflow: {type: GraphQLString},
    item_pending: {type: GraphQLInt},
    item_actiontime: {type: GraphQLString},
    item_action: {type: GraphQLInt},
    item_accounting: {type: GraphQLInt},
    item_updated: {type: GraphQLString},
    item_zabbix: {type: GraphQLInt}
    
})
})

const helpdesk_item_statustype = new GraphQLObjectType({
    name: "helpdesk_item_status",
    fields: () => ({
    status_id: {type: GraphQLInt, autoIncrement: true, primaryKey: true},
    status_item_id: {type: GraphQLInt},
    status_code: {type: GraphQLInt},
    status_date: {type: GraphQLString},
    status_modified_by: {type: GraphQLInt},
    status_comment: {type: GraphQLString}
})
})

const helpdesk_item_status_archivetype = new GraphQLObjectType({
    name: "helpdesk_item_status_archive",
    fields: () => ({
    status_id: {type: GraphQLInt, autoIncrement: true, primaryKey: true},
    status_item_id: {type: GraphQLInt},
    status_code: {type: GraphQLInt},
    status_date: {type: GraphQLString},
    status_modified_by: {type: GraphQLInt},
    status_comment: {type: GraphQLString}
})
})

const helpdesk_item_status_backuptype = new GraphQLObjectType({
    name: "helpdesk_item_status_backup",
    fields: () => ({
    status_id: {type: GraphQLInt, autoIncrement: true, primaryKey: true},
    status_item_id: {type: GraphQLInt},
    status_code: {type: GraphQLInt},
    status_date: {type: GraphQLString},
    status_modified_by: {type: GraphQLInt},
    status_comment: {type: GraphQLString}
})
})
const helpdesk_item_watcherstype = new GraphQLObjectType({
    name: "helpdesk_item_watchers",
    fields: () => ({
    item_id: {type: GraphQLInt},
    user_id: {type: GraphQLInt},
    notify: {type: CHAR}
})
})

module.exports = {helpdesk_item_status_archivetype, helpdesk_item_status_backuptype, helpdesk_item_statustype, helpdesk_item_watcherstype, helpdesk_items_additionaltype, helpdesk_items_archivetype, helpdesk_items_attachtype, helpdesk_items_backuptype, helpdesk_itemstype}