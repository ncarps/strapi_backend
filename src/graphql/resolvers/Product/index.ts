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

    updateProduct: async (parent, { input }, context, info) => {
      const { updateProduct } = context
      const UpdateNewProduct = await updateProduct()
      const newProduct = await UpdateNewProduct(input)
      if (newProduct.errors) {
        throw new Error('The id does not exists')
      }
      return await newProduct.data.updateProduct
    },
    deleteProduct: async (parent, { input }, context, info) => {
      const { deleteProduct } = context
      const DeleteNewProduct = await deleteProduct()
      const deletedProduct = await DeleteNewProduct(input)
      if (deletedProduct.errors) {
        throw new Error('The id does not exists')
      }
      return await deletedProduct.data.deleteProduct
    },
  },
}

export default productResolvers
