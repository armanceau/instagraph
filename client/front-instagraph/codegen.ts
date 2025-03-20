import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:4000/',
  documents: ['src/queries/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config