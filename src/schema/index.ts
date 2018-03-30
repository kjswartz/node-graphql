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
  
  const userType = new GraphQLObjectType({
    name: 'User',
    description: 'A user in the system',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'A unique id for a user',
        resolve: (item) => item.id
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The email address of the user'
      }
    })
  })
  
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