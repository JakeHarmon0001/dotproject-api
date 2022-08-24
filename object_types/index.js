/**
 * Importing/exporting graphql object types 
 */
const {companiestype} = require("../object_types/company_types/companiestype")
const {companiesbackuptype} = require("./company_types/companiesbackuptype")
const {companiesbackup2type} = require("./company_types/companiesbackup2type")
const {company_additionaltype} = require("./company_types/company_additionaltype")
const {company_advn_backuptype} = require("./company_types/company_advn_backuptype")
const {company_advntype} = require("./company_types/company_advntype")
const {company_allviewtype} = require("./company_types/company_allviewtype")
const {company_assigned_field_techtype} = require("./company_types/company_assigned_field_techtype")
const {company_citytype} = require("./company_types/company_citytype")
const {company_field_techstype} = require("../object_types/company_types/company_field_techstype")
const {company_flagtype} = require("../object_types/company_types/company_flagtype")
const {company_franchisortype} = require("../object_types/company_types/company_franchisortype")
const {company_liscensestype} = require("../object_types/company_types/company_liscensestype")
const {company_locktype} = require("../object_types/company_types/company_locktype")
const {company_phonetype} = require("../object_types/company_types/company_phonetype")
const {company_resellertype} = require("../object_types/company_types/company_resellertype")
const {company_states_amtype} = require("../object_types/company_types/company_states_amtype")
const {company_statestype} = require("../object_types/company_types/company_statestype")
const {company_tagstype} = require("../object_types/company_types/company_tagstype")
const{helpdesk_item_statustype} = require("./helpdesk_items_types/helpdesk_item_statustype")
const{helpdesk_item_status_archivetype} = require("./helpdesk_items_types/helpdesk_item_status_archivetype")
const{helpdesk_item_status_backuptype} = require("./helpdesk_items_types/helpdesk_item_status_backuptype")
const{helpdesk_item_watcherstype} = require("./helpdesk_items_types/helpdesk_item_watcherstype")
const{helpdesk_items_additionaltype} = require("./helpdesk_items_types/helpdesk_items_additionaltype")
const{helpdesk_items_attachtype} = require("./helpdesk_items_types/helpdesk_items_attachtype")
const{helpdesk_items_backuptype} = require("./helpdesk_items_types/helpdesk_items_backuptype")
const{helpdesk_items_archivetype} = require("./helpdesk_items_types/helpdesk_items_archivetype")
const{helpdesk_itemstype} = require("./helpdesk_items_types/helpdesk_itemstype")


module.exports = {companiestype, companiesbackuptype, companiesbackup2type, company_additionaltype, company_advntype, company_advn_backuptype, company_allviewtype, company_assigned_field_techtype, company_citytype, company_field_techstype, company_flagtype, company_franchisortype, company_liscensestype, company_locktype, company_phonetype, company_resellertype, company_statestype, company_states_amtype, company_tagstype}
module.exports = {helpdesk_item_statustype, helpdesk_item_status_archivetype, helpdesk_item_status_backuptype, helpdesk_item_watcherstype, helpdesk_itemstype, helpdesk_items_additionaltype, helpdesk_items_archivetype, helpdesk_items_attachtype, helpdesk_items_backuptype}

