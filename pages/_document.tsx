import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="initirn dal-scale=1.0, width=device-width" />
        <meta name="title" content="Web3DevsPoland - Early Adopters NFT" />
        <meta
          name="description"
          content="Web3DevsPoland - Early Adopters NFT"
        />

        <meta
          property="og:title"
          content="Web3DevsPoland - Early Adopters NFT"
        />
        <meta property="og:site_name" content="Web3DevsPoland" />
        <meta
          property="og:description"
          content="Web3DevsPoland - Early Adopters NFT"
        />
        <meta property="og:type" content="website" />
        {/* TODO: CHANGE */}
        <meta property="og:image" content="https://www.web3devs.pl/images/thumbnail-info.png" />
        <meta property="og:url" content="https://www.web3devs.pl/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Web3DevsPoland - Early Adopters NFT"
        />
        <meta
          property="twitter:description"
          content="Web3DevsPoland - Early Adopters NFT"
        />
        {/* TODO: CHANGE */}
        <meta property="twitter:image" content="https://www.web3devs.pl/images/thumbnail-info.png" />
        <meta property="twitter:url" content="https://www.web3devs.pl/" />

        <meta name="theme-color" content="#fff" />

        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
