import type { AppProps } from "next/app";
import {
  Client,
  cacheExchange,
  fetchExchange,
  Provider as UrqlProvider,
} from "urql";

const client = new Client({
  url: "/api/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider value={client}>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}
