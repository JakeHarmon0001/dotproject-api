 const db = require("../database/db.js") //database variable
 const graphql = require('graphql')
 const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString,GraphQL, GraphQLList} = graphql
 const{graphqlHTTP} = require('express-graphql')
const { STRING } = require("sequelize")

import { TINYINT } from 'sequelize'
import { DECIMAL } from 'sequelize'
import { INTEGER } from 'sequelize'
import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

 const companies = sequelize.define('companies', { //company object type
    
        company_id: {type: INTEGER},
        company_module: {type: INTEGER},
        name: {type: STRING},
        phone: {type: STRING},
        phone2: {type: STRING},
        company_fax: {type: STRING},
        company_address1: {type: STRING},
        company_address2: {type: STRING},
        company_city: {type: STRING},
        company_citynew: {type: STRING},
        company_state: {type: STRING},
        company_statenew: {type: STRING},
        company_zip: {type: STRING},
        company_flag: {type: STRING},
        company_primary_url: {type: STRING},
        company_owner: {type: INTEGER},
        company_accountmanager: {type: IN},
        company_description: {type: STRING},
        company_type: {type: INTEGER},
        company_email: {type: STRING},
        company_custom: {type: STRING},
        company_modified: {type: INTEGER},
        rooms_total: {type: INTEGER},
        rooms_wired: {type: INTEGER},
        rooms_wired_des: {type: STRING},
        rooms_wifi: {type: STRING},
        rooms_wifi_des: {type: INTEGER},
        rooms_public: {type: STRING},
        facility_const: {type: STRING},
        facility_buildings: {type: STRING},
        company_skyid: {type: STRING},
        company_propname: {type: STRING},
        company_location: {type: STRING},
        company_airport: {type: STRING},
        company_wifi: {type: STRING},
        company_wifi_type: {type: STRING},
        company_wifi_fee: {type: STRING}, 
        company_wifi_ssid: {type: STRING}, 
        company_wifi_login:  {type: STRING}, 
        company_wired: {type: STRING}, 
        company_wiried_type: {type: STRING}, 
        company_wired_login: {type: STRING}, 
        company_circuit_type: {type: STRING}, 
        company_circuit_provider: {type: STRING}, 
        company_circuit_speed: {type: STRING},
        compnay_parent: {type: INTEGER}, 
        company_secondary: {type: INTEGER}, 
        company_splash: {type: INTEGER}, 
        company_fac_bcount: {type: INTEGER}, 
        company_fac_floors: {type: INTEGER}, 
        company_fac_chase: {type: INTEGER}, 
        company_fac_drop: {type: INTEGER}, 
        company_fac_roomaccess: {type: INTEGER},
        company_fac_hallways: {type: INTEGER},
        comany_fac_material: {type: INTEGER},
        company_support_level: {type: INTEGER},
        company_circuit: {type: INTEGER},
        company_circuit_newspeed: {type: INTEGER},
        company_circuit_newtype: {type: INTEGER},
        company_hotspot_config: {type: INTEGER},
        company_rad_type: {type: INTEGER},
        company_rad_acess: {type: INTEGER},
        company_rad_ads: {type: INTEGER},
        company_rad_airlock: {type: INTEGER},
        company_rad_register: {type: INTEGER},
        company_rad_proxy: {type: TINYINT},
        company_rad_proxy_timeout: {type: INTEGER},
        company_rad_proxy_sleep: {type: INTEGER}, 
        company_rad_email: {type: STRING},
        company_rad_username: {type: STRING},
        company_rad_password: {type: STRING},
        company_limit_time: {type: INTEGER},
        company_limit_inout: {type: INTEGER},
        company_limit_in: {type: INTEGER},
        company_limit_out: {type: INTEGER},
        company_rate_in: {type: INTEGER},
        company_rate_out : {type: INTEGER},
        company_network_map:  {type: STRING},
        company_cameras: {type: INTEGER},
        company_live: {type: INTEGER},
        company_base_rate: {type: STRING},
        company_base_time: {type: STRING},
        company_excess_rate: {type: STRING},
        company_fac_built: {type: INTEGER},
        company_timezone: {type: INTEGER},
        company_folio: {type: INTEGER},
        company_credit: {type: INTEGER},
        company_code: {type: STRING},
        company_start: {type: STRING},
        company_install:{type: STRING},
        company_end:{type: STRING},
        company_actual :{type: STRING},
        company_level:{type: INTEGER},
        company_ppr:{type: STRING},
        company_custyp:{type: STRING},
        company_reseller:{type: INTEGER}
    
})

