import { GraphQLError } from "graphql";
import { comparePasswords, createJWT, hashPassword } from "../../modules/auth.js";
const createUser = async (_, { username, password }, { dataSources: { db } }) => {
    try {
        const createdUser = await db.user.create({
            data: {
                username,
                password: await hashPassword(password)
            }
        });
        return {
            code: 201,
            message: 'user has been created',
            success: true,
            user: createdUser
        };
    }
    catch {
        return {
            code: 400,
            message: 'User has not been created',
            success: false,
            user: null,
        };
    }
};
const signIn = async (_, { username, password }, { dataSources: { db } }) => {
    try {
        const user = await db.user.findFirstOrThrow({ where: { username } });
        const isValidPassword = await comparePasswords(password, user.password);
        if (!isValidPassword) {
            throw new GraphQLError('Something wrong happened');
        }
        const token = createJWT(user);
        return {
            code: 200,
            message: 'User authenticated',
            success: true,
            token,
        };
    }
    catch (e) {
        return {
            code: 401,
            message: `${e?.message}`,
            success: false,
            token: null,
        };
    }
};
export const userMutations = { createUser, signIn };
