import {ApolloServer, gql} from "apollo-server";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,});

server.listen().then(({url}) => {
    console.log(`✔ 🎉server is running on ${url}`);
})