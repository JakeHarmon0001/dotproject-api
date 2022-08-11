/**
 * models of companies/related tables in mysql db
 */
const db = require("../mysql/db.js"); //database variable
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQL,
  GraphQLList,
} = graphql;

const { STRING } = require("sequelize");
const { TINYINT } = require("sequelize");
const { TEXT } = require("sequelize");
const { DATE } = require("sequelize");
const { BIGINT } = require("sequelize");
const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Sequelize, Model, DataTypes } = require("sequelize");
const { TIME } = require("sequelize");

const companies = db.sequelize.define(
  "companies",
  {
    company_id: { type: INTEGER, primaryKey: true, description: "ID representing existing company" },
    company_module: { type: INTEGER },
    company_name: { type: STRING },
    company_phone1: { type: STRING },
    company_phone2: { type: STRING },
    company_fax: { type: STRING },
    company_address1: { type: STRING },
    company_address2: { type: STRING },
    company_city: { type: STRING },
    company_citynew: { type: STRING },
    company_state: { type: STRING },
    company_statenew: { type: STRING },
    company_zip: { type: STRING },
    company_flag: { type: STRING },
    company_primary_url: { type: STRING },
    company_owner: { type: INTEGER },
    company_accountmanager: { type: INTEGER },
    company_description: { type: TEXT },
    company_type: { type: INTEGER },
    company_email: { type: STRING },
    company_custom: { type: TEXT },
    company_modified: { type: INTEGER },
    rooms_total: { type: INTEGER },
    rooms_wired: { type: INTEGER },
    rooms_wired_des: { type: STRING },
    rooms_wifi: { type: STRING },
    rooms_wifi_des: { type: INTEGER },
    rooms_public: { type: STRING },
    facility_const: { type: STRING },
    facility_buildings: { type: STRING },
    company_skyid: { type: STRING },
    company_propname: { type: STRING },
    company_location: { type: STRING },
    company_airport: { type: STRING },
    company_wifi: { type: STRING },
    company_wifi_type: { type: STRING },
    company_wifi_fee: { type: STRING },
    company_wifi_ssid: { type: STRING },
    company_wifi_login: { type: STRING },
    company_wired: { type: STRING },
    company_wired_type: { type: STRING },
    company_wired_login: { type: STRING },
    company_circuit_type: { type: STRING },
    company_circuit_provider: { type: STRING },
    company_circuit_speed: { type: STRING },
    company_parent: { type: INTEGER },
    company_secondary: { type: INTEGER },
    company_splash: { type: INTEGER },
    company_fac_bcount: { type: INTEGER },
    company_fac_floors: { type: INTEGER },
    company_fac_chase: { type: INTEGER },
    company_fac_drop: { type: INTEGER },
    company_fac_roomaccess: { type: INTEGER },
    company_fac_hallways: { type: INTEGER },
    company_fac_material: { type: INTEGER },
    company_support_level: { type: INTEGER },
    company_circuit: { type: INTEGER },
    company_circuit_newspeed: { type: INTEGER },
    company_circuit_newtype: { type: INTEGER },
    company_hotspot_config: { type: INTEGER },
    company_rad_type: { type: INTEGER },
    company_rad_access: { type: INTEGER },
    company_rad_ads: { type: INTEGER },
    company_rad_airlock: { type: INTEGER },
    company_rad_register: { type: INTEGER },
    company_rad_proxy: { type: TINYINT },
    company_rad_proxy_timeout: { type: INTEGER },
    company_rad_proxy_sleep: { type: INTEGER },
    company_rad_email: { type: STRING },
    company_rad_username: { type: STRING },
    company_rad_password: { type: STRING },
    company_limit_time: { type: BIGINT },
    company_limit_inout: { type: BIGINT },
    company_limit_in: { type: BIGINT },
    company_limit_out: { type: BIGINT },
    company_rate_in: { type: INTEGER },
    company_rate_out: { type: INTEGER },
    company_network_map: { type: STRING },
    company_cameras: { type: INTEGER },
    company_live: { type: INTEGER },
    company_base_rate: { type: STRING },
    company_base_time: { type: STRING },
    company_excess_rate: { type: STRING },
    company_fac_built: { type: INTEGER },
    company_timezone: { type: INTEGER },
    company_folio: { type: INTEGER },
    company_credit: { type: INTEGER },
    company_code: { type: STRING },
    company_start: { type: DATE },
    company_install: { type: DATE },
    company_end: { type: DATE },
    company_actual: { type: DATE },
    company_level: { type: INTEGER },
    company_ppr: { type: STRING },
    company_custyp: { type: STRING },
    company_reseller: { type: INTEGER },
  },
  { tableName: "companies", timestamps: false }
)


