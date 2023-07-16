learning graphql with apollo-server!

graphql tutorial doc: https://www.apollographql.com/docs/apollo-server/getting-started/

## 1. query Type

```
  typeDefs,
    ^

ReferenceError: typeDefs is not defined
```

we should give shape of data before run apollo-server

```js
gql` here is the location for type`;
```

### gql SDL: Schema Definition Language

it is language to define graph-ql quey type

```s
type Query {
        text: String
        hello: String
    }
```

above code has same roll with below `REST URI`

```s
GET /text
GET / hello
```

### +@

`type Query` is mendatory

without `type Query` in `typeDefs`

server doesn't work

```js
const typeDefs = gql`
  type Query {
    text: String
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  csrfPrevention: true,
});
```
