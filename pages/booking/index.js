import { Component } from "react";

import Layout from "../../components/Layout";

export default class Booking extends Component {
  state = {
    loaded: false
  };

  render() {
    let placeHolder = !this.state.loaded ? (
      <div className="placeholder">
        <div className="nav" />
      </div>
    ) : null;
    return (
      <Layout>
        <div id="booking">
          <div className="container">
            {placeHolder}
            <iframe
              className="sb-widget-iframe frame"
              width="100%"
              border="0"
              frameBorder="0"
              onLoad={() => this.setState({ loaded: true })}
              name="widget_0.5944725343766208"
              id="widget_0.5944725343766208"
              src="https://stockholmbarber.simplybook.it/v2/#book"
            />
          </div>
        </div>
        <style jsx global>{`
          body {
            overflow-y: hidden;
          }
          #booking {
            min-height: 100.1vh;
            position: relative;
            background-image: url(/static/imgs/1.jpeg);
            background-position: bottom left;
            background-repeat: no-repeat;
            background-size: cover;
          }
          section {
            padding: 140px 0;
          }

          h1 {
            color: #fff;
          }

          .container {
            padding: 100px 0;
            margin: 0 auto;
          }

          .container iframe {
            height: calc(100vh - 100px);
          }

          .placeholder {
            height: calc(100vh - 100px);
            background: #f7f7f7;
          }
        `}</style>
      </Layout>
    );
  }
}
