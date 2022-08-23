const {companies} = require("./company_models/companies")
const {companiesbackup} = require("./company_models/companiesbackup")
const {companiesbackup2} = require("./company_models/companiesbackup2")
const {company_additional} = require("./company_models/company_additional")
const {company_advn_backup} = require("./company_models/company_advn_backup")
const {company_advn} = require("./company_models/company_advn")
const {company_allview} = require("./company_models/company_allview")
const {company_assigned_field_tech} = require("./company_models/company_assigned_field_tech")
const {company_city} = require("./company_models/company_city")
const {company_field_techs} = require("./company_models/company_field_techs")
const {company_flag} = require("./company_models/company_flag")
const {company_franchisor} = require("./company_models/company_franchisor")
const {company_liscenses} = require("./company_models/company_liscences")
const {company_lock} = require("./company_models/company_lock")
const {company_phone} = require("./company_models/company_phone")
const {company_reseller} = require("./company_models/company_reseller")
const {company_states_am} = require("./company_models/company_states_am")
const {company_states} = require("./company_models/company_states")
const {company_tags} = require("./company_models/company_tags")
const{helpdesk_item_status} = require("./helpdesk_items_models/helpdesk_item_status")
const{helpdesk_item_status_archive} = require("./helpdesk_items_models/helpdesk_item_status_archive")
const{helpdesk_item_status_backup} = require("./helpdesk_items_models/helpdesk_item_status_backup")
const{helpdesk_item_watchers} = require("./helpdesk_items_models/helpdesk_item_watchers")
const{helpdesk_items_additional} = require("./helpdesk_items_models/helpdesk_items_additional")
const{helpdesk_items_attach} = require("./helpdesk_items_models/helpdesk_items_attach")
const{helpdesk_items_backup} = require("./helpdesk_items_models/helpdesk_items_backup")
const{helpdesk_items_archive} = require("./helpdesk_items_models/helpdesk_items_archive")
const{helpdesk_items} = require("./helpdesk_items_models/helpdesk_items")



module.exports = {companies, companiesbackup, companiesbackup2, company_additional, company_advn, company_advn_backup, company_allview, company_assigned_field_tech, company_city, company_field_techs, company_flag, company_franchisor, company_liscenses, company_lock, company_phone, company_reseller, company_states, company_states_am, company_tags}
module.exports = {helpdesk_item_status, helpdesk_item_status_archive, helpdesk_item_status_backup, helpdesk_item_watchers, helpdesk_items, helpdesk_items_additional, helpdesk_items_archive, helpdesk_items_attach, helpdesk_items_backup}

