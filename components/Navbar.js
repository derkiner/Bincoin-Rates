import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand" style={{ color: "black", lineHeight: 10, padding: 5 }}>
    <div className="container">
      <a className="navbar-brand" href="#">
      
      </a>
      <div className="collapse navbar-collapse">
        <ul  className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Rates</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">Cryptocurrency</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;