const companiesbackup = db.sequelize.define(
  "companies-backup",
  {
    company_id: { type: INTEGER, primaryKey: true },
    company_module: { type: INTEGER },
    company_name: { type: STRING },
    company_phone1: { type: STRING },
    company_phone2: { type: STRING },
    company_fax: { type: STRING },
    company_address1: { type: STRING },
    company_address2: { type: STRING },
    company_city: { type: STRING },
    company_citynew: { type: STRING },
    company_state: { type: STRING },
    company_statenew: { type: STRING },
    company_zip: { type: STRING },
    company_flag: { type: STRING },
    company_primary_url: { type: STRING },
    company_owner: { type: INTEGER },
    company_accountmanager: { type: INTEGER },
    company_description: { type: TEXT },
    company_type: { type: INTEGER },
    company_email: { type: STRING },
    company_custom: { type: TEXT },
    company_modified: { type: INTEGER },
    rooms_total: { type: INTEGER },
    rooms_wired: { type: INTEGER },
    rooms_wired_des: { type: STRING },
    rooms_wifi: { type: STRING },
    rooms_wifi_des: { type: INTEGER },
    rooms_public: { type: STRING },
    facility_const: { type: STRING },
    facility_buildings: { type: STRING },
    company_skyid: { type: STRING },
    company_propname: { type: STRING },
    company_location: { type: STRING },
    company_airport: { type: STRING },
    company_wifi: { type: STRING },
    company_wifi_type: { type: STRING },
    company_wifi_fee: { type: STRING },
    company_wifi_ssid: { type: STRING },
    company_wifi_login: { type: STRING },
    company_wired: { type: STRING },
    company_wired_type: { type: STRING },
    company_wired_login: { type: STRING },
    company_circuit_type: { type: STRING },
    company_circuit_provider: { type: STRING },
    company_circuit_speed: { type: STRING },
    compnay_parent: { type: INTEGER },
    company_secondary: { type: INTEGER },
    company_splash: { type: INTEGER },
    company_fac_bcount: { type: INTEGER },
    company_fac_floors: { type: INTEGER },
    company_fac_chase: { type: INTEGER },
    company_fac_drop: { type: INTEGER },
    company_fac_roomaccess: { type: INTEGER },
    company_fac_hallways: { type: INTEGER },
    comany_fac_material: { type: INTEGER },
    company_support_level: { type: INTEGER },
    company_circuit: { type: INTEGER },
    company_circuit_newspeed: { type: INTEGER },
    company_circuit_newtype: { type: INTEGER },
    company_hotspot_config: { type: INTEGER },
    company_rad_type: { type: INTEGER },
    company_rad_acess: { type: INTEGER },
    company_rad_ads: { type: INTEGER },
    company_rad_airlock: { type: INTEGER },
    company_rad_register: { type: INTEGER },
    company_rad_proxy: { type: TINYINT },
    company_rad_proxy_timeout: { type: INTEGER },
    company_rad_proxy_sleep: { type: INTEGER },
    company_rad_email: { type: STRING },
    company_rad_username: { type: STRING },
    company_rad_password: { type: STRING },
    company_limit_time: { type: BIGINT },
    company_limit_inout: { type: BIGINT },
    company_limit_in: { type: BIGINT },
    company_limit_out: { type: BIGINT },
    company_rate_in: { type: INTEGER },
    company_rate_out: { type: INTEGER },
    company_network_map: { type: STRING },
    company_cameras: { type: INTEGER },
    company_live: { type: INTEGER },
    company_base_rate: { type: STRING },
    company_base_time: { type: STRING },
    company_excess_rate: { type: STRING },
    company_fac_built: { type: INTEGER },
    company_timezone: { type: INTEGER },
    company_folio: { type: INTEGER },
    company_credit: { type: INTEGER },
    company_code: { type: STRING },
    company_start: { type: DATE },
    company_install: { type: DATE },
    company_end: { type: DATE },
    company_actual: { type: DATE },
    company_level: { type: INTEGER },
    company_ppr: { type: STRING },
    company_custyp: { type: STRING },
    company_reseller: { type: INTEGER },
  },
  { tableName: "companies-backup", timestamps: false }
)

