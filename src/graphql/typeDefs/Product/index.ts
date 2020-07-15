import { gql } from 'apollo-server'

const producttypeDefs = gql`
  type Product {
    id: ID
    created_at: DateTime
    updated_at: DateTime
    name: String
    description: String
    amount: String
    productCode: String
    quantity: String
    Image: UploadFile
  }

  type UploadFile {
    id: ID
    created_at: DateTime
    updated_at: DateTime
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String
    ext: String
    mime: String
    size: Float
    url: String
    previewUrl: String
    provider: String
  }
  type Query {
    products: [Product]
  }
`

export default producttypeDefs
