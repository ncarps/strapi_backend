import { createTestClient } from 'apollo-server-testing'
import gql from 'graphql-tag'
import { constructTestServer } from './__utils'
import { createProduct } from '../src/helper'

const { server }: any = constructTestServer({
  context: {
    //Product
    createProduct: jest.fn(() => async (product) => {
      console.log('createProducaegr', product)
      return { data: { id: '1', ...product } }
    }),
    updateProduct: jest.fn(() => async (product) => {
      return { updateProduct: { id: '1' } }
    }),
    deleteProduct: jest.fn(() => async (product) => {
      return { deleteProduct: { id: '1' } }
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
            Image {
              id
              created_at
              updated_at
              name
              caption
              alternativeText
              width
              height
              hash
              ext
              mime
              size
              url
              provider
              previewUrl
            }
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
        id: '1',
        name: 'HOTDOG',
        description: 'Hotdog numbawan',
        amount: '123',
        productCode: '420',
        quantity: '100',
      },
    })
    expect(res).toMatchSnapshot()
  })

  // it('delete a product', async () => {
  //   const DELETE_PRODUCT = gql`
  //     mutation a($input: deleteProductInput) {
  //       deleteProduct(input: $input) {
  //         product {
  //           id
  //           created_at
  //           updated_at
  //           name
  //           description
  //           amount
  //           productCode
  //           quantity
  //           Image {
  //             id
  //             created_at
  //             updated_at
  //             name
  //             caption
  //             alternativeText
  //             width
  //             height
  //             hash
  //             ext
  //             mime
  //             size
  //             url
  //             provider
  //             previewUrl
  //           }
  //         }
  //       }
  //     }
  //   `

  //   const { mutate } = createTestClient(server)
  //   const res = await mutate({
  //     mutation: DELETE_PRODUCT,
  //     variables: {
  //       input: {
  //         where: {
  //           id: '1',
  //         },
  //       },
  //     },
  //   })

  //   expect(res).toMatchSnapshot()
  // })
})
