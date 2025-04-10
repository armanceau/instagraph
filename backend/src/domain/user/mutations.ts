import { GraphQLError } from "graphql";
import {
  comparePasswords,
  createJWT,
  hashPassword,
} from "../../modules/auth.js";
import { ModelMutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type UserMutations = WithRequired<
  ModelMutationResolvers,
  "createUser" | "signIn"
>;

const createUser: NonNullable<ModelMutationResolvers["createUser"]> = async (
  _,
  { username, password, email, ntel },
  { dataSources: { db } }
) => {
  try {
    const createdUser = await db.user.create({
      data: {
        username,
        password: await hashPassword(password),
        email,
        ntel,
      },
    });

    return {
      code: 201,
      message: "user has been created",
      success: true,
      user: createdUser,
    };
  } catch {
    return {
      code: 400,
      message: "User has not been created",
      success: false,
      user: null,
    };
  }
};

const signIn: NonNullable<ModelMutationResolvers["signIn"]> = async (
  _,
  { username, password },
  { dataSources: { db } }
) => {
  try {
    const user = await db.user.findFirstOrThrow({ where: { username } });
    const isValidPassword = await comparePasswords(password, user.password);

    if (!isValidPassword) {
      throw new GraphQLError("Something wrong happened");
    }

    const token = createJWT(user);

    return {
      code: 200,
      message: "User authenticated",
      success: true,
      token,
    };
  } catch (e) {
    return {
      code: 401,
      message: `${(e as Error)?.message}`,
      success: false,
      token: null,
    };
  }
};

export const userMutations: UserMutations = { createUser, signIn };
