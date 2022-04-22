import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

import { join } from "path";

const schemasArray = loadFilesSync(join(__dirname, "resolvers"), {
    extensions: ["ts", "js"],
    recursive: true,
});

export const allResolvers = mergeResolvers(schemasArray);
