import { createTestClient } from 'apollo-server-testing'
import gql from 'graphql-tag'
import { constructTestServer } from './__utils'
import { createProduct } from '../src/helper'

const { server }: any = constructTestServer({
  context: {
    createProduct: jest.fn(() => async (product) => {
      return {
        data: {
          createProduct: {
            product: {
              id: '1',
              ...product.data,
            },
          },
        },
      }
    }),
    deleteProduct: jest.fn(() => async (product) => {
      return {
        data: {
          deleteProduct: {
            product: {
              id: '1',
              amount: '100',
              description: 'Delete Product',
              name: 'Jonas',
              productCode: '420',
              quantity: '1003',
            },
          },
        },
      }
    }),
    updatedProduct: jest.fn(() => async (product) => {
      return {
        data: {
          createProduct: {
            product: {
              id: '1',
              ...product.data,
            },
          },
        },
      }
    }),
    createOrder: jest.fn(() => async (order) => {
      return {
        data: {
          createOrder: {
            order: {
              id: '1',
              ...order.data,
              products: [
                {
                  id: '1',
                  name: 'Mirana',
                  description: 'Jumong',
                  amount: '100',
                  productCode: 'QWE123',
                  quantity: '1000',
                },
                {
                  id: '2',
                  name: 'Rubick',
                  description: 'Telekinesis',
                  amount: '1000',
                  productCode: '42069',
                  quantity: '10001',
                },
              ],
            },
          },
        },
      }
    }),

    updateOrder: jest.fn(() => async (order) => {
      return {
        data: {
          updateOrder: {
            order: {
              id: '1',
              ...order.data,
              products: [
                {
                  id: '1',
                  name: 'Mirana',
                  description: 'Jumong',
                  amount: '100',
                  productCode: 'QWE123',
                  quantity: '1000',
                },
              ],
            },
          },
        },
      }
    }),
  },
})

describe('Queries', () => {
  //Mutations
  it('create a product', async () => {
    const CREATE_PRODUCT = gql`
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
          }
        }
      }
    `

    const { mutate } = createTestClient(server)
    const res = await mutate({
      mutation: CREATE_PRODUCT,
      variables: {
        input: {
          data: {
            name: 'HOTDOG',
            description: 'Hotdog numbawan',
            amount: '123',
            productCode: '420',
            quantity: '100',
          },
        },
      },
    })

    expect(res).toMatchSnapshot()
  })

  it('update a product', async () => {
    const UPDATE_PRODUCT = gql`
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
          }
        }
      }
    `

    const { mutate } = createTestClient(server)
    const res = await mutate({
      mutation: UPDATE_PRODUCT,
      variables: {
        input: {
          data: {
            name: 'HOTDOG',
            description: 'Hotdog numbawan',
            amount: '123',
            productCode: '420',
            quantity: '100',
          },
        },
      },
    })

    expect(res.errors).toBeUndefined()
    expect(res.data).toMatchObject({
      createProduct: {
        product: {
          id: '1',
          name: 'HOTDOG',
          description: 'Hotdog numbawan',
          amount: '123',
          productCode: '420',
          quantity: '100',
        },
      },
    })
    expect(res).toMatchSnapshot()
  })

  it('delete a product', async () => {
    const DELETE_PRODUCT = gql`
      mutation a($input: deleteProductInput) {
        deleteProduct(input: $input) {
          product {
            id
            name
            description
            amount
            productCode
            quantity
          }
        }
      }
    `

    const { mutate } = createTestClient(server)
    const res = await mutate({
      mutation: DELETE_PRODUCT,
      variables: {
        input: {
          where: {
            id: '1',
          },
        },
      },
    })

    expect(res).toMatchSnapshot()
  })

  it('create a order', async () => {
    const CREATE_ORDER = gql`
      mutation a($input: createOrderInput) {
        createOrder(input: $input) {
          order {
            id
            created_at
            updated_at
            orderNumber
            receipientName
            products {
              id
              created_at
              updated_at
              name
              description
              amount
              productCode
              quantity
            }
          }
        }
      }
    `

    const { mutate } = createTestClient(server)
    const res = await mutate({
      mutation: CREATE_ORDER,
      variables: {
        input: {
          data: {
            orderNumber: '42069',
            receipientName: 'Gavin Salcedo',
            products: ['1', '2'],
          },
        },
      },
    })

    expect(res).toMatchSnapshot()
  })

  it('Update a order', async () => {
    const UPDATE_ORDER = gql`
      mutation updateOrder($input: updateOrderInput) {
        updateOrder(input: $input) {
          order {
            id
            created_at
            updated_at
            orderNumber
            receipientName
            products {
              id
              created_at
              updated_at
              name
              description
              amount
              productCode
              quantity
            }
          }
        }
      }
    `

    const { mutate } = createTestClient(server)
    const res = await mutate({
      mutation: UPDATE_ORDER,
      variables: {
        input: {
          where: {
            id: '1',
          },
          data: {
            orderNumber: '420699',
            receipientName: 'Nastzzz',
            products: ['1'],
          },
        },
      },
    })
    expect(res).toMatchSnapshot()
  })
})
