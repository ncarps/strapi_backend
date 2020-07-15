require('dotenv').config()
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { resolvers, typeDefs } from './graphql'

import { fetchProducts } from './helper'

const { authURI, PORT, EPOD_API_URI } = process.env

const startServer = async () => {
  const server = await new ApolloServer({
    typeDefs,
    resolvers,
    context: async (session) => ({
      fetchProducts: async () =>
        fetchProducts(session.req.headers.authorization),
    }),
  })
  const app = express()
  const port = PORT || 5000
  server.applyMiddleware({ app })

  app.listen({ port: port }, () =>
    console.log(
      `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  )
}

startServer()
