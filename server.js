import {ApolloServer, gql} from "apollo-server";


const typeDefs = gql`
    type Query {
        text: String
        hello: String
    }`;

const server = new ApolloServer({
    typeDefs,
    csrfPrevention: true,});

server.listen().then(({url}) => {
    console.log(`✔ 🎉server is running on ${url}`);
})