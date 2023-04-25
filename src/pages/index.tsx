import { useQuery } from "urql";

const Page = () => {
  const [{ data }] = useQuery({
    query: /* GraphQL */ `
      query {
        posts {
          id
          title
        }
      }
    `,
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
