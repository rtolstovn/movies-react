function Header() {
  return (
    <nav className="green accent-3">
      <div classNameName="nav-wrapper">
        <a
          href="!#"
          className="brand-logo"
        >
          Online Kinozal
        </a>
        <ul
          id="nav-mobile"
          className="right hide-on-med-and-down"
        >
          <li>
            <a
              href="https://github.com/rtolstovn/react-movies"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
