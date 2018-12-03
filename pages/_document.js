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
            href="https://fonts.googleapis.com/css?family=Amiri|Anton"
            rel="stylesheet"
          />

          <style>{`
               body {
                margin: 0;
                font-size: 18px;
                text-align: center;
                font-family: Amiri, serif;
              } 
              h1 {
                font-family: Anton, sans-serif;  
                font-size: 55px;
                text-align: center;
                text-transform: uppercase;
                margin: 0;
                margin-bottom: 20px;         
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
