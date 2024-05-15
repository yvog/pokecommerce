import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  debug: true,
  schema: process.env.NEXT_PUBLIC_POKE_API_URL ?? '',
  documents: 'src/**/*.graphql',
  generates: {
    'gql/graphql.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      plugins: ['typescript-operations', 'typed-document-node'],
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '../gql/graphql.ts',
      },
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
