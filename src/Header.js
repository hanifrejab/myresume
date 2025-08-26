function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="row align-items-center justify-content-center p-3">
          <div className="col-md-8 text-center text-md-start px-5">
            <h1 className="intro-hello">
              Hi, I'm <span className="intro-name">Hanif Khuzairi</span>
            </h1>
            <p className="intro-title">Web Developer</p>
            <p className="intro-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
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
          <div className="col-md-4 text-center">
            <img
              src="./assets/profile.svg"
              alt="Placeholder"
              className="img-fluid profile-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
