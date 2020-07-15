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

  type createProductPayload {
    product: Product
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    createProduct(input: createProductInput): createProductPayload
  }

  input createProductInput {
    data: ProductInput
  }

  input ProductInput {
    name: String!
    description: String
    amount: String
    productCode: String
    quantity: String
    Image: ID
  }
`

export default producttypeDefs
