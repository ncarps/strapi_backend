const productResolvers = {
  Query: {
    products: async (parent, args, context, info) => {
      const { fetchProducts } = context
      console.log('fetch', await fetchProducts())
      const products = await fetchProducts()
      return products.products
    },
  },

  Mutation: {
    createProduct: async (_, { input }, context) => {
      const { createProduct } = context
      const callCreateProducts = await createProduct()
      const newCreateProducts = await callCreateProducts(input)
      if (newCreateProducts.errors) {
        throw new Error('Product Code is already exists')
      }
      return await newCreateProducts.data.createProduct
    },
  },
}

export default productResolvers
