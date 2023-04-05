import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel='shortcout icon' href='/favicon.ico'/>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
