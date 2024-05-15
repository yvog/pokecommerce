import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  debug: true,
  schema: 'https://beta.pokeapi.co/graphql/v1beta',
  documents: ['src/**/*.graphql', '!src/gql/**/*'],
  generates: {
    'gql/graphql.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      plugins: ['typescript-operations'],
      presetConfig: {
        extension: '.graphql.ts',
        baseTypesPath: '../gql/graphql.ts',
      },
    },
  },
};

export default config;
