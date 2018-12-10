import { Component } from "react";

import NoSSR from "react-no-ssr";

import Layout from "../../components/Layout";

export default class Booking extends Component {
  state = {
    info: {},
    currentState: 1
  };

  render() {
    return (
      <Layout>
        <div id="booking">
          <div className="container">
            <iframe
              className="sb-widget-iframe"
              width="100%"
              border="0"
              scrolling="yes"
              frameBorder="0"
              name="widget_0.5944725343766208"
              id="widget_0.5944725343766208"
              src="https://stockholmbarber.simplybook.it/v2/#book"
            />
            {/*  */}
          </div>
        </div>
        <style jsx global>{`
          body {
            overflow: hidden;
          }
          #booking {
            min-height: 100.1vh;
            position: relative;
            background-image: url(/static/imgs/1.jpg);
            background-position: bottom left;
            background-repeat: no-repeat;
            background-size: cover;
          }

          h1 {
            color: #fff;
          }

          .container {
            padding: 100px 0;
            margin: 0 auto;
          }

          .container iframe {
            min-height: 800px;
          }
        `}</style>
      </Layout>
    );
  }
}
