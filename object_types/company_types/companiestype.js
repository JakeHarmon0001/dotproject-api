/**
 * graphql object type of the companies table
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

const companiestype = new GraphQLObjectType({
  name: "companies",
  description: "Represents a company that is a customer of Ovation Networks",
  fields: () => ({
    //company object type
    company_id: { type: GraphQLString, description: "ID representing existing company" },
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

module.exports = { companiestype }
