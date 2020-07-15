const { createApolloFetch } = require('apollo-fetch')
import { execute, makePromise } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'
const { EPOD_API_URI } = process.env

require('dotenv').config()

export const fetchProducts = async (header) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'
  const link = new HttpLink({ uri })
  const operation = {
    query: gql`
      query {
        products {
          id
          created_at
          updated_at
          name
          description
          amount
          productCode
          quantity
          Image {
            id
            created_at
            updated_at
            name
            caption
            alternativeText
            width
            height
            formats
            hash
            ext
            mime
            size
            url
            provider
            previewUrl
            provider_metadata
            related {
              __typename
            }
          }
        }
      }
    `,
    variables: {},
    context: {
      headers: {
        Authorization: header,
      },
    },
  }

  const result: any = await makePromise(execute(link, operation))
    .then((data) => data)
    .catch((error) => error)

  return result.data || result.error
}

export const createProduct = (header) => async (product) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'

  const link = new HttpLink({ uri })

  const mutateProduct = gql`
    mutation a($product: createProductInput) {
      createProduct(product: $product) {
        id
        created_at
        updated_at
        name
        description
        amount
        productCode
        quantity
        Image {
          id
          created_at
          updated_at
          name
          caption
          alternativeText
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          provider
          previewUrl
          provider_metadata
          related {
            __typename
          }
        }
      }
    }
  `

  const operation = {
    query: mutateProduct,
    variables: { product: product },
    context: {
      headers: {
        //Den auth
        Authorization: header,
        //Mark auth
        //Authorization: "Basic bWFyazoxMjM=",
      },
    },
  }

  const result: any = await makePromise(execute(link, operation))
    .then((data) => data)
    .catch((error) => error)
  return result.data || result.error
}
