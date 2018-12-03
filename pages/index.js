import Layout from "../components/Layout";

import Link from "next/link";

const App = () => (
  <Layout>
    <div id="index">
      <section id="index-header" />
      <section id="index-about">
        <div className="container">
          <h1>Stockholm Barber Company</h1>

          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ab iusto repudiandae? Cupiditate reprehenderit
              consequuntur iure incidunt quis assumenda omnis repellat? Incidunt
              commodi velit maxime obcaecati ipsa inventore laboriosam nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              error provident, sint nemo molestias dolorum doloremque nihil
              temporibus? Placeat, at!
            </p>
          </div>

          <Link href="booking">
            <button>Boka nu</button>
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
        <h1>kontakta oss</h1>
        <div className="phone">(08)-12345678</div>
        <div className="text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            accusamus?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nisi
            dolorum expedita asperiores alias sint, aspernatur harum maxime
            libero et.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            cumque, consectetur temporibus molestiae provident ducimus.
          </p>
          <strong>Öppet tider:</strong>
          <p>
            <i>Mon-Fre : 11-18</i>
          </p>
          <p>
            <i>Sat-Sun : 11-16</i>
          </p>
        </div>
      </section>

      <style jsx>{`
        #index {
        }

        #index-header {
          position: relative;
          width: 100%;
          height: calc(100vh - 160px);
          background-image: url(/static/imgs/10.jpg);
          background-position: top right;
          background-repeat: no-repeat;
          background-size: cover;
        }

        section {
          min-height: 500px;
          padding: 80px 0;
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
          padding: 40px 0;
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

        #index-gallery {
          position: relative;
          background-image: url(/static/imgs/index-header.jpg);
          background-position: center;
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
          background-image: url("/static/imgs/5.jpg");
          grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 1;
          grid-row-end: 3;
        }

        .tiles div:nth-child(2) {
          background-image: url("/static/imgs/9.jpg");
          grid-column-start: 2;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
        }

        .tiles div:nth-child(3) {
          background-image: url("/static/imgs/7.jpg");
          grid-column-start: 2;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 2;
        }

        .tiles div:nth-child(4) {
          background-image: url("/static/imgs/4.jpg");
          background-position: bottom;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 3;
        }
      `}</style>
    </div>
  </Layout>
);

export default App;
