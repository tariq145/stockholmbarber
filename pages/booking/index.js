import { Component } from "react";

import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";

export default class Booking extends Component {
  state = {
    info: {},
    currentState: 1
  };

  nextState = () => {
    let nextState = this.state.currentState + 1;
    console.log(this.state.currentState);
    this.setState({ currentState: nextState });
  };

  prevState = () => {
    let prevState = this.state.currentState - 1;
    this.setState({ currentState: prevState });
  };

  addBarber = barber => {
    this.setState(prevState => {
      let newState = prevState;
      newState.info = { ...prevState.info, barber };
      return newState;
    });
    this.nextState();
  };

  addService = service => {
    this.setState(prevState => {
      let newState = prevState;
      newState.info = { ...prevState.info, service };
      return newState;
    });
    this.nextState();
  };

  render() {
    return (
      <Layout>
        <div id="booking">
          <div className="container">
            {/* {this.state.currentState === 1 ? (
              <ChooseBarber addBarber={this.addBarber} />
            ) : null}

            {this.state.currentState === 2 ? (
              <ChooseService addService={this.addService} />
            ) : null}

            {this.state.currentState === 3 ? (
              <Confiramtion info={this.state.info} />
            ) : null} */}

            <script src="//simplybook.it/v2/widget/widget.js" />
            <script src="/static/widget.js" />
            <iframe
              className="sb-widget-iframe"
              width="100%"
              border="0"
              frameBorder="0"
              name="widget_0.5944725343766208"
              id="widget_0.5944725343766208"
              src="https://stockholmbarber.simplybook.it/v2/?widget-type=iframe&theme=emeri&theme=emeri&timeline=modern&datepicker=inline_datepicker"
            />
          </div>
        </div>
        <style jsx>{`
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
            max-width: 1200px;
            margin: 0 auto;
          }

          .container iframe {
            height: 800px;
          }
        `}</style>
      </Layout>
    );
  }
}

let dummyBarbers = [
  {
    id: "1",
    name: "tariq",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
  },
  {
    id: "2",
    name: "Safana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
  }
];

const ChooseBarber = props => (
  <div>
    <h1>Välj Barberare</h1>
    <div className="barber-container">
      {dummyBarbers.map((barber, key) => (
        <div className="barber" key={key}>
          <div className="img" />
          <div className="content">
            <p className="name">
              <strong>{barber.name}</strong>
            </p>
            <p className="description">{barber.description}</p>
          </div>
          <button
            onClick={e => {
              props.addBarber(barber.id);
            }}
          >
            Välj
          </button>
        </div>
      ))}
    </div>
    <style jsx>{`
    h1 {
        color: #fff;
    }

      .barber {
        display: flex;
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6f6;
        margin-bottom: 20px;
        padding: 50px 50px;
        flex-basis 80%;
        position: relative;
      }
      .barber button {
          position:absolute;
          right: 0;
          bottom: 0;
          border: none;
          padding: 10px 30px;
          margin: 0 20px 20px 0;
          font-size: 20px;
          background: black;
          color: #fff;
      }
      .content {
          text-align: left;
          padding-left: 30px;
      }

      .img {
        background-image: url(/static/imgs/barber1.jpg);
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        min-width: 150px !important;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: auto 0;
        margin-bottom: 15px;
      }
    `}</style>
  </div>
);

let dummyService = [
  {
    id: "1",
    name: "Full Cut",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
  },
  {
    id: "2",
    name: "Half Cut",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum quisquam? Quasi debitis dolores rerum quibusdam aliquid omnis blanditiis."
  }
];

const ChooseService = props => (
  <div>
    <h1>Välj Barberare</h1>
    <div className="service-container">
      {dummyService.map((service, key) => (
        <div className="barber" key={key}>
          <div className="img" />
          <div className="content">
            <p className="name">
              <strong>{service.name}</strong>
            </p>
            <p className="description">{service.description}</p>
          </div>
          <button
            onClick={e => {
              props.addService(service.id);
            }}
          >
            Välj
          </button>
        </div>
      ))}
    </div>
    <style jsx>{`
  h1 {
      color: #fff;
  }

    .barber {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
      background: #f6f6f6;
      margin-bottom: 20px;
      padding: 50px 50px;
      flex-basis 80%;
      position: relative;
    }
    .barber button {
        position:absolute;
        right: 0;
        bottom: 0;
        border: none;
        padding: 10px 30px;
        margin: 0 20px 20px 0;
        font-size: 20px;
        background: black;
        color: #fff;
    }
    .content {
        text-align: left;
        padding-left: 30px;
    }

    .img {
      background-image: url(/static/imgs/barber1.jpg);
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      min-width: 150px !important;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: auto 0;
      margin-bottom: 15px;
    }
  `}</style>
  </div>
);

const Confiramtion = props => (
  <div id="confirm">
    <div className="container">
      <h1>Booknings Bekräftelse</h1>
      <div className="confirm-container">
        {console.log(props)}
        <p>
          <strong>Barberare</strong> {props.info.barber}
        </p>
        <p>
          <strong>tid</strong> Random tid
        </p>
        <p>
          <strong>Plats</strong> Hornsgatan 97
        </p>
        <p>
          <strong>Pris</strong> 355kr
        </p>
      </div>
    </div>
    <style jsx>{`
        .container {
            max-width: 800px;
            width: 80%;
            margin: 0 auto;
            padding: 30px;
            background: #f7f7f7;
        }
        .confirm-container {
            padding
        }
    `}</style>
  </div>
);

const ChooseDate = () => (
  <div id="date">
    <h1>Välj Datum</h1>
    <div className="container">
      <div className="date-header">This is the date container</div>
      <div className="date-table-container">
        <table>
          <tr>
            <th>Mån</th>
            <th>Tis</th>
            <th>Ons</th>
            <th>Tor</th>
            <th>Fre</th>
            <th>Lör</th>
            <th>Sön</th>
          </tr>
          <tbody>
            <tr>
              <td>
                <div className="day-times">
                  <TableCol />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <style jsx>{`
      h1 {
        color: #fff;
      }

      .container {
        width: 80%;
        max-width: 800px;
        background: #f7f7f7;
        margin: 0 auto;
      }

      thead {
        display: flex;
        justify-content: space-around;
      }

      .time {
        padding: 20px;
      }
    `}</style>
  </div>
);

const double = number => {
  if (number < 9) {
    return "0" + number;
  }

  return number;
};

const TableCol = () => {
  let col = [];
  let hour = 11;
  let minute = 5;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 12; j++) {
      col.push(
        <div
          className="time"
          name={hour + i + ":" + double(minute * j)}
          key={hour + i + ":" + double(minute * j)}
          id={hour + i + ":" + double(minute * j)}
          onClick={e => {
            console.log(e.target.id);
          }}
        >
          {hour + i}:{double(minute * j)}
        </div>
      );
    }
  }

  return (
    <div className="day-time-container">
      {col}
      <style jsx global>{`
        .day-time-container {
        }

        .time {
          cursor: pointer;
          padding: 5px 15px;
          border-radius: 1px;
          margin: 5px 10px;
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
        }

        .time:hover {
          background: green;
        }
      `}</style>
    </div>
  );
};

const TableData = () => {
  let table = [];
  for (let i = 0; i < 8; i++) {
    table.push(
      <td>
        <TableRow />
      </td>
    );
  }

  return table;
};

/*
  TODO:
    date: {
      year: --,
      month: --,
      date: --,
      startTime:{
        hour: 11,
        min:00;
      },
      endTime: {
        hour: 12,
        min: 00
      },
    }

*/
