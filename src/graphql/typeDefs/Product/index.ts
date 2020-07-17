import { gql } from 'apollo-server'

const producttypeDefs = gql`
  type Product {
    id: ID
    created_at: String
    updated_at: String
    name: String
    description: String
    amount: String
    productCode: String
    quantity: String
    Image: UploadFile
  }

  type UploadFile {
    id: ID
    created_at: String
    updated_at: String
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: String
    hash: String
    ext: String
    mime: String
    size: Float
    url: String
    previewUrl: String
    provider: String
  }
  type Orders {
    id: ID!
    created_at: DateTime!
    updated_at: DateTime!
    orderNumber: String!
    Recipient: String
    products: [Product]
  }
  type createOrderPayload {
    order: Orders
  }

  type createProductPayload {
    product: Product
  }

  type ProductBasicDataPayload {
    product: Product
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    # Product
    createProduct(input: createProductInput): createProductPayload
    updateProduct(input: updateProductInput): ProductBasicDataPayload
    deleteProduct(input: deleteProductInput): ProductBasicDataPayload

    # Orders
    createOrder(input: createOrderInput): createOrderPayload
  }

  input createProductInput {
    data: ProductInput
  }

  input InputID {
    id: ID!
  }

  input ProductInput {
    name: String!
    description: String
    amount: String
    productCode: String
    quantity: String
    Image: ID
  }

  input deleteProductInput {
    where: InputID
  }
  input updateProductInput {
    where: InputID
    data: editProductInput
  }
  input editProductInput {
    name: String
    description: String
    amount: String
    productCode: String
    quantity: String
    Image: ID
  }

  # input Order
  input createOrderInput {
    data: OrderInput
  }

  input OrderInput {
    orderNumber: String!
    Recipient: String
    products: [ID]
  }
`

export default producttypeDefs
