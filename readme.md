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

## 2 Scalar and Root type

if server is succefully running

then click the `url` on console and `query your server`

to open page to test query

test query

```s
query Query{
  text
  hello
}
```

<br>

response

```s
{
  "data": {
    "text": null,
    "hello": null
  }
}
```

### two works for using graph ql

1.  explain shape of data - define data type

2.  make code to create an actual data

<br>

- scalar type

        built-in data type in apollo-server

        String, Int, Boolean ID

- non-scalar type

        : custom type

- root type

### example query types

```s
type User {
    id: ID
    username: String
    }

type Tweet {
    id: ID
    text: String
    author: String
    }

type Query {
allTweets: [Tweet]
tweet(id: ID): Tweet
}
```

### parameter

`Get /tweet/:id` is same with `tweet(id: ID)`

### list of data

use `[]` : allTweets: [Tweet]

## 3 mutation type

`type Mutation`
this is for post, put, delete in rest API action

```s
type Mutation {
	postTweet(text: String, userId: ID): Tweet
	deleteTweet(id: ID): Boolean
}
```

### ! give meaningless data

`!` gives non-null junk data to user

`Tweet!`

## 4. Non nullable Fields

every fields can be null basically

we can give `non-nullable property` by write `!` behind of the fileds

this is the way to tell api

what is necessary and not
