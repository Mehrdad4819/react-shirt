import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='rtl' lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/iAWriterQuattroV-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/iAWriterQuattroV-Italics.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