const companiesbackup = sequelize.define('companies-backup', { //company object type
    
    company_id: {type: INTEGER},
    company_module: {type: INTEGER},
    name: {type: STRING},
    phone: {type: STRING},
    phone2: {type: STRING},
    company_fax: {type: STRING},
    company_address1: {type: STRING},
    company_address2: {type: STRING},
    company_city: {type: STRING},
    company_citynew: {type: STRING},
    company_state: {type: STRING},
    company_statenew: {type: STRING},
    company_zip: {type: STRING},
    company_flag: {type: STRING},
    company_primary_url: {type: STRING},
    company_owner: {type: INTEGER},
    company_accountmanager: {type: IN},
    company_description: {type: STRING},
    company_type: {type: INTEGER},
    company_email: {type: STRING},
    company_custom: {type: STRING},
    company_modified: {type: INTEGER},
    rooms_total: {type: INTEGER},
    rooms_wired: {type: INTEGER},
    rooms_wired_des: {type: STRING},
    rooms_wifi: {type: STRING},
    rooms_wifi_des: {type: INTEGER},
    rooms_public: {type: STRING},
    facility_const: {type: STRING},
    facility_buildings: {type: STRING},
    company_skyid: {type: STRING},
    company_propname: {type: STRING},
    company_location: {type: STRING},
    company_airport: {type: STRING},
    company_wifi: {type: STRING},
    company_wifi_type: {type: STRING},
    company_wifi_fee: {type: STRING}, 
    company_wifi_ssid: {type: STRING}, 
    company_wifi_login:  {type: STRING}, 
    company_wired: {type: STRING}, 
    company_wiried_type: {type: STRING}, 
    company_wired_login: {type: STRING}, 
    company_circuit_type: {type: STRING}, 
    company_circuit_provider: {type: STRING}, 
    company_circuit_speed: {type: STRING},
    compnay_parent: {type: INTEGER}, 
    company_secondary: {type: INTEGER}, 
    company_splash: {type: INTEGER}, 
    company_fac_bcount: {type: INTEGER}, 
    company_fac_floors: {type: INTEGER}, 
    company_fac_chase: {type: INTEGER}, 
    company_fac_drop: {type: INTEGER}, 
    company_fac_roomaccess: {type: INTEGER},
    company_fac_hallways: {type: INTEGER},
    comany_fac_material: {type: INTEGER},
    company_support_level: {type: INTEGER},
    company_circuit: {type: INTEGER},
    company_circuit_newspeed: {type: INTEGER},
    company_circuit_newtype: {type: INTEGER},
    company_hotspot_config: {type: INTEGER},
    company_rad_type: {type: INTEGER},
    company_rad_acess: {type: INTEGER},
    company_rad_ads: {type: INTEGER},
    company_rad_airlock: {type: INTEGER},
    company_rad_register: {type: INTEGER},
    company_rad_proxy: {type: TINYINT},
    company_rad_proxy_timeout: {type: INTEGER},
    company_rad_proxy_sleep: {type: INTEGER}, 
    company_rad_email: {type: STRING},
    company_rad_username: {type: STRING},
    company_rad_password: {type: STRING},
    company_limit_time: {type: INTEGER},
    company_limit_inout: {type: INTEGER},
    company_limit_in: {type: INTEGER},
    company_limit_out: {type: INTEGER},
    company_rate_in: {type: INTEGER},
    company_rate_out : {type: INTEGER},
    company_network_map:  {type: STRING},
    company_cameras: {type: INTEGER},
    company_live: {type: INTEGER},
    company_base_rate: {type: STRING},
    company_base_time: {type: STRING},
    company_excess_rate: {type: STRING},
    company_fac_built: {type: INTEGER},
    company_timezone: {type: INTEGER},
    company_folio: {type: INTEGER},
    company_credit: {type: INTEGER},
    company_code: {type: STRING},
    company_start: {type: STRING},
    company_install:{type: STRING},
    company_end:{type: STRING},
    company_actual :{type: STRING},
    company_level:{type: INTEGER},
    company_ppr:{type: STRING},
    company_custyp:{type: STRING},
    company_reseller:{type: INTEGER}

})

