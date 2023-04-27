import { graphql } from "@/gql";
import { useQuery } from "urql";

const indexPageQueryDocument = graphql(`
  query IndexPageQuery {
    posts {
      id
      title
    }
  }
`);

const Page = () => {
  const [{ data }] = useQuery({
    query: indexPageQueryDocument,
  });
  return (
    <main>
      <ul>
        {data?.posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
