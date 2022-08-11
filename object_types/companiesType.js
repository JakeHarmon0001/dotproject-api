/**
 * graphql object types of companies/related tables in mysql db
 */

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

const { STRING } = require("sequelize");

const { TINYINT } = require("sequelize");
const { TEXT} = require("sequelize");
const { DATE } = require("sequelize");
const { BIGINT} = require("sequelize");
const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Sequelize, Model, DataTypes } = require("sequelize");
const { TIME } = require("sequelize");


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
  description: "Represents a company that is a customer of Ovation Networks",
  fields: () => ({
    //company object type
    company_id: {type: GraphQLString, description: "ID representing existing company" },
    company_module: { type: GraphQLInt },
    company_name: { type: GraphQLString, description: "Name of company" },
    company_phone: { type: GraphQLString, description: "Company phonenumber" },
    company_phone2: { type: GraphQLString, description: "Backup phonenumber" },
    company_fax: { type: GraphQLString, description: "Company fax address" },
    company_address1: { type: GraphQLString, description: "Company address" },
    company_address2: { type: GraphQLString, description: "Secondary company address" },
    company_city: { type: GraphQLString, description: "City company is located in" },
    company_citynew: { type: GraphQLString },
    company_state: { type: GraphQLString, description: "State company is located in" },
    company_statenew: { type: GraphQLString },
    company_zip: { type: GraphQLString, description: "Zip code of company" },
    company_flag: { type: GraphQLString, description: "Flag of company" },
    company_primary_url: { type: GraphQLString, description: "Primary URL of company" },
    company_owner: { type: GraphQLInt, description: "Owner of company" },
    company_accountmanager: { type: GraphQLInt, description: "Account Manager of company" },
    company_description: { type: GraphQLString, description: "Description of company" },
    company_type: { type: GraphQLInt, description: "Type of company" },
    company_email: { type: GraphQLString, description: "Email of company" },
    company_custom: { type: GraphQLString },
    company_modified: { type: GraphQLInt },
    rooms_total: { type: GraphQLInt },
    rooms_wired: { type: GraphQLInt },
    rooms_wired_des: { type: GraphQLString },
    rooms_wifi: { type: GraphQLString },
    rooms_wifi_des: { type: GraphQLInt },
    rooms_public: { type: GraphQLString },
    facility_const: { type: GraphQLString },
    facility_buildings: { type: GraphQLString },
    company_skyid: { type: GraphQLString },
    company_propname: { type: GraphQLString },
    company_location: { type: GraphQLString },
    company_airport: { type: GraphQLString },
    company_wifi: { type: GraphQLString },
    company_wifi_type: { type: GraphQLString },
    company_wifi_fee: { type: GraphQLString },
    company_wifi_ssid: { type: GraphQLString },
    company_wifi_login: { type: GraphQLString },
    company_wired: { type: GraphQLString },
    company_wiried_type: { type: GraphQLString },
    company_wired_login: { type: GraphQLString },
    company_circuit_type: { type: GraphQLString },
    company_circuit_provider: { type: GraphQLString },
    company_circuit_speed: { type: GraphQLString },
    company_parent: { type: GraphQLInt },
    company_secondary: { type: GraphQLInt },
    company_splash: { type: GraphQLInt },
    company_fac_bcount: { type: GraphQLInt },
    company_fac_floors: { type: GraphQLInt },
    company_fac_chase: { type: GraphQLInt },
    company_fac_drop: { type: GraphQLInt },
    company_fac_roomaccess: { type: GraphQLInt },
    company_fac_hallways: { type: GraphQLInt },
    company_fac_material: { type: GraphQLInt },
    company_support_level: { type: GraphQLInt },
    company_circuit: { type: GraphQLInt },
    company_circuit_newspeed: { type: GraphQLInt },
    company_circuit_newtype: { type: GraphQLInt },
    company_hotspot_config: { type: GraphQLInt },
    company_rad_type: { type: GraphQLInt },
    company_rad_acess: { type: GraphQLInt },
    company_rad_ads: { type: GraphQLInt },
    company_rad_airlock: { type: GraphQLInt },
    company_rad_register: { type: GraphQLInt },
    company_rad_proxy: { type: GraphQLInt },
    company_rad_proxy_timeout: { type: GraphQLInt },
    company_rad_proxy_sleep: { type: GraphQLInt },
    company_rad_email: { type: GraphQLString },
    company_rad_username: { type: GraphQLString },
    company_rad_password: { type: GraphQLString },
    company_limit_time: { type: GraphQLInt },
    company_limit_inout: { type: GraphQLInt },
    company_limit_in: { type: GraphQLInt },
    company_limit_out: { type: GraphQLInt },
    company_rate_in: { type: GraphQLInt },
    company_rate_out: { type: GraphQLInt },
    company_network_map: { type: GraphQLString },
    company_cameras: { type: GraphQLInt },
    company_live: { type: GraphQLInt },
    company_base_rate: { type: GraphQLString },
    company_base_time: { type: GraphQLString },
    company_excess_rate: { type: GraphQLString },
    company_fac_built: { type: GraphQLInt },
    company_timezone: { type: GraphQLInt },
    company_folio: { type: GraphQLInt },
    company_credit: { type: GraphQLInt },
    company_code: { type: GraphQLString },
    company_start: { type: GraphQLString },
    company_install: { type: GraphQLString },
    company_end: { type: GraphQLString },
    company_actual: { type: GraphQLString },
    company_level: { type: GraphQLInt },
    company_ppr: { type: GraphQLString },
    company_custyp: { type: GraphQLString },
    company_reseller: { type: GraphQLInt },
  })
})

