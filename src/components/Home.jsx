import Scrollspy from "react-scrollspy";

function Home() {
  return (
    <body data-bs-spy="scroll" data-bs-target="#navbar-example">
      {/* Masthead */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Track List</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Una plataforma gratis para compartir producciones propias y
                remixes por djs de todo el mundo.
              </h2>
              <a className="btn btn-primary" href="#section-1">
                Saber más...
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* About */}
      <section className="about-section text-center" id="section-1">
        <div className="container  px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Chicago Music Tracklist</h2>
              <p className="text-white-50">
                Chicago Music es una página donde todo Dj productor puede subir
                su track para compartirlo con el resto del mundo y que ademas
                pueda ser rankeado.
              </p>
            </div>
          </div>
          <img
            className="img-fluid mb-4"
            id="img-about"
            src={require("../assets/images/allen2.png")}
            alt="..."
          />
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section bg-light" id="section-2">
        <div className="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={require("../assets/images/project2.jpg")}
                alt="..."
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Masterización</h4>
                <p className="text-black-50 mb-0">
                  Poder disfrutar del resultado final de tu track requiere una
                  serie de pasos y lineas de masterización como filtros,
                  equalizaciones, compresiones entre otros.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Project One Row--> */}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={require("../assets/images/project.jpg")}
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Innovación</h4>
                    <p className="mb-0 text-white-50">
                      Proceso de sonidos electrónicos que bien mezclados ofrecen
                      un nuevo y excelente resultado.{" "}
                    </p>
                    <hr className="d-none d-lg-block mb-0 ms-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Two Row--> */}
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={require("../assets/images/project3.jpg")}
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Flexibilidad</h4>
                    <p className="mb-0 text-white-50">
                      Tienes libertad de crear sonidos desde tu fuente favorita,
                      como un sintetizador analógico, giradiscos, maquina de
                      ritmos, o una mezcla entra ellas.
                    </p>
                    <hr className="d-none d-lg-block mb-0 me-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact-->*/}
      <section className="contact-section bg-black">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    Córdoba Capital, Argentina
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="#!">dannellmd@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    +54 (0351) 153-305804
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Copyright &copy; Your Website 2021
        </div>
      </footer>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
  );
}

export default Home;
