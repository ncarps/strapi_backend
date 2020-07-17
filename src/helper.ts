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
    mutation a($input: createProductInput) {
      createProduct(input: $input) {
        product {
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
    }
  `

  const operation = {
    query: mutateProduct,
    variables: { input: product },
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

  return result
}

export const updateProduct = (header) => async (product) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'

  const link = new HttpLink({ uri })

  const mutateUpdateProduct = gql`
    mutation a($input: updateProductInput) {
      updateProduct(input: $input) {
        product {
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
    }
  `

  const operation = {
    query: mutateUpdateProduct,
    variables: { input: product },
    context: {
      headers: {
        //Den auth
        Authorization: header,
        //Mark auth
        //Authorization: "Basic bWFyazoxMjM=",
      },
    },
  }
  console.log('pro', product)
  const result: any = await makePromise(execute(link, operation))
    .then((data) => data)
    .catch((error) => error)

  return result
}

export const deleteProduct = (header) => async (product) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'

  const link = new HttpLink({ uri })

  const mutateDeleteProduct = gql`
    mutation a($input: deleteProductInput) {
      deleteProduct(input: $input) {
        product {
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
    }
  `

  const operation = {
    query: mutateDeleteProduct,
    variables: { input: product },
    context: {
      headers: {
        //Den auth
        Authorization: header,
        //Mark auth
        //Authorization: "Basic bWFyazoxMjM=",
      },
    },
  }
  console.log('pro', product)
  const result: any = await makePromise(execute(link, operation))
    .then((data) => data)
    .catch((error) => error)

  return result
}

export const fetchOrders = async (header) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'
  const link = new HttpLink({ uri })
  const operation = {
    query: gql`
      query {
        orders {
          id
          orderNumber
          Recipient
          products {
            id
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
              alternativeText
              caption
              width
              height
              formats
              hash
              ext
              mime
              size
              url
              previewUrl
              provider
              provider_metadata
              related {
                __typename
              }
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
export const createOrder = (header) => async (order) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'

  const link = new HttpLink({ uri })

  const mutateOrder = gql`
    mutation a($input: createOrderInput) {
      createOrder(input: $input) {
        order {
          id
          orderNumber
          Recipient
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
              alternativeText
              caption
              width
              height
              formats
              hash
              ext
              mime
              size
              url
              previewUrl
              provider
              provider_metadata
              related {
                __typename
              }
            }
          }
        }
      }
    }
  `

  const operation = {
    query: mutateOrder,
    variables: { input: order },
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

  return result
}

export const updateOrder = (header) => async (order) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'

  const link = new HttpLink({ uri })

  const mutateUpdateOrder = gql`
    mutation a($input: updateOrderInput) {
      updateOrder(input: $input) {
        order {
          id
          orderNumber
          Recipient
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
              alternativeText
              caption
              width
              height
              formats
              hash
              ext
              mime
              size
              url
              previewUrl
              provider
              provider_metadata
              related {
                __typename
              }
            }
          }
        }
      }
    }
  `

  const operation = {
    query: mutateUpdateOrder,
    variables: { input: order },
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

  return result
}

export const deleteOrder = (header) => async (order) => {
  const uri = EPOD_API_URI || 'http://localhost:1337/playground'

  const link = new HttpLink({ uri })

  const mutateDeleteOrder = gql`
    mutation a($input: deleteOrderInput) {
      deleteOrder(input: $input) {
        order {
          id
          orderNumber
          Recipient
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
              alternativeText
              caption
              width
              height
              formats
              hash
              ext
              mime
              size
              url
              previewUrl
              provider
              provider_metadata
              related {
                __typename
              }
            }
          }
        }
      }
    }
  `

  const operation = {
    query: mutateDeleteOrder,
    variables: { input: order },
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

  return result
}
