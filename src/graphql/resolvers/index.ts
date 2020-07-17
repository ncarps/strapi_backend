import { mergeResolvers } from '@graphql-tools/merge'

import product from './product'
import orders from './order'

const resolvers: any[] = [product, orders]

export default mergeResolvers(resolvers)
