import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa" data-scroll-behavior="smooth">
      <Head>
        <link rel="stylesheet" href="/css/theme.css" />
        <link rel="stylesheet" href="/css/neo-hero.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/search.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}