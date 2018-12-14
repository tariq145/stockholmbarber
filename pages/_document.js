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
          <title>Stockholm Barber Company</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Amiri|Anton|Abril+Fatface"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />

          <style>{`
              @font-face {
                font-family: Bernard MT;
                src: url(/static/fonts/BERNHC.ttf):
              }
               body {
                margin: 0;
                font-size: 20px;
                text-align: center;
                font-family: Amiri, sans-serif;
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
              @media screen and (max-width: 320px ){
                h1 {
                  font-size: 45px;
                }
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
