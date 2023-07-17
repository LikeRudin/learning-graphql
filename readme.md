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

## 2. Scalar and Root type

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

## 3. mutation type

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

## 5. recap

if i define mutation queries in `type Query`

it doesn't matter. there is no error at all.

but the meaning of use `type Mutation` is telling

exact type of queries

## 6,7 8. Query, Mutation, Type Resolvers

resolver is a function to return actual data

it access to db and return data

Resolver functions are passed four arguments:

parent, args, contextValue, and info (in that order).

- parent: root or source

doc: https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments

### handling non-defined schema error

`Error: Query.allUsers defined in resolvers, but not in schema`

resolver's query and mutation must have pre-defined schema in `typeDefs`

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});
```

### querying undefined property

queried undefine property

query

```s
query($tweetId: ID!) {
  tweet(id: $tweetId) {
    author // no author in tweet array.
  }
}
```

variable

```s
{
  "tweetId": "1"
}
```

tweets array: no author property

```js
let tweets = [
  {
    id: "1",
    text: "first one!",
  },
  {
    id: "2",
    text: "second one",
  },
];
```

Error message

```
errors": [
    {
      "message": "Cannot return null for non-nullable field Tweet.author.",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": [
        "tweet",
        "author"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "stacktrace": [
            "Error: Cannot return null for non-nullable field Tweet.author."
```

define author or submit pre-defined property like `text`

```
query {
  tweet(id: "1") {
    text
  }
}
```

## 10 documentation

use """ """ to insert comment in javascript code

we can see the DOCs in graphql page

in this project: `http://localhost:4000/`