//companies.findAll({where:args})
const companiesbackuptype = new GraphQLObjectType({
  name: "companiesbackup",
  fields: () => ({
    //company object type

    company_id: { type: GraphQLInt, primaryKey: true },
    company_module: { type: GraphQLInt },
    company_name: { type: GraphQLString },
    company_phone: { type: GraphQLString },
    company_phone2: { type: GraphQLString },
    company_fax: { type: GraphQLString },
    company_address1: { type: GraphQLString },
    company_address2: { type: GraphQLString },
    company_city: { type: GraphQLString },
    company_citynew: { type: GraphQLString },
    company_state: { type: GraphQLString },
    company_statenew: { type: GraphQLString },
    company_zip: { type: GraphQLString },
    company_flag: { type: GraphQLString },
    company_primary_url: { type: GraphQLString },
    company_owner: { type: GraphQLInt },
    company_accountmanager: { type: GraphQLInt },
    company_description: { type: GraphQLString },
    company_type: { type: GraphQLInt },
    company_email: { type: GraphQLString },
    company_custom: { type: GraphQLString },
    company_modified: { type: GraphQLInt },
    rooms_total: { type: GraphQLInt },
    rooms_wired: { type: GraphQLInt },
    rooms_wired_des: { type: GraphQLString },
    rooms_wifi: { type: GraphQLString },
    rooms_wifi_des: { type: GraphQLInt },
    rooms_public: { type: GraphQLString },
    facility_const: { type: GraphQLString },
    facility_buildings: { type: GraphQLString },
    company_skyid: { type: GraphQLString },
    company_propname: { type: GraphQLString },
    company_location: { type: GraphQLString },
    company_airport: { type: GraphQLString },
    company_wifi: { type: GraphQLString },
    company_wifi_type: { type: GraphQLString },
    company_wifi_fee: { type: GraphQLString },
    company_wifi_ssid: { type: GraphQLString },
    company_wifi_login: { type: GraphQLString },
    company_wired: { type: GraphQLString },
    company_wiried_type: { type: GraphQLString },
    company_wired_login: { type: GraphQLString },
    company_circuit_type: { type: GraphQLString },
    company_circuit_provider: { type: GraphQLString },
    company_circuit_speed: { type: GraphQLString },
    compnay_parent: { type: GraphQLInt },
    company_secondary: { type: GraphQLInt },
    company_splash: { type: GraphQLInt },
    company_fac_bcount: { type: GraphQLInt },
    company_fac_floors: { type: GraphQLInt },
    company_fac_chase: { type: GraphQLInt },
    company_fac_drop: { type: GraphQLInt },
    company_fac_roomaccess: { type: GraphQLInt },
    company_fac_hallways: { type: GraphQLInt },
    company_fac_material: { type: GraphQLInt },
    company_support_level: { type: GraphQLInt },
    company_circuit: { type: GraphQLInt },
    company_circuit_newspeed: { type: GraphQLInt },
    company_circuit_newtype: { type: GraphQLInt },
    company_hotspot_config: { type: GraphQLInt },
    company_rad_type: { type: GraphQLInt },
    company_rad_acess: { type: GraphQLInt },
    company_rad_ads: { type: GraphQLInt },
    company_rad_airlock: { type: GraphQLInt },
    company_rad_register: { type: GraphQLInt },
    company_rad_proxy: { type: GraphQLInt },
    company_rad_proxy_timeout: { type: GraphQLInt },
    company_rad_proxy_sleep: { type: GraphQLInt },
    company_rad_email: { type: GraphQLString },
    company_rad_username: { type: GraphQLString },
    company_rad_password: { type: GraphQLString },
    company_limit_time: { type: GraphQLInt },
    company_limit_inout: { type: GraphQLInt },
    company_limit_in: { type: GraphQLInt },
    company_limit_out: { type: GraphQLInt },
    company_rate_in: { type: GraphQLInt },
    company_rate_out: { type: GraphQLInt },
    company_network_map: { type: GraphQLString },
    company_cameras: { type: GraphQLInt },
    company_live: { type: GraphQLInt },
    company_base_rate: { type: GraphQLString },
    company_base_time: { type: GraphQLString },
    company_excess_rate: { type: GraphQLString },
    company_fac_built: { type: GraphQLInt },
    company_timezone: { type: GraphQLInt },
    company_folio: { type: GraphQLInt },
    company_credit: { type: GraphQLInt },
    company_code: { type: GraphQLString },
    company_start: { type: GraphQLString },
    company_install: { type: GraphQLString },
    company_end: { type: GraphQLString },
    company_actual: { type: GraphQLString },
    company_level: { type: GraphQLInt },
    company_ppr: { type: GraphQLString },
    company_custyp: { type: GraphQLString },
    company_reseller: { type: GraphQLInt },
  })
})
const companiesbackup2 = db.sequelize.define(
  "companies-backup",
  {
    //company object type

    company_id: { type: GraphQLInt, primaryKey: true },
    company_module: { type: GraphQLInt },
    name: { type: GraphQLString },
    phone: { type: GraphQLString },
    phone2: { type: GraphQLString },
    company_fax: { type: GraphQLString },
    company_address1: { type: GraphQLString },
    company_address2: { type: GraphQLString },
    company_city: { type: GraphQLString },
    company_citynew: { type: GraphQLString },
    company_state: { type: GraphQLString },
    company_statenew: { type: GraphQLString },
    company_zip: { type: GraphQLString },
    company_flag: { type: GraphQLString },
    company_primary_url: { type: GraphQLString },
    company_owner: { type: GraphQLInt },
    company_accountmanager: { type: GraphQLInt },
    company_description: { type: GraphQLString },
    company_type: { type: GraphQLInt },
    company_email: { type: GraphQLString },
    company_custom: { type: GraphQLString },
    company_modified: { type: GraphQLInt },
    rooms_total: { type: GraphQLInt },
    rooms_wired: { type: GraphQLInt },
    rooms_wired_des: { type: GraphQLString },
    rooms_wifi: { type: GraphQLString },
    rooms_wifi_des: { type: GraphQLInt },
    rooms_public: { type: GraphQLString },
    facility_const: { type: GraphQLString },
    facility_buildings: { type: GraphQLString },
    company_skyid: { type: GraphQLString },
    company_propname: { type: GraphQLString },
    company_location: { type: GraphQLString },
    company_airport: { type: GraphQLString },
    company_wifi: { type: GraphQLString },
    company_wifi_type: { type: GraphQLString },
    company_wifi_fee: { type: GraphQLString },
    company_wifi_ssid: { type: GraphQLString },
    company_wifi_login: { type: GraphQLString },
    company_wired: { type: GraphQLString },
    company_wiried_type: { type: GraphQLString },
    company_wired_login: { type: GraphQLString },
    company_circuit_type: { type: GraphQLString },
    company_circuit_provider: { type: GraphQLString },
    company_circuit_speed: { type: GraphQLString },
    company_parent: { type: GraphQLInt },
    company_secondary: { type: GraphQLInt },
    company_splash: { type: GraphQLInt },
    company_fac_bcount: { type: GraphQLInt },
    company_fac_floors: { type: GraphQLInt },
    company_fac_chase: { type: GraphQLInt },
    company_fac_drop: { type: GraphQLInt },
    company_fac_roomaccess: { type: GraphQLInt },
    company_fac_hallways: { type: GraphQLInt },
    company_fac_material: { type: GraphQLInt },
    company_support_level: { type: GraphQLInt },
    company_circuit: { type: GraphQLInt },
    company_circuit_newspeed: { type: GraphQLInt },
    company_circuit_newtype: { type: GraphQLInt },
    company_hotspot_config: { type: GraphQLInt },
    company_rad_type: { type: GraphQLInt },
    company_rad_acess: { type: GraphQLInt },
    company_rad_ads: { type: GraphQLInt },
    company_rad_airlock: { type: GraphQLInt },
    company_rad_register: { type: GraphQLInt },
    company_rad_proxy: { type: GraphQLInt },
    company_rad_proxy_timeout: { type: GraphQLInt },
    company_rad_proxy_sleep: { type: GraphQLInt },
    company_rad_email: { type: GraphQLString },
    company_rad_username: { type: GraphQLString },
    company_rad_password: { type: GraphQLString },
    company_limit_time: { type: GraphQLInt },
    company_limit_inout: { type: GraphQLInt },
    company_limit_in: { type: GraphQLInt },
    company_limit_out: { type: GraphQLInt },
    company_rate_in: { type: GraphQLInt },
    company_rate_out: { type: GraphQLInt },
    company_network_map: { type: GraphQLString },
    company_cameras: { type: GraphQLInt },
    company_live: { type: GraphQLInt },
    company_base_rate: { type: GraphQLString },
    company_base_time: { type: GraphQLString },
    company_excess_rate: { type: GraphQLString },
    company_fac_built: { type: GraphQLInt },
    company_timezone: { type: GraphQLInt },
    company_folio: { type: GraphQLInt },
    company_credit: { type: GraphQLInt },
    company_code: { type: GraphQLString },
    company_start: { type: GraphQLString },
    company_install: { type: GraphQLString },
    company_end: { type: GraphQLString },
    company_actual: { type: GraphQLString },
    company_level: { type: GraphQLInt },
    company_ppr: { type: GraphQLString },
    company_custyp: { type: GraphQLString },
    company_reseller: { type: GraphQLInt },
  },
  { tableName: "companies-backup2" }
);

