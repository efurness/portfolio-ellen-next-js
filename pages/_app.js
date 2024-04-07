import "../styles/globals.css";
import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  pageProps.theme = theme;
  pageProps.setTheme = setTheme;
  return (
    <QueryClientProvider client={queryClient}>
      <Layout theme={theme} setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
