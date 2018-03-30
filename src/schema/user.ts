import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType
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


const userInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'User payload definition',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
  }),
});

export {
  userType, 
  userInputType
};