// import app from './App'

// const port = process.env.PORT || 3000

// app.listen(port, (err) => {
//   if (err) {
//     return console.log(err)
//   }

//   return console.log(`server is listening on ${port}`)
// })


import * as http from 'http'
import * as express from 'express'
import * as graphQLHTTP from 'express-graphql'

import { Schema } from './schema'

const app = express();
const { PORT } = process.env;

app.use("/graphql", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/graphql', graphQLHTTP({
    schema: Schema,
    pretty: process.env.NODE_ENV === 'production',
    graphiql: process.env.NODE_ENV !== 'production'
}));

const server = http.createServer(app)
server.listen(PORT, () => console.log('Server listening on port', PORT))