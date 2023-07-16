import {ApolloServer, gql} from "apollo-server";


const typeDefs = gql`
    type Mutation {
	    postTweet(text: String!, userId: ID!): Tweet!
	    deleteTweet(id: ID!): Boolean!
    }

    type User {
        id: ID!
        username: String!
    }

    type Tweet {
        id: ID!
        text: String!
        author: String!
    }

    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet!
    }`;

const server = new ApolloServer({
    typeDefs,
    csrfPrevention: true,});

server.listen().then(({url}) => {
    console.log(`✔ 🎉server is running on ${url}`);
})