var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

//GraphQL schema - is used to describe the api type system
//what operations are available to query
//Query is validated against its schema

var schema = buildSchema(`
    type Query {
        message: String
    }
`)

//Defining resolver
var root = {
    message: () => 'Hello GraphQl'
}

//Create an express server and graphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL server is now running on localhost:4000/graphql'));

