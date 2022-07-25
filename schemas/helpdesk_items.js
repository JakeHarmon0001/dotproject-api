const db = require("../database/db.js") //database variable
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString,GraphQL, GraphQLList} = graphql
const{graphqlHTTP} = require('express-graphql')
const { STRING } = require("sequelize")

import { TEXT, TINYINT } from 'sequelize'
import { FLOAT } from 'sequelize'
import { CHAR } from 'sequelize'
import { DECIMAL } from 'sequelize'
import { INTEGER } from 'sequelize'
import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

const helpdesk_items = sequelize.define('helpdesk_items', {

    item_id: {type: INTEGER},
    item_title: {type: STRING},
    item_summary: {type: TEXT},
    item_calltype: {type: INTEGER},
    item_cause: {type: INTEGER},
    item_source: {type: INTEGER},
    item_os:{type: STRING},
    item_application: {type: STRING},
    item_priority: {type: INTEGER},
    item_severity: {type: FLOAT},
    item_status: {type: INTEGER},
    item_assigned_to: {type: INTEGER},
    item_created_by: {type: INTEGER},
    item_notify: {type: INTEGER},
    item_requestor: {type: STRING},
    item_requestor_id: {type: STRING},
    item_requestor_email: {type: INTEGER},
    item_requestor_phone: {type: STRING},
    item_requestor_type: {type: STRING},
    item_created: {type: STRING},
    item_modified: {type: STRING},
    item_parent: {type: INTEGER},
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
    item_angel_expiration: {type: STRING},
    item_angel_queue: {type: INTEGER},
    item_angel_cflow: {type: STRING},
    item_pending: {type: INTEGER},
    item_actiontime: {type: STRING},
    item_action: {type: INTEGER},
    item_accounting: {type: INTEGER},
    item_updated: {type: STRING},
    item_zabbix: {type: INTEGER},
    item_newdb: {type: INTEGER}
    
})

const helpdesk_items_additional = sequelize.define('helpdesk_items_additional', {
    add_item_id: {type: INTEGER},
    add_item_type: {type: INTEGER},
    add_item_value: {type: STRING}
})

const helpdesk_items_archive = sequelize.define('helpdesk_items_archive', {
    item_id: {type: INTEGER},
    item_title: {type: STRING},
    item_summary: {type: TEXT},
    item_calltype: {type: INTEGER},
    item_cause: {type: INTEGER},
    item_source: {type: INTEGER},
    item_os:{type: STRING},
    item_application: {type: STRING},
    item_priority: {type: INTEGER},
    item_severity: {type: FLOAT},
    item_status: {type: INTEGER},
    item_assigned_to: {type: INTEGER},
    item_created_by: {type: INTEGER},
    item_notify: {type: INTEGER},
    item_requestor: {type: STRING},
    item_requestor_id: {type: STRING},
    item_requestor_email: {type: INTEGER},
    item_requestor_phone: {type: STRING},
    item_requestor_type: {type: STRING},
    item_created: {type: STRING},
    item_modified: {type: STRING},
    item_parent: {type: INTEGER},
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
    item_angel_expiration: {type: STRING},
    item_angel_queue: {type: INTEGER},
    item_angel_cflow: {type: STRING},
    item_pending: {type: INTEGER},
    item_actiontime: {type: STRING},
    item_action: {type: INTEGER},
    item_accounting: {type: INTEGER},
    item_updated: {type: STRING},
    item_zabbix: {type: INTEGER},
    item_newdb: {type: INTEGER}

})

const helpdesk_items_attach = sequelize.define('helpdesk_items_attach', {
    attach_id: {type: INTEGER},
    attach_type: {type: INTEGER},
    attach_attached_id: {type: INTEGER},
    attach_role: {type: INTEGER},
    attach_date_created: {type: INTEGER},
    attach_date_updated: {type: STRING},
    attach_attached_by: {type: STRING},
    attach_note: {type: TEXT}
})

const helpdesk_items_backup = sequelize('helpdesk_items_backup', {

    item_id: {type: INTEGER},
    item_title: {type: STRING},
    item_summary: {type: TEXT},
    item_calltype: {type: INTEGER},
    item_cause: {type: INTEGER},
    item_source: {type: INTEGER},
    item_os:{type: STRING},
    item_application: {type: STRING},
    item_priority: {type: INTEGER},
    item_severity: {type: FLOAT},
    item_status: {type: INTEGER},
    item_assigned_to: {type: INTEGER},
    item_created_by: {type: INTEGER},
    item_notify: {type: INTEGER},
    item_requestor: {type: STRING},
    item_requestor_id: {type: STRING},
    item_requestor_email: {type: INTEGER},
    item_requestor_phone: {type: STRING},
    item_requestor_type: {type: STRING},
    item_created: {type: STRING},
    item_modified: {type: STRING},
    item_parent: {type: INTEGER},
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
    item_angel_expiration: {type: STRING},
    item_angel_queue: {type: INTEGER},
    item_angel_cflow: {type: STRING},
    item_pending: {type: INTEGER},
    item_actiontime: {type: STRING},
    item_action: {type: INTEGER},
    item_accounting: {type: INTEGER},
    item_updated: {type: STRING},
    item_zabbix: {type: INTEGER},
   

})

const helpdesk_item_status = sequelize.define('helpdesk_item_status', {
    status_id: {type: INTEGER},
    status_item_id: {type: INTEGER},
    status_code: {type: TINYINT},
    status_date: {type: STRING},
    status_modified_by: {type: INTEGER},
    status_comment: {type: TEXT}
})

const helpdesk_item_status_archive = sequelize.define('helpdesk_item_status_archive', {
    status_id: {type: INTEGER},
    status_item_id: {type: INTEGER},
    status_code: {type: TINYINT},
    status_date: {type: STRING},
    status_modified_by: {type: INTEGER},
    status_comment: {type: TEXT}
})

const helpdesk_item_status_backup = sequelize.define('helpdesk_item_status_backup', {
    status_id: {type: INTEGER},
    status_item_id: {type: INTEGER},
    status_code: {type: TINYINT},
    status_date: {type: STRING},
    status_modified_by: {type: INTEGER},
    status_comment: {type: TEXT}
})

const helpdesk_item_watchers = sequelize.define('helpdesk_item_watchers', {
    item_id: {type: INTEGER},
    user_id: {type: INTEGER},
    notify: {type: CHAR}
})