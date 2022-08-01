
const { createServer }=  require('@graphql-yoga/node')
const { createPool } = require('mariadb')
const models = module.require('./schemas/companies.js')
//const express = require('express')
const db = require("./models/index.js")
const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from Yoga!',
      },
    },
  },
})

// const rootQuery = new GraphQLObjectType ({
//   name: "RootQueryType",
//   fields: {
//       getAllCompanies: {
//           type: new GraphQLList(CompanyType),
//           args: { id: {type: GraphQLString}}, //THERE COULD BE POTENTIAL ISSUES WITH THIS LINE OF CODE HEADS UP
//           resolve(parent,args) {
//               return Company.find() //await might cause some issues
//           }
//       }
      
//   }
// })
 console.log(db.Sequelize)

server.start()
//db.asyncFunction()