import Layout from "../components/Layout";
import $ from "jquery";

import React, { Component } from "react";

export default class barbers extends Component {
  state = {
    users: {}
  };

  async componentDidMount() {
    let tokenRequest = {
      jsonrpc: "2.0",
      method: "getToken",
      params: [
        "stockholmbarber",
        "d7502608fde2546f82521763aee405e88d6b8035fa7367224022dfbf4308070c"
      ],
      id: 2
    };

    let { result: token } = await $.ajax({
      url: "https://user-api.simplybook.me/login",
      contentType: "application/json",
      type: "POST",
      processData: false,
      dataType: "json",
      cache: false,
      data: JSON.stringify(tokenRequest),
      headers: {},
      async: true
    });

    let userRequest = {
      jsonrpc: "2.0",
      method: "getUnitList",
      params: [],
      id: 2
    };

    let { result: users } = await $.ajax({
      url: "https://user-api.simplybook.me/",
      contentType: "application/json",
      type: "POST",
      processData: false,
      dataType: "json",
      cache: false,
      data: JSON.stringify(userRequest),
      headers: {
        "X-Company-Login": "stockholmbarber",
        "X-Token": token
      },
      async: true
    });

    this.setState({ users });
  }

  render() {
    return (
      <Layout>
        <div id="barbers">
          <section>
            <h1>Våra barberare</h1>
            <div className="container">
              <div className="barber-container">
                {Object.keys(this.state.users).map(key => (
                  <div className="barber" key={key}>
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(https://stockholmbarber.simplybook.it/${
                          this.state.users[key].picture_path
                        }`
                      }}
                    />
                    <div className="name">{this.state.users[key].name}</div>
                    <div className="description">
                      {this.state.users[key].description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <style jsx>{`
          #barbers {
            min-height: 1000px;
            position: relative;
            background-image: url(/static/imgs/index-header.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          section {
            padding: 140px 0;
          }

          h1 {
            color: #fff;
            position: relative;
            z-index: 3;
          }

          #barbers:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 2;
          }

          .container {
            position: relative;
            z-index: 3;
            color: #fff;
            width: 80%;
            margin: 0 auto;
          }

          .barber-container {
            padding-top: 40px;
            display: flex;
            justify-content: space-around;
          }

          .barber {
            flex-basis: 100%;
            max-width: 450px;
          }

          @media screen and (max-width: 1050px) {
            .barber-container {
              flex-direction: column;
            }
            .barber {
              margin: 0 auto;
              margin-top: 70px;
            }

            .barber:first-of-type {
              margin-top: 0;
            }
          }

          .img {
            background-position: top;
            background-repeat: no-repeat;
            background-size: cover;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            margin: 0 auto;
            margin-bottom: 20px;
          }

          .name {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .description {
            max-width: 400px;
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    );
  }
}
