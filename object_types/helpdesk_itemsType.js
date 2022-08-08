/**
 * graphql object types of helpdesk_items/related tables in mysql db
 */

const db = require("../db.js") //database variable
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString,GraphQL, GraphQLList} = graphql
const{graphqlHTTP} = require('express-graphql')
const { STRING } = require("sequelize")

import { TEXT, TINYINT } from 'sequelize'
import { FLOAT } from 'sequelize'
import { DATE } from 'sequelize'
import { CHAR } from 'sequelize'
import { DECIMAL } from 'sequelize'
import { INTEGER } from 'sequelize'
import { Sequelize, Model, DataTypes } from 'sequelize';

//const sequelize = new Sequelize('sqlite::memory:');

const helpdesk_itemstype = new GraphQLObjectType({
    name: "helpdesk_items",
    fields: () => ({

    item_id: {type: INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    item_title: {type: STRING},
    item_summary: {type: TEXT},
    item_calltype: {type: INTEGER, unique: true},
    item_cause: {type: INTEGER},
    item_source: {type: INTEGER, unique: true},
    item_os:{type: STRING},
    item_application: {type: STRING},
    item_priority: {type: INTEGER, unique: true},
    item_severity: {type: FLOAT},
    item_status: {type: INTEGER, unique: true},
    item_assigned_to: {type: INTEGER},
    item_created_by: {type: INTEGER},
    item_notify: {type: INTEGER},
    item_requestor: {type: STRING},
    item_requestor_id: {type: STRING},
    item_requestor_email: {type: INTEGER},
    item_requestor_phone: {type: STRING},
    item_requestor_type: {type:TINYINT},
    item_created: {type: DATE},
    item_modified: {type: DATE},
    item_parent: {type: INTEGER, unique: true},
    item_project_id: {type: INTEGER},
    item_company_id: {type: INTEGER},
    item_requestor_room: {type: STRING},
    item_angel_hotel: {type: STRING},
    item_angel_city: {type: STRING},
    item_log_status: {type: STRING},
    item_staff: {type: STRING},
    item_connection: {type: STRING},
    item_angel_qagent: {type: STRING},
    item_angel_qoutcome: {type: STRING},
    item_angel_qtalk: {type: INTEGER},
    item_angel_qwait: {type: INTEGER},
    item_angel_state: {type: STRING},
    item_angel_expiration: {type: DATE},
    item_angel_queue: {type: INTEGER},
    item_angel_cflow: {type: STRING},
    item_pending: {type: INTEGER},
    item_actiontime: {type: DATE},
    item_action: {type: INTEGER},
    item_accounting: {type: INTEGER},
    item_updated: {type: DATE},
    item_zabbix: {type: INTEGER},
    item_newdb: {type: INTEGER}
    
})
})

const helpdesk_items_additionaltype = new GraphQLObjectType({
    name: "helpdesk_items_additional",
    fields: () => ({
    add_item_id: {type: INTEGER, primaryKey: true},
    add_item_type: {type: INTEGER, primaryKey:true},
    add_item_value: {type: STRING}
})
})

const helpdesk_items_archivetype = new GraphQLObjectType({
    name: "helpdesk_itemes_archive",
    fields: () => ({
    item_id: {type: INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    item_title: {type: STRING},
    item_summary: {type: TEXT},
    item_calltype: {type: INTEGER, unique: true},
    item_cause: {type: INTEGER},
    item_source: {type: INTEGER, unique: true},
    item_os:{type: STRING},
    item_application: {type: STRING},
    item_priority: {type: INTEGER, unique: true},
    item_severity: {type: FLOAT},
    item_status: {type: INTEGER, unique: true},
    item_assigned_to: {type: INTEGER},
    item_created_by: {type: INTEGER},
    item_notify: {type: INTEGER},
    item_requestor: {type: STRING},
    item_requestor_id: {type: STRING},
    item_requestor_email: {type: INTEGER},
    item_requestor_phone: {type: STRING},
    item_requestor_type: {type:TINYINT},
    item_created: {type: DATE},
    item_modified: {type: DATE},
    item_parent: {type: INTEGER, unique: true},
    item_project_id: {type: INTEGER},
    item_company_id: {type: INTEGER},
    item_requestor_room: {type: STRING},
    item_angel_hotel: {type: STRING},
    item_angel_city: {type: STRING},
    item_log_status: {type: STRING},
    item_staff: {type: STRING},
    item_connection: {type: STRING},
    item_angel_qagent: {type: STRING},
    item_angel_qoutcome: {type: STRING},
    item_angel_qtalk: {type: INTEGER},
    item_angel_qwait: {type: INTEGER},
    item_angel_state: {type: STRING},
    item_angel_expiration: {type: DATE},
    item_angel_queue: {type: INTEGER},
    item_angel_cflow: {type: STRING},
    item_pending: {type: INTEGER},
    item_actiontime: {type: DATE},
    item_action: {type: INTEGER},
    item_accounting: {type: INTEGER},
    item_updated: {type: DATE},
    item_zabbix: {type: INTEGER},
    item_newdb: {type: INTEGER}
})
})

const helpdesk_items_attachtype = new GraphQLObjectType({
    name: "helpdesk_items_attach",
    fields: () => ({
    attach_id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    attach_type: {type: INTEGER},
    attach_attached_id: {type: INTEGER},
    attach_role: {type: INTEGER},
    attach_date_created: {type: DATE},
    attach_date_updated: {type: DATE},
    attach_attached_by: {type: STRING},
    attach_note: {type: TEXT}
})
})

const helpdesk_items_backuptype = new GraphQLObjectType({
    name: "helpdesk_items_backup",
    fields: () => ({

    item_id: {type: INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    item_title: {type: STRING},
    item_summary: {type: TEXT},
    item_calltype: {type: INTEGER, unique: true},
    item_cause: {type: INTEGER},
    item_source: {type: INTEGER, unique: true},
    item_os:{type: STRING},
    item_application: {type: STRING},
    item_priority: {type: INTEGER, unique: true},
    item_severity: {type: FLOAT},
    item_status: {type: INTEGER, unique: true},
    item_assigned_to: {type: INTEGER},
    item_created_by: {type: INTEGER},
    item_notify: {type: INTEGER},
    item_requestor: {type: STRING},
    item_requestor_id: {type: STRING},
    item_requestor_email: {type: INTEGER},
    item_requestor_phone: {type: STRING},
    item_requestor_type: {type:TINYINT},
    item_created: {type: DATE},
    item_modified: {type: DATE},
    item_parent: {type: INTEGER, unique: true},
    item_project_id: {type: INTEGER},
    item_company_id: {type: INTEGER},
    item_requestor_room: {type: STRING},
    item_angel_hotel: {type: STRING},
    item_angel_city: {type: STRING},
    item_log_status: {type: STRING},
    item_staff: {type: STRING},
    item_connection: {type: STRING},
    item_angel_qagent: {type: STRING},
    item_angel_qoutcome: {type: STRING},
    item_angel_qtalk: {type: INTEGER},
    item_angel_qwait: {type: INTEGER},
    item_angel_state: {type: STRING},
    item_angel_expiration: {type: DATE},
    item_angel_queue: {type: INTEGER},
    item_angel_cflow: {type: STRING},
    item_pending: {type: INTEGER},
    item_actiontime: {type: DATE},
    item_action: {type: INTEGER},
    item_accounting: {type: INTEGER},
    item_updated: {type: DATE},
    item_zabbix: {type: INTEGER}
    
})
})

const helpdesk_item_statustype = new GraphQLObjectType({
    name: "helpdesk_item_status",
    fields: () => ({
    status_id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    status_item_id: {type: INTEGER},
    status_code: {type: TINYINT},
    status_date: {type: STRING},
    status_modified_by: {type: INTEGER},
    status_comment: {type: TEXT}
})
})

const helpdesk_item_status_archivetype = new GraphQLObjectType({
    name: "helpdesk_item_status_archive",
    fields: () => ({
    status_id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    status_item_id: {type: INTEGER},
    status_code: {type: TINYINT},
    status_date: {type: STRING},
    status_modified_by: {type: INTEGER},
    status_comment: {type: TEXT}
})
})

const helpdesk_item_status_backuptype = new GraphQLObjectType({
    name: "helpdesk_item_status_backup",
    fields: () => ({
    status_id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    status_item_id: {type: INTEGER},
    status_code: {type: TINYINT},
    status_date: {type: STRING},
    status_modified_by: {type: INTEGER},
    status_comment: {type: TEXT}
})
})
const helpdesk_item_watcherstype = new GraphQLObjectType({
    name: "helpdesk_item_watchers",
    fields: () => ({
    item_id: {type: INTEGER},
    user_id: {type: INTEGER},
    notify: {type: CHAR}
})
})