const company_additionaltype =  new GraphQLObjectType({
  name: "company_additional",
  fields: () => ({
    add_company_id: { type: GraphQLInt, primaryKey: true },
    add_item_type: { type: GraphQLInt, primaryKey: true },
    add_item_value: { type: GraphQLString },
  })
})
const company_advntype = new GraphQLObjectType({
  name: "company_advn",
  fields: () => ({
    advn_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: GraphQLInt },
    advn_guid: { type: GraphQLString },
  })
})

const company_advn_backuptype = new GraphQLObjectType({
  name: "company_advn_backup",
  fields: () => ({
    advn_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    advn_company_id: { type: GraphQLInt },
    advn_guid: { type: GraphQLString },
  })
})
const company_allviewtype = new GraphQLObjectType({
  name: "company_allview",
  fields: () => ({
    allview_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    allview_company_id: { type: GraphQLInt },
    allview_uid: { type: GraphQLString },
  })
})

const company_assigned_field_techtype = new GraphQLObjectType({
  name: "company_assigned_field_tech",
  fields: () => ({
    ft_id: { type: GraphQLInt },
    company_id: { type: GraphQLInt, primaryKey: true },
    primary_tech: { type: GraphQLInt, primaryKey: true },
  })
})

const company_citytype = new GraphQLObjectType({
  name: "company_city",
  description: "Item that represents a city where Ovation Networks has a customer",
  fields: () => ({
    company_city_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    company_city_ccc: { type: GraphQLString },
    company_city_name: { type: GraphQLString },
    company_city_sound: { type: GraphQLString },
  })
})

