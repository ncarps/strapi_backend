export default {
  product: [
    {
      id: 'po1',
      name: 'Corn beef',
      description: 'The best canned food in the world!',
      amount: '100',
      productCode: '123',
      quantity: '10',
      image: '1',
    },
    {
      id: 'po2',
      customer: 'Hotdog ',
      description: 'The best hotdog  in the world!',
      amount: '101',
      productCode: '1243',
      quantity: '105',
      image: '2',
    },
  ],
  image: [
    {
      id: '1',
      created_at: '2020-07-15T08:47:51.855Z',
      updated_at: '2020-07-15T08:47:51.855Z',
      name: '10baccd23daaea6a35dce96e2d788ecb',
      alternativeText: 'dfgd',
      caption: 'zxc',
      width: 500,
      height: 689,
      hash: '10baccd23daaea6a35dce96e2d788ecb_bf7b0f311d',
      ext: '.jpeg',
      mime: 'image/jpeg',
      size: 81.75,
      url: '/uploads/10baccd23daaea6a35dce96e2d788ecb_bf7b0f311d.jpeg',
      previewUrl: 'qwewqeq123',
      provider: 'local',
      provider_metadata: 'qwe123',
      related: [
        {
          __typename: 'Product',
        },
      ],
    },
    {
      id: '12',
      created_at: '2020-07-15T08:47:51.855123Z',
      updated_at: '2020-07-15T08:47:51.812355Z',
      name: '10baccd23daaea6a35dce96e2d788123ecb',
      alternativeText: 'df123gd',
      caption: 'zx123c',
      width: 5004,
      height: 6839,
      hash: '10baccd21233daaea6a35dce96e2d788ecb_bf7b0f311d',
      ext: '.jpeg',
      mime: 'image/jpeg',
      size: 81.753,
      url: '/uploads/10baccd23daaea6a35dce96e2d788ecb_bf7b0f311d.jpeg',
      previewUrl: 'qweq123',
      provider: 'local',
      provider_metadata: '123asd',
      related: [
        {
          __typename: 'Product',
        },
      ],
    },
  ],
  order: [
    {
      id: 'O1',
      orderNumber: 'Order1',
      Recipient: 'Jonas',
      products: 'po1',
      image: '1',
    },
    {
      id: 'O2',
      orderNumber: 'Order2',
      Recipient: 'Jonasy',
      products: 'po2',
      image: '2',
    },
  ],

  users: [
    {
      id: 'U1',
      name: 'User 1',
    },
    {
      id: 'U2',
      name: 'User 2',
    },
  ],
}
