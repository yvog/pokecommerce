import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    debug: true,
    schema: [
        // {
        //     [process.env.HYGRAPH_API_URL]: {
        //         headers: {
        //             Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
        //         },
        //     },
        // },
    ],
    documents: [
        'src/**/*.graphql',
        '!src/gql/**/*',
    ],
    generates: {
        // './src/gql/': {
        //     preset: 'client',
        // }
        './src/**/*.ts': {
            preset: 'near-operation-file',
            plugins: ['typescript-operations'],
            presetConfig: {
                baseTypesPath: 'types.ts'
            },
        },
    }
}

export default config