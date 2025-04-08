import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const typeDefs = `
    type Query {
        getUsers: [User]
        getUserById(id: ID!): User
    }

    type Mutation {
        createUserMut(name: String!, email: String!, age: Int!, password: String!, numberPublication: Int, listPublications: [Publication!]): User
        signup(name: String!, email: String!, age: Int!, password: String!): AuthPayload
        signin(email: String!, password: String!): AuthPayload
    }

    type AuthPayload {
        token: String
        user: User
    }

    type User {
        id: ID
        name: String?
        email: String?
        age: Int?
        password: String?
        numberPublication: Int
        listPublications: [Publication!]!
    }
    type Publication {
        id: ID
        title: String?
        description: String?
        authorId: String!
        author: User?
        image: String?
        comment: String?
        like: Int
    }
`;
//TODO: changer type Publication
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
            const {name, email, age, password, numberPublication, listPublications} = args
            const hashes = password ? await bcrypt.hash(password, 10) : null
            const newUser = await prisma.user.create({
               data: {
                    name,
                    email,
                    age, 
                    password: hashes,
                    numberPublication,
               }
            })
            return newUser
        },

        signup: async (__, args) => {
            const password = await bcrypt.hash(args.password, 10)
            const user = await prisma.user.create({
                data: {...args, password}
            })
            const token = jwt.sign({ userId: user.id }, "secret", { expiresIn: '1d' })

            return {
                token, 
                user
            }
        },

        signin: async (__, args) => {
            const user = await prisma.user.findUnique({ where: { email: args.email} })
            if (!user) {
                throw new Error('user not found')
            }

            const valid = await bcrypt.compare(args.password, "user.password")
            if (!valid) {
                throw new Error('Invalid Password')
            }
            const token = jwt.sign({ userId: user.id }, "secret", { expiresIn: '1d' })
            return {
                token, 
                user
            }
         
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
   
  console.log(`🚀  Apollo Server ready at: ${url}`);    