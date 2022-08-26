/**
 * model for companies table
 */
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

module.exports = { companies }