const companiesbackup2 = sequelize.define('companies-backup', { //company object type
    
    company_id: {type: INTEGER},
    company_module: {type: INTEGER},
    name: {type: STRING},
    phone: {type: STRING},
    phone2: {type: STRING},
    company_fax: {type: STRING},
    company_address1: {type: STRING},
    company_address2: {type: STRING},
    company_city: {type: STRING},
    company_citynew: {type: STRING},
    company_state: {type: STRING},
    company_statenew: {type: STRING},
    company_zip: {type: STRING},
    company_flag: {type: STRING},
    company_primary_url: {type: STRING},
    company_owner: {type: INTEGER},
    company_accountmanager: {type: IN},
    company_description: {type: STRING},
    company_type: {type: INTEGER},
    company_email: {type: STRING},
    company_custom: {type: STRING},
    company_modified: {type: INTEGER},
    rooms_total: {type: INTEGER},
    rooms_wired: {type: INTEGER},
    rooms_wired_des: {type: STRING},
    rooms_wifi: {type: STRING},
    rooms_wifi_des: {type: INTEGER},
    rooms_public: {type: STRING},
    facility_const: {type: STRING},
    facility_buildings: {type: STRING},
    company_skyid: {type: STRING},
    company_propname: {type: STRING},
    company_location: {type: STRING},
    company_airport: {type: STRING},
    company_wifi: {type: STRING},
    company_wifi_type: {type: STRING},
    company_wifi_fee: {type: STRING}, 
    company_wifi_ssid: {type: STRING}, 
    company_wifi_login:  {type: STRING}, 
    company_wired: {type: STRING}, 
    company_wiried_type: {type: STRING}, 
    company_wired_login: {type: STRING}, 
    company_circuit_type: {type: STRING}, 
    company_circuit_provider: {type: STRING}, 
    company_circuit_speed: {type: STRING},
    compnay_parent: {type: INTEGER}, 
    company_secondary: {type: INTEGER}, 
    company_splash: {type: INTEGER}, 
    company_fac_bcount: {type: INTEGER}, 
    company_fac_floors: {type: INTEGER}, 
    company_fac_chase: {type: INTEGER}, 
    company_fac_drop: {type: INTEGER}, 
    company_fac_roomaccess: {type: INTEGER},
    company_fac_hallways: {type: INTEGER},
    comany_fac_material: {type: INTEGER},
    company_support_level: {type: INTEGER},
    company_circuit: {type: INTEGER},
    company_circuit_newspeed: {type: INTEGER},
    company_circuit_newtype: {type: INTEGER},
    company_hotspot_config: {type: INTEGER},
    company_rad_type: {type: INTEGER},
    company_rad_acess: {type: INTEGER},
    company_rad_ads: {type: INTEGER},
    company_rad_airlock: {type: INTEGER},
    company_rad_register: {type: INTEGER},
    company_rad_proxy: {type: TINYINT},
    company_rad_proxy_timeout: {type: INTEGER},
    company_rad_proxy_sleep: {type: INTEGER}, 
    company_rad_email: {type: STRING},
    company_rad_username: {type: STRING},
    company_rad_password: {type: STRING},
    company_limit_time: {type: INTEGER},
    company_limit_inout: {type: INTEGER},
    company_limit_in: {type: INTEGER},
    company_limit_out: {type: INTEGER},
    company_rate_in: {type: INTEGER},
    company_rate_out : {type: INTEGER},
    company_network_map:  {type: STRING},
    company_cameras: {type: INTEGER},
    company_live: {type: INTEGER},
    company_base_rate: {type: STRING},
    company_base_time: {type: STRING},
    company_excess_rate: {type: STRING},
    company_fac_built: {type: INTEGER},
    company_timezone: {type: INTEGER},
    company_folio: {type: INTEGER},
    company_credit: {type: INTEGER},
    company_code: {type: STRING},
    company_start: {type: STRING},
    company_install:{type: STRING},
    company_end:{type: STRING},
    company_actual :{type: STRING},
    company_level:{type: INTEGER},
    company_ppr:{type: STRING},
    company_custyp:{type: STRING},
    company_reseller:{type: INTEGER}

})