const companiesbackup2 = db.sequelize.define(
  "companies-backup2",
  {
    

    company_id: { type: INTEGER, primaryKey: true },
    company_module: { type: INTEGER },
    company_name: { type: STRING },
    company_phone1: { type: STRING },
    company_phone2: { type: STRING },
    company_fax: { type: STRING },
    company_address1: { type: STRING },
    company_address2: { type: STRING },
    company_city: { type: STRING },
    company_citynew: { type: STRING },
    company_state: { type: STRING },
    company_statenew: { type: STRING },
    company_zip: { type: STRING },
    company_flag: { type: STRING },
    company_primary_url: { type: STRING },
    company_owner: { type: INTEGER },
    company_accountmanager: { type: INTEGER },
    company_description: { type: TEXT },
    company_type: { type: INTEGER },
    company_email: { type: STRING },
    company_custom: { type: TEXT },
    company_modified: { type: INTEGER },
    rooms_total: { type: INTEGER },
    rooms_wired: { type: INTEGER },
    rooms_wired_des: { type: STRING },
    rooms_wifi: { type: STRING },
    rooms_wifi_des: { type: INTEGER },
    rooms_public: { type: STRING },
    facility_const: { type: STRING },
    facility_buildings: { type: STRING },
    company_skyid: { type: STRING },
    company_propname: { type: STRING },
    company_location: { type: STRING },
    company_airport: { type: STRING },
    company_wifi: { type: STRING },
    company_wifi_type: { type: STRING },
    company_wifi_fee: { type: STRING },
    company_wifi_ssid: { type: STRING },
    company_wifi_login: { type: STRING },
    company_wired: { type: STRING },
    company_wired_type: { type: STRING },
    company_wired_login: { type: STRING },
    company_circuit_type: { type: STRING },
    company_circuit_provider: { type: STRING },
    company_circuit_speed: { type: STRING },
    compnay_parent: { type: INTEGER },
    company_secondary: { type: INTEGER },
    company_splash: { type: INTEGER },
    company_fac_bcount: { type: INTEGER },
    company_fac_floors: { type: INTEGER },
    company_fac_chase: { type: INTEGER },
    company_fac_drop: { type: INTEGER },
    company_fac_roomaccess: { type: INTEGER },
    company_fac_hallways: { type: INTEGER },
    comany_fac_material: { type: INTEGER },
    company_support_level: { type: INTEGER },
    company_circuit: { type: INTEGER },
    company_circuit_newspeed: { type: INTEGER },
    company_circuit_newtype: { type: INTEGER },
    company_hotspot_config: { type: INTEGER },
    company_rad_type: { type: INTEGER },
    company_rad_acess: { type: INTEGER },
    company_rad_ads: { type: INTEGER },
    company_rad_airlock: { type: INTEGER },
    company_rad_register: { type: INTEGER },
    company_rad_proxy: { type: TINYINT },
    company_rad_proxy_timeout: { type: INTEGER },
    company_rad_proxy_sleep: { type: INTEGER },
    company_rad_email: { type: STRING },
    company_rad_username: { type: STRING },
    company_rad_password: { type: STRING },
    company_limit_time: { type: BIGINT },
    company_limit_inout: { type: BIGINT },
    company_limit_in: { type: BIGINT },
    company_limit_out: { type: BIGINT },
    company_rate_in: { type: INTEGER },
    company_rate_out: { type: INTEGER },
    company_network_map: { type: STRING },
    company_cameras: { type: INTEGER },
    company_live: { type: INTEGER },
    company_base_rate: { type: STRING },
    company_base_time: { type: STRING },
    company_excess_rate: { type: STRING },
    company_fac_built: { type: INTEGER },
    company_timezone: { type: INTEGER },
    company_folio: { type: INTEGER },
    company_credit: { type: INTEGER },
    company_code: { type: STRING },
    company_start: { type: DATE },
    company_install: { type: DATE },
    company_end: { type: DATE },
    company_actual: { type: DATE },
    company_level: { type: INTEGER },
    company_ppr: { type: STRING },
    company_custyp: { type: STRING },
    company_reseller: { type: INTEGER },
  },
  { tableName: "companies-backup2", timestamps: false }
)

const company_additional = db.sequelize.define(
  "company_additional",
  {
    add_company_id: { type: INTEGER, primaryKey: true },
    add_item_type: { type: INTEGER, primaryKey: true },
    add_item_value: { type: STRING },
  },
  { tableName: "company_additional", timestamps: false }
)

const company_advn = db.sequelize.define(
  "company_advn",
  {
    advn_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: INTEGER },
    advn_guid: { type: STRING },
  },
  { tableName: "company_advn", timestamps: false }
)

