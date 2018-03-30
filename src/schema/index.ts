import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
  } from 'graphql'

  import { userType } from './user';
  
  var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      // Add your own root fields here
      viewer: {
        type: userType,
        description: 'The authenticated user.',
        resolve: () => {}
      },
      users: {
        type: new GraphQLList(userType),
        description: 'Users in the system',
        resolve: () => []
      },
    }),
  })
  
  export var Schema = new GraphQLSchema({ query: queryType })