const company_additional = sequelize.define('company_additional', {

    add_company_id: {type: INTEGER},
    add_item_type: {type: INTEGER},
    add_item_value: {type: STRING}
})

const company_advn = sequelize.define('company_advn', {
    advn_id: {type: INTEGER},
    advn_company_id: {type: INTEGER},
    advn_guid: {type: STRING}
})

const company_advn_backup = sequelize.define('company_advn_backup', {
    advn_id: {type: INTEGER},
    advn_company_id: {type: INTEGER},
    advn_guid: {type: STRING}
})

const company_allview = sequelize.define('company_allview', {

    allview_id: {type: INTEGER},
    allview_company_id: {INTEGER},
    allview_uid: {type: STRING}

})

const company_assigned_field_tech = sequelize.define('company_assigned_field_tech', {
    ft_id: {type: INTEGER},
    company_id: {type: INTEGER},
    primary_tech: {type: TINYINT}

})

const company_city = sequelize.define('company_city', {

    company_city_id: {type: INTEGER},
    company_city_ccc: {type: STRING},
    company_city_name: {type: STRING},
    company_city_sound: {type: STRING}
})

const company_field_techs = sequelize.define('company_field_techs', {
    ft_id: {type: INTEGER},
    ft_company_name: {type: STRING},
    ft_company_number: {type: STRING},
    ft_name: {type: STRING},
    ft_contact_number: {type: STRING},
    ft_secondary_number: {type: STRING },
    ft_available_days: {type: INTEGER},
    ft_available_hours_weekday: {type: STRING },
    ft_available_hours_weekend: {type: STRING},
    ft_hourly_rate_weekday: {type: DECIMAL},
    ft_hourly_rate_weekend: {type: DECIMAL},
    ft_notes: {type: STRING}
})

const company_flag = sequelize.define('company_flags', {

    company_flag_id: {type: INTEGER },
    company_flag_nnn: {type: STRING},
    company_flag_name: {type: STRING},
    company_flag_franchisor: {type: INTEGER},
    company_flag_sound: {type: STRING},
    company_flag_color: {type: STRING},
    company_flag_body: {type: STRING},
    company_flag_body: {type: STRING},
    company_flag_ad: {type: STRING},
    company_flag_css: {type: STRING},
    company_flag_terms: {type: STRING}
})


const company_franchisor = sequelize.define('company_franchisor', {
    company_franchisor_id: {type: INTEGER},
    company_franchisor_name: {type: STRING}
})

const company_liscenses = sequelize.define('company_liscenses', {
    licenses_id: {type: INTEGER },
    company_id: {type: INTEGER },
    item_id: {type: INTEGER },
    purchase_date: {type: STRING},
    start_data: {type: STRING },
    licenses_months: {type: INTEGER }
})

const company_lock = sequelize.define('company_lock',  {
    id: {type: INTEGER},
    company_id: {type: INTEGER },
    lockedFlag: {type: TINYINT},
    lockedUser: {type: INTEGER},
    lockedMessage: {type: STRING},
    createdAt: {type: STRING},
    modifiedAt: {type: STRING}
})

const company_phone = sequelize.define('company_phone', {
    cphone_id: {type: INTEGER},
    cphone_number: {type: INTEGER},
    cphone_company: {type: INTEGER},
    cphone_type: {type: INTEGER}
})

const company_reseller = sequelize.define('company_reseller', {
    reseller_id: {type: INTEGER},
    reseller_name:{type: STRING},
    reseller_phone:{type: STRING},
    reseller_email:{type: STRING}
})

const company_states = sequelize.define('company_states', {
    company_state_id: {type: STRING},
    company_state_name: {type: STRING},
    company_state_sound:  {type: STRING}

})

const company_states_am = sequelize.define('company_states_am', {
    company_state_id: {type: STRING},
    company_state_am: {type: INTEGER}
})

const company_tags = sequelize.define('company_tags', {
    company_id: {type: INTEGER},
    contact_id: {type: INTEGER}
})