const productResolvers = {
  Query: {
    products: async (parent, args, context, info) => {
      const { fetchProducts } = context

      return fetchProducts
    },
  },

  Mutation: {
    createProduct: async (_, { input }, context) => {
      const { createProduct } = context
      return createProduct(input)
    },
  },
}

export default productResolvers
