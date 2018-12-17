import Layout from "../components/Layout";

const barbers = () => {
  return (
    <Layout>
      <div id="barbers">
        <section>
          <h1>Våra barberare</h1>
          <div className="container">
            <div className="barber-container">
              <div className="barber">
                <div className="img" />
                <div className="name">Ghani Amor Chaoui</div>
                <div className="description">
                  Blev kär i barberandet sedan ung ålder, det är som en konst
                  för mig. Jag har varit barberare i 28år.
                </div>
              </div>
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

        .img {
          background-image: url(/static/imgs/barber1.jpg);
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
};
export default barbers;
