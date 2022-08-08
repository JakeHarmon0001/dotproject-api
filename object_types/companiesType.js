const  db  = require("../mysql/db.js"); //database variable

const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQL,
  GraphQLList,
} = graphql;
//const {graphqlHTTP} = require('express-graphql')
const { STRING } = require("sequelize");

const { TINYINT } = require("sequelize");
const { TEXT } = require("sequelize");
const { DATE } = require("sequelize");
const { BIGINT } = require("sequelize");
const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Sequelize, Model, DataTypes } = require("sequelize");
const { TIME } = require("sequelize");

// const sequelize = new Sequelize('sqlite::memory:');
//companies.findAll({where:args})

const User = db.sequelize.define("User", {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

const CompanyType = new GraphQLObjectType({ //company object type
  name: "Company",
  fields: () => ({
      compId: {type: GraphQLString},
      name: {type: GraphQLString},
      email: {type: GraphQLString},
      owner: {type: GraphQLString},
      phoneNumber: {type: GraphQLString},
      location: {type: GraphQLString}
  })
})

const companiestype = new GraphQLObjectType({
  name: "companies",
  fields: () => ({
    //company object type
    company_id: { type: INTEGER, primaryKey: true },
    company_module: { type: INTEGER },
    name: { type: STRING },
    phone: { type: STRING },
    phone2: { type: STRING },
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
    company_wiried_type: { type: STRING },
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
  })
})

//companies.findAll({where:args})
const companiesbackuptype = new GraphQLObjectType({
  name: "companiesbackup",
  fields: () => ({
    //company object type

    company_id: { type: INTEGER, primaryKey: true },
    company_module: { type: INTEGER },
    name: { type: STRING },
    phone: { type: STRING },
    phone2: { type: STRING },
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
    company_wiried_type: { type: STRING },
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
  })
})
const companiesbackup2 = db.sequelize.define(
  "companies-backup",
  {
    //company object type

    company_id: { type: INTEGER, primaryKey: true },
    company_module: { type: INTEGER },
    name: { type: STRING },
    phone: { type: STRING },
    phone2: { type: STRING },
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
    company_wiried_type: { type: STRING },
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
  { tableName: "companies-backup2" }
);

const company_additionaltype =  new GraphQLObjectType({
  name: "company_additional",
  fields: () => ({
    add_company_id: { type: INTEGER, primaryKey: true },
    add_item_type: { type: INTEGER, primaryKey: true },
    add_item_value: { type: STRING },
  })
})
const company_advntype = new GraphQLObjectType({
  name: "company_advn",
  fields: () => ({
    advn_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: INTEGER },
    advn_guid: { type: STRING },
  })
})

const company_advn_backuptype = new GraphQLObjectType({
  name: "company_advn_backup",
  fields: () => ({
    advn_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: INTEGER },
    advn_guid: { type: STRING },
  })
})
const company_allviewtype = new GraphQLObjectType({
  name: "company_allview",
  fields: () => ({
    allview_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    allview_company_id: { type: INTEGER },
    allview_uid: { type: STRING },
  })
})

const company_assigned_field_techtype = new GraphQLObjectType({
  name: "company_assigned_field_tech",
  fields: () => ({
    ft_id: { type: INTEGER },
    company_id: { type: INTEGER, primaryKey: true },
    primary_tech: { type: TINYINT, primaryKey: true },
  })
})

const company_citytype = new GraphQLObjectType({
  name: "company_city",
  fields: () => ({
    company_city_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    company_city_ccc: { type: STRING },
    company_city_name: { type: STRING },
    company_city_sound: { type: STRING },
  })
})

const company_field_techstype = new GraphQLObjectType({
  name: "company_city_techs",
  fields: () => ({
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
  })
})

const company_flagtype = new GraphQLObjectType({
  name: "company_flag",
  fields: () => ({
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
  })
})

const company_franchisortype = new GraphQLObjectType({
  name: "company_franchisor",
  fields: () => ({
    company_franchisor_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company_franchisor_name: { type: STRING },
  })
})

const company_liscensestype = new GraphQLObjectType({
  name: "company_liscenses",
  fields: () => ({
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
  })
})
const company_locktype = new GraphQLObjectType({
  name: "company_lock",
  fields: () => ({
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  company_id: { type: INTEGER },
  lockedFlag: { type: TINYINT },
  lockedUser: { type: INTEGER },
  lockedMessage: { type: STRING },
  createdAt: { type: TIME },
  modifiedAt: { type: TIME },
})
})
const company_phonetype = new GraphQLObjectType({
  name: "company_phone",
  fields: () => ({
    cphone_id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    cphone_number: { type: INTEGER },
    cphone_company: { type: INTEGER },
    cphone_type: { type: INTEGER },
  })
})

const company_resellertype = new GraphQLObjectType({
  name: "company_reseller",
  fields: () => ({
    reseller_id: { type: INTEGER, primaryKey: true },
    reseller_name: { type: STRING },
    reseller_phone: { type: STRING },
    reseller_email: { type: STRING },
  })
})

const company_statestype = new GraphQLObjectType({
  name: "company_states",
  fields: () => ({
    company_state_id: { type: STRING },
    company_state_name: { type: STRING },
    company_state_sound: { type: STRING },
  })
})
const company_states_amtype = new GraphQLObjectType({
  name: "company_states_am",
  fields: () => ({
    company_state_id: { type: STRING },
    company_state_am: { type: INTEGER },
  })
})
const company_tagstype = new GraphQLObjectType({
  name: "company_tags",
  fields: () => ({
    company_id: { type: INTEGER, primaryKey: true },
    contact_id: { type: INTEGER, primaryKey: true },
  })
})

//const companiess = await companies.findAll( )
//console.log(companies.findAll())
module.exports = { companiestype };
