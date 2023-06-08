import "./index.css";
export function Header() {
  return (
    <header role="banner">
      <img
        id="logo-main"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
        width="200"
        alt="Logo Thing main logo"
      ></img>
      <nav id="navbar-primary" className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <ul className="navbar-nav">
            <li className="active">
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
