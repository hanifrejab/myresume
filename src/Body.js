function Body() {
  return (
    <main className="App-body">
      {/* Skills */}
      <div className="container">
        <div className="row align-items-center justify-content-center logos py-3">
          <div className="col-4 col-lg-2 text-center py-3">
            <img
              src="./assets/html-logo.svg"
              alt="HTML"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-4 col-lg-2 text-center py-3">
            <img
              src="./assets/css-logo.svg"
              alt="CSS"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-4 col-lg-2 text-center py-3">
            <img
              src="./assets/bootstrap-logo.svg"
              alt="Bootstrap"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-4 col-lg-2 text-center py-3">
            <img
              src="./assets/js-logo.svg"
              alt="JS"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-4 col-lg-2 text-center py-3">
            <img
              src="./assets/php-logo.svg"
              alt="PHP"
              className="img-fluid logo-img"
            />
          </div>
          <div className="col-4 col-lg-2 text-center py-3">
            <img
              src="./assets/database.svg"
              alt="Database"
              className="img-fluid logo-img"
            />
          </div>
        </div>

        {/* Experience */}
        <div
          id="exp"
          className="row align-items-center justify-content-center p-3"
        >
          <div className="col-md text-md-start">
            <h1 className="section-title">Experience</h1>
          </div>
          {/* Example Card */}
          <div className="row p-3">
            <div className="col-12 col-md-6 p-3">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h1 className="card-title">IT Executive</h1>
                  <p className="card-subtitle">Ravenatic Sdn Bhd</p>
                  <p className="card-subtitle">2023 - Present</p>
                  <p className="card-text pt-3">
                    Develops responsive, high-performance web applications using
                    PHP, Angular, TypeScript, and Bootstrap. Writes clean,
                    scalable code with thorough testing and debugging to ensure
                    performance and reliability. Maintains software and security
                    systems, manages deployment processes, and prepares
                    technical documentation. Conducts staff training, supports
                    installation, configuration, and maintenance of systems and
                    applications, and continuously monitors and optimizes IT
                    systems to improve performance and service quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h1 className="card-title">Internship (System Developer)</h1>
                  <p className="card-subtitle">HeiTech Padu Berhad</p>
                  <p className="card-subtitle">2022 - 2023</p>
                  <p className="card-text pt-3">
                    Designed, developed, and maintained mobile applications
                    primarily for Android, ensuring functionality aligned with
                    client specifications and performance standards. Tested,
                    debugged, and optimized code to improve reliability and
                    efficiency, while enhancing applications based on client
                    feedback and usability testing. Collaborated closely with QA
                    teams to refine features and deliver an improved user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div
          id="pro"
          className="row align-items-center justify-content-center p-3"
        >
          <div className="col-md text-md-start">
            <h1 className="section-title">Projects</h1>
          </div>
          <div className="row align-items-center p-3">
            <div className="col-md-6 text-center px-3">
              <img
                src="./assets/project1.png"
                alt="Project 1"
                className="img-fluid project-img"
              />
            </div>
            <div className="col-md-6 text-white p-3">
              <h4 class="project-title">
                Ravenatic Website and Leave Management System
              </h4>
              <p>
                The Ravenatic Website and Leave Management System is a tool for
                handling employee leave requests.Employees can request time off
                through the website, and supervisors can approve or deny these
                requests online. The system keeps track of leave balances and
                helps HR managers monitor leave usage. It simplifies the leave
                management process, making it easier for everyone involved.
              </p>
            </div>
          </div>
          <div className="row align-items-center p-3 flex-md-row-reverse">
            <div className="col-md-6 text-center px-3">
              <img
                src="./assets/projectfyp.png"
                alt="Project 1"
                className="img-fluid project-img"
              />
            </div>
            <div className="col-md-6 text-white p-3">
              <h4 class="project-title">
                Detection of Coffee Leaves using Convolutional Neural Network
              </h4>
              <p>
                The project uses Convolutional Neural Network (CNN) algorithms
                to spot and sort out diseases in coffee leaves. By looking at
                the textures and appearance of coffee leaves, it can tell if
                they're healthy or affected by Coffee Leaf Rust or Coffee Leaf
                Miner. The goal is to create a mobile app that can help detect
                these issues with coffee plants.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1B3bh8Vcqy3OCXZZZxnFOGbVY-zjhI79V?usp=sharing"
                className="btn-resume px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
              Test
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
