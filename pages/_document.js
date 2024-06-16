import { Html, Head, Main, NextScript } from "next/document";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio-ellen-next-js" : "";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