const company_field_techstype = new GraphQLObjectType({
  name: "company_city_techs",
  fields: () => ({
    ft_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true },
    ft_company_name: { type: GraphQLString },
    ft_company_number: { type: GraphQLString },
    ft_name: { type: GraphQLString },
    ft_contact_number: { type: GraphQLString },
    ft_secondary_number: { type: GraphQLString },
    ft_available_days: { type: GraphQLInt },
    ft_available_hours_weekday: { type: GraphQLString },
    ft_available_hours_weekend: { type: GraphQLString },
    ft_hourly_rate_weekday: { type: DECIMAL },
    ft_hourly_rate_weekend: { type: DECIMAL },
    ft_notes: { type: GraphQLString },
  })
})

const company_flagtype = new GraphQLObjectType({
  name: "company_flag",
  description: "Flags used by companies working with Ovation Networks",
  fields: () => ({
    company_flag_id: { type: GraphQLInt, primaryKey: true, autoIncrement: true, description: "ID of company flag" },
    company_flag_nnn: { type: GraphQLString, description: "Three letter code representing the company name"},
    company_flag_name: { type: GraphQLString, description:"Name of company flag" },
    company_flag_franchisor: { type: GraphQLInt, },
    company_flag_sound: { type: GraphQLString },
    company_flag_color: { type: GraphQLString, description: "Color of company_flag" },
    company_flag_body: { type: GraphQLString, description: "A file for the body/background of the company_flag" },
    company_flag_ad: { type: GraphQLString, description: "Image file representing company_flag" },
    company_flag_css: { type: GraphQLString, description: "css code representing the company_flag" },
    company_flag_terms: { type: GraphQLString, description: "Terms of the company_flag, a .txt file" },
  })
})

