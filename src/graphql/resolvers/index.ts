import { mergeResolvers } from '@graphql-tools/merge'

import product from './Product'

const resolvers: any[] = [product]

export default mergeResolvers(resolvers)
