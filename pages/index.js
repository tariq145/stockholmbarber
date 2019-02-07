import Layout from "../components/Layout";

import Link from "next/link";

const App = () => (
  <Layout>
    <div id="index">
      <header id="index-header">
        <img src="/static/imgs/logo-white.png" alt="" />
      </header>
      <section id="index-about">
        <img src="/static/imgs/knife.png" alt="" />
        <div className="container">
          <h1>Stockholm Barber Co.</h1>

          <div className="text">
            <p>
              För oss är en frisyr något som kännetecknar dig, en signatur. Våra
              barberare är erfarna och ser till att du lämnar oss med ditt
              kännetecken och en längtan tillbaka.
            </p>
            <p>
              <strong>Kom förbi och få din signatur i hjärtat av söder.</strong>
            </p>
          </div>

          <Link href="https://stockholmbarber.simplybook.it/v2/#book">
            <a>Boka Nu</a>
          </Link>
        </div>
      </section>
      {/* <section id="index-barbers">
        <div className="container">
          <h1>Barberare</h1>  
          <div className="barbers">
            <div />
            <div />
            <div />
          </div>
        </div>
      </section> */}
      <section id="index-gallery">
        <div className="container">
          <h1>Gallery</h1>
          <div className="tiles">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>
      <section id="index-contact">
        <div className="container">
          <h1>kontakta oss</h1>

          <div className="phone">(08)-428 611 32</div>
          <div className="text">
            <p>Tveka inte att höra av er till oss angående frågor.</p>
            <p>
              Stockholm Barber company är en plats för dig att koppla av och ta
              de lungt, ett andra hem.
            </p>
            <p>
              <strong>
                Kom förbi:
                <br />
                <span style={{ fontSize: "25px" }}>
                  Hornsgatan 97, 117 26 Stockholm
                </span>
              </strong>
            </p>
            <p>
              <strong>Öppet tider:</strong>
              <br />
              <i>Mon-Lör : 11-20</i>
            </p>
            <p>
              <i>Sön : Stängt</i>
            </p>
            <p>
              {" "}
              <i>
                Lönings Helg (Fre&Lördag): 11 - Till sista kund droppar in.{" "}
                <b>(Event)</b>
              </i>
            </p>
          </div>

          <div className="social">
            <a href="https://www.instagram.com/stockholmbarber/">
              <img src="/static/imgs/ig.png" alt="" />
            </a>
            <a href="https://www.facebook.com/stockholmbarber/">
              <img src="/static/imgs/fb.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        #index {
        }

        #index-header {
          position: relative;
          width: 100%;
          height: 100vh;
          background-image: url(/static/imgs/10.jpeg);
          background-position: top right;
          background-repeat: no-repeat;
          background-size: cover;
        }

        #index-header img {
          position: absolute;
          width: 300px;
          left: 50%;
          top: calc(50% + 20px);
          transform: translate(-50%, -50%);
        }

        @media screen and (max-width: 850px) {
          #index-header img {
            width: 200px;
          }

          @media screen and (max-width: 450px) {
            #index-header img {
              width: 150px;
            }
          }
        }

        section {
          padding: 100px 0;
        }

        button {
          border: none;
          padding: 20px 40px;
          font-size: 20px;
          background: #000;
          color: #fff;
          cursor: pointer;
          margin-top: 50px;
        }

        .container {
          width: 80%;
          margin: 0 auto;
          position: relative;
        }

        .banner {
          font-size: 65px;
          font-family: Anton, sans-serif;
          color: #fff;
          position: absolute;
          z-index: 0;
          left: 50%;
          top: calc(50% + 30px);
          transform: translate(-50%, -50%);
        }

        .logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 130px;
        }

        .logo img {
          width: 800px;
          height: auto;
        }

        .text {
          max-width: 550px;
          margin: 0 auto;
        }

        .img {
          width: 200px;
          height: 200px;
          background: red;
        }

        .phone {
          font-size: 45px;
        }
        #index-about a {
          padding: 20px 40px;
          text-decoration: none;
          color: white;
          background: black;
        }
        #index-about img {
          position: absolute;
          left: -100px;
          transform: rotate(90deg);
          width: 600px;
        }

        @media screen and (max-width: 1250px) {
          #index-about img {
            display: none;
          }
        }

        #index-gallery {
          position: relative;
          background-image: url(/static/imgs/1.jpeg);
          background-position: bottom left;
          background-repeat: no-repeat;
          background-size: cover;
        }

        #index-gallery:before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2;
        }

        #index-gallery h1 {
          color: #fff;
          position: relative;
          z-index: 3;
        }

        .tiles {
          height: 1200px;
          display: grid;
          grid-template-columns: auto auto;
          grid-template-row: auto auto auto auto;
          grid-gap: 15px;
          padding: 10px;
          position: relative;
          z-index: 3;
        }

        .tiles div {
          background-size: cover;
          background-repeat: no-repeat;
        }

        .tiles div:nth-child(1) {
          background-image: url("/static/imgs/5.jpeg");
          grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 1;
          grid-row-end: 3;
        }

        .tiles div:nth-child(2) {
          background-image: url("/static/imgs/9.jpeg");
          grid-column-start: 2;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
        }

        .tiles div:nth-child(3) {
          background-image: url("/static/imgs/2.jpeg");
          grid-column-start: 2;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 2;
        }

        .tiles div:nth-child(4) {
          background-image: url("/static/imgs/4.jpeg");
          background-position: bottom;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 3;
        }

        @media screen and (max-width: 768px) {
          #index-gallery .container {
            width: 98%;
          }
          .tiles div:nth-child(1) {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 1;
          }

          .tiles div:nth-child(2) {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 2;
            grid-row-end: 2;
          }

          .tiles div:nth-child(3) {
            background-image: url("/static/imgs/2.jpeg");
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 3;
            grid-row-end: 3;
          }

          .tiles div:nth-child(4) {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 4;
            grid-row-end: 4;
          }
        }

        #index-contact {
          position: relative;
        }

        .social {
          margin-top: 40px;
        }

        .social img {
          width: 40px;
          margin: 0 10px;
        }
      `}</style>
    </div>
  </Layout>
);

export default App;
