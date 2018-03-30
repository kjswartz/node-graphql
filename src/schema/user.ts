import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType
  } from 'graphql'
    
 export const userType = new GraphQLObjectType({
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