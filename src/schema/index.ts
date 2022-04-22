const { print: graphqlPrint } = require("graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");

export const getTypeDefs = () => {
    const typeDefs = loadFilesSync(__dirname, {
        recursive: true,
        extensions: ["graphql"],
    });
    return graphqlPrint(mergeTypeDefs(typeDefs));
};
