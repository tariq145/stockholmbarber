import React from "react";
import Layout from "../components/Layout";

const services = () => {
  return (
    <Layout>
      <div id="services">
        <section>
          <h1>Våra Tjänster</h1>
          <div className="container">
            <div className="service-container">
              <div className="service">
                <div className="name">service #</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  exercitationem quia aperiam necessitatibus, eligendi
                  repudiandae, neque earum aliquam est ducimus itaque obcaecati!
                  Unde aspernatur repudiandae, modi ut ex possimus aliquid.
                  <p>
                    <strong>Tid</strong> 50min
                  </p>
                </div>
                <div className="price">350 kr</div>
              </div>
              <div className="service">
                <div className="name">service #</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  exercitationem quia aperiam necessitatibus, eligendi
                  repudiandae, neque earum aliquam est ducimus itaque obcaecati!
                  Unde aspernatur repudiandae, modi ut ex possimus aliquid.
                </div>
                <div className="price">350 kr</div>
              </div>
              <div className="service">
                <div className="name">service #</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  exercitationem quia aperiam necessitatibus, eligendi
                  repudiandae, neque earum aliquam est ducimus itaque obcaecati!
                  Unde aspernatur repudiandae, modi ut ex possimus aliquid.
                </div>
                <div className="price">350 kr</div>
              </div>
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
          padding: 100px 0;
        }

        h1 {
          color: #fff;
          position: relative;
          z-index: 3;
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
          flex-direction: column;
          justify-content: space-around;
        }

        .service {
          padding: 20px 40px;
          flex-basis: 100%;
          max-width: 800px;
          background: #f7f7f7;
          color: #000;
          text-align: left;
          margin: 0 auto;
          margin-bottom: 15px;
        }

        .name {
          font-size: 25px;
          font-weight: bold;
        }

        .price {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
};

export default services;
