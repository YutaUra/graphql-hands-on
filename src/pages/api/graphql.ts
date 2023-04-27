import { createYoga, createSchema } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";
import { Resolvers } from "@/resolvers-types";

export const config = {
  api: {
    bodyParser: false,
  },
};

type NextServerContext = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const resolvers: Resolvers = {
  Query: {
    posts: () => [
      { id: "post_1", title: "Node.js" },
      { id: "post_2", title: "React vs Vue" },
    ],
  },
};

const schema = createSchema<NextServerContext>({
  typeDefs: loadSchemaSync(join(process.cwd(), "schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers,
});

export default createYoga<NextServerContext>({
  schema,
  graphqlEndpoint: "/api/graphql",
});
