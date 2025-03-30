import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from '@prisma/client';

// const usersLocalTest = [
//     {id: "1", name: "gyom", email: "guillaume1.leformal@gmail.com", age: 22, numberPublication: 5},
//     {id: "2", name: "gus", email: "gus.leformal@gmail.com", age: 22, numberPublication: 6},
//     {id: "3", name: "rayane", email: "rayane.abcd@gmail.com", age: 6, numberPublication: 0},
//     {id: "4", name: "adrien", email: "adrien.abcd@gmail.com", age: 22, numberPublication: 10}
// ]

const typeDefs = `
    type Query {
        getUsers: [User]
        getUserById(id: ID!): User
    }

    type Mutation {
        createUserMut(name: String!, email: String!, age: Int!, numberPublication: Int): User
    }

    type User {
        id: ID
        name: String
        email: String
        age: Int
        numberPublication: Int,
    }
    type Publication {
        id: ID
        title: String
        description: String
        author: String
        image: String
        comment: String
        like: Int
    }
`;
const prisma = new PrismaClient();

const resolvers = {
    //how the query respond with our typeDefs
    Query: {
        getUsers: () => {
            return prisma.user.findMany()
        }, 

        getUserById: (_, args) => {
            const id = args.id
            return prisma.user.findUnique({
                where: {id}
            })
        }
    },
    Mutation: {
        //CRUD methods for the API
        createUserMut: async (_, args) => {
            const {name, email, age, numberPublication} = args
            const newUser = await prisma.user.create({
               data: {
                    name,
                    email,
                    age, 
                    numberPublication,
               }
            })
            return newUser
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
 
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
   
  console.log(`🚀  Server ready at: ${url}`);