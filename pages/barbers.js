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
                <div className="name">John Doe</div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, corporis ducimus veritatis eaque iste, tempora minus
                  totam tenetur reiciendis sit nesciunt libero repudiandae
                  accusantium maxime, consequuntur inventore quo velit? Cum.
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
          padding: 100px 0;
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
          display: flex;
          justify-content: space-around;
        }

        .barber {
          flex-basis: 26%;
          max-width: 500px;
        }

        .img {
          background-image: url(/static/imgs/barber1.jpg);
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin: 0 auto;
          margin-bottom: 20px;
        }

        .name {
          font-size: 35px;
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
};
export default barbers;
