import { gql } from 'apollo-server'

const orderstypeDefs = gql`
  type Order {
    id: ID!
    created_at: String
    updated_at: String
    orderNumber: String!
    receipientName: String
    products: [Product]
  }
  type createOrderPayload {
    order: Order
  }
  type OrderBasicPayload {
    order: Order
  }
  type Query {
    orders: [Order]
    order(id: ID!): Order
  }

  type Mutation {
    # Orders
    createOrder(input: createOrderInput): createOrderPayload
    updateOrder(input: updateOrderInput): OrderBasicPayload
    deleteOrder(input: deleteOrderInput): OrderBasicPayload
  }

  # input Order
  input createOrderInput {
    data: OrderInput
  }

  input OrderInput {
    orderNumber: String!
    receipientName: String!
    products: [ID]
  }

  input updateOrderInput {
    where: InputID
    data: editOrderInput
  }
  input editOrderInput {
    orderNumber: String!
    receipientName: String
    products: [ID]
  }
  input deleteOrderInput {
    where: InputID
  }
`

export default orderstypeDefs
