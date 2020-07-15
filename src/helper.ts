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
        allDrivers {
          id
          name
          plateNumber
          porter
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
