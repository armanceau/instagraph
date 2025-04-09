import { GraphQLError } from "graphql";
import { comparePasswords, createJWT, hashPassword } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";
import { PrismaClient } from "@prisma/client";

type UserMutations = WithRequired<MutationResolvers, 'createUserMut' | 'signin' | 'signup'>
const prisma = new PrismaClient();

const createUserMut: MutationResolvers['createUserMut'] = async (_, { name, email, age, password }) => {
  return await prisma.user.create({
    data: {
      name,
      email,
      age,
      password: await hashPassword(password),
    },
  });
};

const signin: NonNullable<MutationResolvers['signin']> = async (_, {email, password}) => {
  try {
    const user = await prisma.user.findFirstOrThrow({where: {email}})
    const isValidPassword = await comparePasswords(password, user.password)
  
    if (!isValidPassword) {
      throw new GraphQLError('Something wrong happened')
    }
  
    const token = createJWT(user)
  
    return {
      code: 200,
      message: 'User authenticated',
      success: true,
      token,
    }
  } catch (e) {
    return {
      code: 401,
      message: `${(e as Error)?.message}`,
      success: false,
      token: null,
    }
  }
}

const signup: NonNullable<MutationResolvers['signup']> = async (_, {age, email, name, password}) => {
  try {
    const user = await prisma.user.findFirstOrThrow({where: {email}})
    const token = createJWT(user)
    await prisma.user.create({
      data: {
        name,
        email,
        age,
        password: await hashPassword(password),
      },
    });

    return {
      code: 200,
      message: 'User authenticated',
      success: true,
      token,
    }
  } catch (e) {
    return {
      code: 401,
      message: `${(e as Error)?.message}`,
      success: false,
      token: null,
    }
  }
}

export const userMutations: UserMutations = {createUserMut, signin, signup}