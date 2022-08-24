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

const helpdesk_itemstype = new GraphQLObjectType({
  name: "helpdesk_items",
  fields: () => ({

    item_id: { type: GraphQLInt, unique: true, autoIncrement: true, primaryKey: true },
    item_title: { type: GraphQLString },
    item_summary: { type: GraphQLString },
    item_calltype: { type: GraphQLInt, unique: true },
    item_cause: { type: GraphQLInt },
    item_source: { type: GraphQLInt, unique: true },
    item_os: { type: GraphQLString },
    item_application: { type: GraphQLString },
    item_priority: { type: GraphQLInt, unique: true },
    item_severity: { type: GraphQLInt },
    item_status: { type: GraphQLInt, unique: true },
    item_assigned_to: { type: GraphQLInt },
    item_created_by: { type: GraphQLInt },
    item_notify: { type: GraphQLInt },
    item_requestor: { type: GraphQLString },
    item_requestor_id: { type: GraphQLString },
    item_requestor_email: { type: GraphQLInt },
    item_requestor_phone: { type: GraphQLString },
    item_requestor_type: { type: GraphQLInt },
    item_created: { type: GraphQLString },
    item_modified: { type: GraphQLString },
    item_parent: { type: GraphQLInt, unique: true },
    item_project_id: { type: GraphQLInt },
    item_company_id: { type: GraphQLInt },
    item_requestor_room: { type: GraphQLString },
    item_angel_hotel: { type: GraphQLString },
    item_angel_city: { type: GraphQLString },
    item_log_status: { type: GraphQLString },
    item_staff: { type: GraphQLString },
    item_connection: { type: GraphQLString },
    item_angel_qagent: { type: GraphQLString },
    item_angel_qoutcome: { type: GraphQLString },
    item_angel_qtalk: { type: GraphQLInt },
    item_angel_qwait: { type: GraphQLInt },
    item_angel_state: { type: GraphQLString },
    item_angel_expiration: { type: GraphQLString },
    item_angel_queue: { type: GraphQLInt },
    item_angel_cflow: { type: GraphQLString },
    item_pending: { type: GraphQLInt },
    item_actiontime: { type: GraphQLString },
    item_action: { type: GraphQLInt },
    item_accounting: { type: GraphQLInt },
    item_updated: { type: GraphQLString },
    item_zabbix: { type: GraphQLInt },
    item_newdp: { type: GraphQLInt }

  })
})
module.exports = { helpdesk_itemstype }
