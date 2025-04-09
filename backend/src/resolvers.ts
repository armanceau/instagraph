import { userMutations } from "./domain/user/mutations.js";

export const resolvers = {
  Query: {
    // ...
  },
  Mutation: {
    ...userMutations,
  },
};
