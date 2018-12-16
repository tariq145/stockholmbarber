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
                font-family: 'Bernard MT';
                src: url('BernardMT-Condensed.eot');
                src: url('BernardMT-Condensed.eot?#iefix') format('embedded-opentype'),
                    url('BernardMT-Condensed.woff2') format('woff2'),
                    url('BernardMT-Condensed.woff') format('woff'),
                    url('BernardMT-Condensed.ttf') format('truetype'),
                    url('BernardMT-Condensed.svg#BernardMT-Condensed') format('svg');
                font-weight: normal;
                font-style: normal;
              }
            
               body {
                margin: 0;
                font-size: 20px;
                text-align: center;
                font-family: Amiri, sans-serif;
              } 
              h1 {
                font-family: Bernard MT, Amiri, serif;  
                font-size: 55px;
                text-align: center;
                text-transform: uppercase;
                margin: 0;
                margin-bottom: 40px;         
              }

              a {
                font-family: Bernard MT ,Amiri, serif;
                font-size: 18px;
                font-weight: 200;
              }

              @media screen and (max-width: 410px) {
                h1 {
                  font-size: 40px;
                }
              }
              @media screen and (max-width: 310px ){
                h1 {
                  font-size: 20px;
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
