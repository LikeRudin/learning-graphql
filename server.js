import {ApolloServer, gql} from "apollo-server";


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
  
  let users = [
    {
      id: "1",
      firstName: "nico",
      lastName: "las",
    },
    {
      id: "2",
      firstName: "Elon",
      lastName: "Mask",
    },
  ];

const typeDefs = gql`
    type Mutation {
	    postTweet(text: String!, userId: ID!): Tweet!
	    deleteTweet(id: ID!): Boolean!
    }

    type User {
        id: ID!
        username: String!
        fullName: String!
    }

    type Tweet {
        id: ID!
        text: String!
        author: String!
    }

    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet!
        allUsers: [User!]!
        
    }`;

const resolvers = {
    Query: {
        allTweets() {
            return tweets;
        },
        tweet(root, { id }) {
            return tweets.find((tweet) => tweet.id === id);
        },
        allUsers() {
            console.log("allUsers called!");
            return users;
        },
    },
    Mutation: {
        postTweet(root, {text, userId}) {
            return true;
        },
    },
    User: {
        fullName({ firstName, lastName}) {
            return `${firstName} ${lastName}`;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,});

server.listen().then(({url}) => {
    console.log(`✔ 🎉server is running on ${url}`);
})