import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Amiri|Anton|Abril+Fatface"
            rel="stylesheet"
          />

          <style>{`

              @font-face {
                font-family: Bernard MT;
                src: url(/static/fonts/BERNHC.ttf):
              }
               body {
                margin: 0;
                font-size: 18px;
                text-align: center;
                font-family: Amiri, serif;
              } 
              h1 {
                font-family: Bernard MT, serif;  
                font-size: 55px;
                text-align: center;
                text-transform: uppercase;
                margin: 0;
                margin-bottom: 40px;         
              }

              a {
                font-family: Bernard MT, serif;
                font-size: 18px;
                font-weight: 200;
              }
               } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
