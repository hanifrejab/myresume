function Body() {
  return (
    <main className="App-body">
      {/* Skills */}
      <div className="container">
        <div className="row align-items-center justify-content-center p-5">
          <div className="col-2 text-center px-5">
            <img
              src="./assets/html-logo.svg"
              alt="HTML"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-2 text-center px-5">
            <img
              src="./assets/css-logo.svg"
              alt="CSS"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-2 text-center px-5">
            <img
              src="./assets/bootstrap-logo.svg"
              alt="Bootstrap"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-2 text-center px-5">
            <img
              src="./assets/js-logo.svg"
              alt="JS"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-2 text-center px-5">
            <img
              src="./assets/php-logo.svg"
              alt="PHP"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-2 text-center px-5">
            <img
              src="./assets/db-logo.svg"
              alt="Database"
              className="img-fluid logo-img"
            />
          </div>
        </div>

        {/* Experience */}
        <div id="exp" className="row p-3">
          <div className="col-md text-center text-md-start px-5">
            <h1 className="section-title">Experience</h1>
          </div>
          {/* Example Card */}
          <div className="row p-5">
            <div className="col-sm-6 px-5">
              <div className="card-exp">
                <div className="card-body p-3">
                  <h1 className="card-title">IT Executive</h1>
                  <p className="card-subtitle">Ravenatic Sdn Bhd</p>
                  <p className="card-subtitle">2023 - Present</p>
                  <p className="card-text pt-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 px-5">
              <div className="card-exp">
                <div className="card-body p-3">
                  <h1 className="card-title">IT Executive</h1>
                  <p className="card-subtitle">Ravenatic Sdn Bhd</p>
                  <p className="card-subtitle">2023 - Present</p>
                  <p className="card-text pt-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="pro" className="row p-3">
          <div className="col-md text-center text-md-start px-5">
            <h1 className="section-title">Projects</h1>
          </div>
          <div className="row align-items-center p-5">
            <div className="col-md-6 text-center px-5">
              <img
                src="./assets/test.jpg"
                alt="Project 1"
                className="img-fluid project-img"
              />
            </div>
            <div className="col-md-6 text-white p-5">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
            </div>
          </div>
          <div className="row align-items-center p-5 flex-md-row-reverse">
            <div className="col-md-6 text-center px-5">
              <img
                src="./assets/test.jpg"
                alt="Project 1"
                className="img-fluid project-img"
              />
            </div>
            <div className="col-md-6 text-white p-5">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
