import Link from "next/link";

const Nav = () => (
  <div id="nav">
    <div className="nav-item-container">
      <Link href="/">
        <a>Hem</a>
      </Link>
      <Link href="/barbers">
        <a>Barberare</a>
      </Link>
      <Link href="/services">
        <a>Tjänster</a>
      </Link>
      <Link href="/booking">
        <a>Bokning</a>
      </Link>
    </div>
    <style jsx>{`
      #nav {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 60px;
      }

      .nav-item-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 20;
        margin: 0 20px;
      }
    `}</style>
  </div>
);

export default Nav;
