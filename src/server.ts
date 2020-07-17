require('dotenv').config()
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { resolvers, typeDefs } from './graphql'

import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from './helper'

const { authURI, PORT, EPOD_API_URI } = process.env

const startServer = async () => {
  const server = await new ApolloServer({
    typeDefs,
    resolvers,
    context: async (session) => ({
      fetchProducts: async () =>
        fetchProducts(session.req.headers.authorization),
      createProduct: async () =>
        createProduct(session.req.headers.authorization),
      updateProduct: async () =>
        updateProduct(session.req.headers.authorization),
      deleteProduct: async () =>
        deleteProduct(session.req.headers.authorization),
      fetchOrders: async () => fetchOrders(session.req.headers.authorization),
      createOrder: async () => createOrder(session.req.headers.authorization),
      updateOrder: async () => updateOrder(session.req.headers.authorization),
      deleteOrder: async () => deleteOrder(session.req.headers.authorization),
    }),
  })
  const app = express()
  const port = PORT || 5003
  server.applyMiddleware({ app })

  app.listen({ port: port }, () =>
    console.log(
      `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  )
}

startServer()