const company_franchisortype = new GraphQLObjectType({
  name: "company_franchisor",
  description: "Represents a franchisor working with ovation networks",
  fields: () => ({
    company_franchisor_id: {
      type: GraphQLInt,
      primaryKey: true,
      autoIncrement: true,
      description: "ID of franchisor"
    },
    company_franchisor_name: { type: GraphQLString, description: "Franchisor name"},
  })
})

const company_liscensestype = new GraphQLObjectType({
  name: "company_liscenses",
  fields: () => ({
    licenses_id: {
      type: GraphQLInt,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: { type: GraphQLInt },
    item_id: { type: GraphQLInt },
    purchase_date: { type: GraphQLString },
    start_date: { type: GraphQLString },
    licenses_months: { type: GraphQLInt, unique: true },
  })
})
const company_locktype = new GraphQLObjectType({
  name: "company_lock",
  fields: () => ({
  id: { type: GraphQLInt, autoIncrement: true, primaryKey: true },
  company_id: { type: GraphQLInt },
  lockedFlag: { type: GraphQLInt },
  lockedUser: { type: GraphQLInt },
  lockedMessage: { type: GraphQLString },
  createdAt: { type: TIME },
  modifiedAt: { type: TIME },
})
})
const company_phonetype = new GraphQLObjectType({
  name: "company_phone",
  fields: () => ({
    cphone_id: { type: GraphQLInt, autoIncrement: true, primaryKey: true },
    cphone_number: { type: GraphQLInt },
    cphone_company: { type: GraphQLInt },
    cphone_type: { type: GraphQLInt },
  })
})

const company_resellertype = new GraphQLObjectType({
  name: "company_reseller",
  fields: () => ({
    reseller_id: { type: GraphQLInt, primaryKey: true },
    reseller_name: { type: GraphQLString },
    reseller_phone: { type: GraphQLString },
    reseller_email: { type: GraphQLString },
  })
})

const company_statestype = new GraphQLObjectType({
  name: "company_states",
  description: "A state where Ovation Networks has customers",
  fields: () => ({
    company_state_id: { type: GraphQLString, description: "ID of state" },
    company_state_name: { type: GraphQLString, description: "Name of state" },
    company_state_sound: { type: GraphQLString },
  })
})
const company_states_amtype = new GraphQLObjectType({
  name: "company_states_am",
  fields: () => ({
    company_state_id: { type: GraphQLString },
    company_state_am: { type: GraphQLInt },
  })
})
const company_tagstype = new GraphQLObjectType({
  name: "company_tags",
  fields: () => ({
    company_id: { type: GraphQLInt, primaryKey: true , },
    contact_id: { type: GraphQLInt, primaryKey: true },
  })
})

//const companiess = await companies.findAll( )
//console.log(companies.findAll())
module.exports = { companiestype, company_statestype, company_citytype, company_flagtype, company_franchisortype };
