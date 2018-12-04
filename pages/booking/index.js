import { Component } from "react";

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
            {this.state.currentState === 1 ? (
              <ChooseBarber addBarber={this.addBarber} />
            ) : null}

            {this.state.currentState === 2 ? (
              <ChooseService addService={this.addService} />
            ) : null}

            {this.state.currentState === 3 ? (
              <Confiramtion info={this.state.info} />
            ) : null}
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
