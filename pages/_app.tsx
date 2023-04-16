import "../styles/globals.css";
import "../styles/code.css";

import type { AppProps } from "next/app";
import Layout from "@components/layout";
import { ThemeProvider } from "contexts/themeContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
