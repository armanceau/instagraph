import { CodegenConfig } from "@graphql-codegen/cli";
import { PrismaClient } from "@prisma/client";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        typesPrefix: "Model",
        contextType: './context#DataSourceContext',
        mappers: {
          Article: '@prisma/client#Article',
          Commentaire: '@prisma/client#Commentaire',       
        }
      }
    },
  },
};

export default config;