const company_advn_backup = db.sequelize.define(
  "company_advn_backup",
  {
    advn_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: INTEGER },
    advn_guid: { type: STRING },
  },
  { tableName: "company_advn_backup", timestamps: false }
)

const company_allview = db.sequelize.define(
  "company_allview",
  {
    allview_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    allview_company_id: { type: INTEGER },
    allview_uid: { type: STRING },
  },
  { tableName: "company_allview", timestamps: false }
)

const company_assigned_field_tech = db.sequelize.define(
  "company_assigned_field_tech",
  {
    ft_id: { type: INTEGER },
    company_id: { type: INTEGER, primaryKey: true },
    primary_tech: { type: TINYINT, primaryKey: true },
  },
  { tableName: "company_assigned_field_tech", timestamps: false }
)

const company_city = db.sequelize.define(
  "company_city",
  {
    company_city_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    company_city_ccc: { type: STRING },
    company_city_name: { type: STRING },
    company_city_sound: { type: STRING },
  },
  { tableName: "company_city", timestamps: false }
)

const company_field_techs = db.sequelize.define(
  "company_field_techs",
  {
    ft_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    ft_company_name: { type: STRING },
    ft_company_number: { type: STRING },
    ft_name: { type: STRING },
    ft_contact_number: { type: STRING },
    ft_secondary_number: { type: STRING },
    ft_available_days: { type: TINYINT },
    ft_available_hours_weekday: { type: STRING },
    ft_available_hours_weekend: { type: STRING },
    ft_hourly_rate_weekday: { type: DECIMAL },
    ft_hourly_rate_weekend: { type: DECIMAL },
    ft_notes: { type: STRING },
  },
  { tableName: "company_field_techs", timestamps: false }
)

const company_flag = db.sequelize.define(
  "company_flag",
  {
    company_flag_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    company_flag_nnn: { type: STRING },
    company_flag_name: { type: STRING },
    company_flag_franchisor: { type: INTEGER },
    company_flag_sound: { type: STRING },
    company_flag_color: { type: STRING },
    company_flag_body: { type: STRING },
    company_flag_body: { type: STRING },
    company_flag_ad: { type: STRING },
    company_flag_css: { type: STRING },
    company_flag_terms: { type: STRING },
  },
  { tableName: "company_flag", timestamps: false }
)

const company_franchisor = db.sequelize.define(
  "company_franchisor",
  {
    company_franchisor_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company_franchisor_name: { type: STRING },
  },
  { tableName: "company_franchisor", timestamps: false }
)

const company_liscenses = db.sequelize.define(
  "company_liscenses",
  {
    licenses_id: {
      type: INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: { type: INTEGER },
    item_id: { type: INTEGER },
    purchase_date: { type: DATE },
    start_date: { type: DATE },
    licenses_months: { type: INTEGER, unique: true },
  },
  { tableName: "company_liscenses", timestamps: false }
)

const company_lock = db.sequelize.define("company_lock", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  company_id: { type: INTEGER },
  lockedFlag: { type: TINYINT },
  lockedUser: { type: INTEGER },
  lockedMessage: { type: STRING },
  createdAt: { type: TIME },
  modifiedAt: { type: TIME },
})

const company_phone = db.sequelize.define(
  "company_phone",
  {
    cphone_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    cphone_number: { type: INTEGER },
    cphone_company: { type: INTEGER },
    cphone_type: { type: INTEGER },
  },
  { tableName: "company_phone", timestamps: false }
)

const company_reseller = db.sequelize.define(
  "company_reseller",
  {
    reseller_id: { type: INTEGER, primaryKey: true },
    reseller_name: { type: STRING },
    reseller_phone: { type: STRING },
    reseller_email: { type: STRING },
  },
  { tableName: "company_reseller", timestamps: false }
)

const company_states = db.sequelize.define(
  "company_states",
  {
    company_state_id: { type: STRING, primaryKey: true },
    company_state_name: { type: STRING },
    company_state_sound: { type: STRING },
  },
  { tableName: "company_states", timestamps: false }
)

const company_states_am = db.sequelize.define(
  "company_states_am",
  {
    company_state_id: { type: STRING },
    company_state_am: { type: INTEGER },
  },
  { tableName: "company_states_am", timestamps: false }
)

const company_tags = db.sequelize.define(
  "company_tags",
  {
    company_id: { type: INTEGER, primaryKey: true },
    contact_id: { type: INTEGER, primaryKey: true },
  },
  { tableName: "company_tags", timestamps: false }
)

module.exports = {
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
  company_liscenses,
  company_lock,
  company_phone,
  company_reseller,
  company_states,
  company_states_am,
  company_tags,
}
