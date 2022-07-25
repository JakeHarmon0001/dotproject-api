import { createServer } from '@graphql-yoga/node'
import { createPool } from 'mariadb'
//const express = require('express')
import db from "./db.js"
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


server.start()
//db.asyncFunction()