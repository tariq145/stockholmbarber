import Layout from "../components/Layout";
import $ from "jquery";

class Services extends React.Component {
  state = {
    services: {}
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
      method: "getEventList",
      params: [],
      id: 2
    };

    let { result: services } = await $.ajax({
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

    let sortedServices = this.sortServices(services);

    this.setState({ services: sortedServices });
  }

  sortServices = raw => {
    let ret = {
      vanlig: [],
      special: []
    };
    Object.keys(raw).map(key => {
      if (raw[key].categories[0] == "1") {
        ret["vanlig"].push(raw[key]);
      } else {
        ret["special"].push(raw[key]);
      }
    });

    return ret;
  };

  render() {
    return (
      <Layout>
        <div id="services">
          <section>
            <h1>Våra Tjänster</h1>
            <div className="container">
              <div className="service-container">
                {Object.keys(this.state.services).map(key => (
                  <div className="service-type" key={key}>
                    <h2>{key}</h2>
                    {this.state.services[key].map((service, servKey) => (
                      <div className="service" key={servKey}>
                        <div className="name">{service.name}</div>
                        <div className="description">{service.description}</div>
                        <div className="time">
                          <img src="/static/imgs/clock.png" alt="" />
                          <strong>{service.duration} min</strong>
                        </div>
                        <div className="price">
                          {parseInt(service.price)} kr
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <style jsx>{`
          #services {
            min-height: 1000px;
            position: relative;
            background-image: url(/static/imgs/6.jpg);
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
          h2 {
            margin-top: 80px;
            text-transform: uppercase;
            font-size: 30px;
            font-weight: bold;
          }

          #services:before {
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
            width: 95%;
            margin: 0 auto;
          }

          .service-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .service-type {
            flex-basis: 100%;
          }

          .service {
            padding: 30px 40px;
            width: calc(100% - 80px);
            background: #f9f9f9;
            color: #000;
            text-align: left;
            margin: 0 auto;
            margin-bottom: 25px;
            position: relative;
          }

          .service:last-of-type {
            margin-bottom: 0;
          }

          @media screen and (min-width: 950px) {
            .service-type {
              flex-basis: 45%;
            }
          }

          .name {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .description {
            color: #373d3f;
            overflow: hidden;
            position: relative;
          }

          .description:after {
            content: "";
            position: absolute;
            bottom: 25px;
            right: 0;
            height: 15px;
            background: linear-gradient(
              to bottom,
              rgba(249, 249, 249, 0) 0%,
              rgba(249, 249, 249, 1) 100%
            );
          }

          .price {
            font-weight: bold;
            font-size: 18px;
            position: absolute;
            right: 40px;
            bottom: 30px;
          }

          .time {
            margin-top: 20px;
            font-size: 18px;
            position: relative;
          }

          .time img {
            position: relative;
            top: 3px;
            width: 20px;
            margin-right: 10px;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Services;

let staticServices = {
  vanlig: [
    {
      name: "Klippning",
      description:
        "Börja med ett ordentligt samråd, och sedan använda traditionella barberingsmetoder som används för att skräddarsy kundernas önskade blick, preparerade med premiumhårprodukter, och slutar med en klassisk rakning på nacken.",
      time: "45min",
      pris: "480 kr"
    },
    {
      name: "Buzz Cut",
      description:
        "Börja med en konsultation, sedan tar vi samma längd över hela huvudet med en klippmaskin, följt av att detaljera de yttre linjerna i hårklippningen och nacken med rak rakhyvel.",
      time: "15min",
      pris: "200 kr"
    },
    {
      name: "Skäggtrim",
      description:
        "Konsultation, Trimning av skägget till önskad längd, varm handduk och definiering av skägglinjen med ett rakblad.",
      time: "30min",
      pris: "300 kr"
    },
    {
      name: "Slätrakning",
      description:
        "Konsultation, avkopplande handdukhäftning, förskärningsolja och varm skum från en exfolierande badgerhårborste. Därefter går rakbladed med kornet och tar bort eventuella stubbar. Färdig med en uppfriskande kyld handdukslindning och en Premium After-Shave lotion.",
      time: "30min",
      pris: "400 kr"
    },
    {
      name: "Klippning + Skäggtrim",
      description:
        "Börja med en ordentlig konsultation och sedan använda traditionella barberingsmetoder som används för att skräddarsy det önskade utseendet, prepareras med alla premiumhår och skäggprodukter, och slutar med en klassisk rakhyvel raka runt halsen och nackehalsen.",
      time: "1h 15min",
      pris: "700 kr"
    },
    {
      name: "Klippning + Slätrakning",
      description:
        "Det här är vår take på den klassiska frisyren och affärsmanens look.",
      time: "1h 30min",
      pris: "800 kr"
    }
  ],
  special: [
    {
      name: "Vaxning Öron-Kind",
      description: "En behandling som touchar upp och framhäver dig",
      time: "15min",
      pris: "120 kr"
    },
    {
      name: "Trådning",
      description: "Trådning.",
      time: "15min",
      pris: "120 kr"
    },
    {
      name: "Styling",
      description: "Tar fram det bästa ur din frisyr",
      time: "15min",
      pris: "120 kr"
    }
  ]
};
