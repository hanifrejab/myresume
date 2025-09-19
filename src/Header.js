function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="row align-items-center justify-content-center p-3 header-row">
          <div className="col-md-4 text-center">
            <img
              src="./assets/profile.svg"
              alt="Placeholder"
              className="img-fluid profile-img"
            />
          </div>
          <div className="col-md-8 text-center text-md-start px-5">
            <h1 className="intro-hello">
              Hi, I'm <span className="intro-name">Hanif</span> Khuzairi
            </h1>
            <p className="intro-title">Web Developer</p>
            <p className="intro-desc">
              "Let’s Build Something Amazing Together"
            </p>
            <a
              href="./assets/resume.pdf"
              className="btn-resume px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
