const orderResolvers = {
  Query: {
    orders: async (parent, args, context, info) => {
      const { fetchOrders } = context
      console.log('fetch', await fetchOrders())
      const orders = await fetchOrders()
      return orders.orders
    },
    order: async (parent, { id }, context, info) => {
      const { fetchOneOrder } = context
      const order = await fetchOneOrder()
      const getOrder = await order(id)
      return await getOrder.order
    },
  },

  Mutation: {
    createOrder: async (_, { input }, context) => {
      const { createOrder } = context
      const callCreateOrders = await createOrder()
      const newCreateOrders = await callCreateOrders(input)
      if (newCreateOrders.errors) {
        throw new Error('Order Number is already exists')
      }
      return await newCreateOrders.data.createOrder
    },

    updateOrder: async (parent, { input }, context, info) => {
      const { updateOrder } = context
      const UpdateNewOrder = await updateOrder()
      const newOrder = await UpdateNewOrder(input)
      if (newOrder.errors) {
        throw new Error('The id does not exists')
      }
      return await newOrder.data.updateOrder
    },
    deleteOrder: async (parent, { input }, context, info) => {
      const { deleteOrder } = context
      const DeleteNewOrder = await deleteOrder()
      const deletedOrder = await DeleteNewOrder(input)
      if (deletedOrder.errors) {
        throw new Error('The id does not exists')
      }
      return await deletedOrder.data.deleteOrder
    },
  },
}

export default orderResolvers
