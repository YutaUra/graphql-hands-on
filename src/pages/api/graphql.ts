import { createYoga, createSchema } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

type NextServerContext = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const schema = createSchema<NextServerContext>({
  typeDefs: loadSchemaSync(join(process.cwd(), "schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: {
    Query: {
      posts: () => [
        { id: "post_1", title: "Node.js" },
        { id: "post_2", title: "React vs Vue" },
      ],
    },
  },
});

export default createYoga<NextServerContext>({
  schema,
  graphqlEndpoint: "/api/graphql",
});
