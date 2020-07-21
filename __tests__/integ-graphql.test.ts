import { createTestClient } from 'apollo-server-testing'
import gql from 'graphql-tag'
import { constructTestServer } from './__utils'

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
  },
})

describe('Queries', () => {
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
})
