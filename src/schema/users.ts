import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql'
  
  export const userType = new GraphQLObjectType({
    name: 'User',
    description: 'A user in the system',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'A unique id of a user'
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The name of the user'
      },
    }),
  })