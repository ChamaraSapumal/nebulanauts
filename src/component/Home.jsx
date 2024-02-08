import { useEffect } from 'react';
import solar from '../assets/solar.svg'
import AOS from 'aos'
import './Home.css'
import astronut from '../assets/astronut.jpg'
import sship from '../assets/space-ship.jpg'
import planet from '../assets/planet.jpg'


function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  return (
    <>
      <div className="px-4 pt-4 my-md-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">NebulaNauts.com</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Explore the cosmos with <span className='text-primary'>NebulaNauts.com</span> – your portal to celestial wonders. Join the NebulaNauts on an interstellar adventure beyond the stars, where science and imagination collide. Navigate the cosmos, discover uncharted realms, and unlock the mysteries of the universe.</p>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '32vh' }}>
          <div className="container px-5" data-aos="fade-up">
            <img src={solar} className="img-fluid mb-5" alt="Example image" width="700" height="500" loading="lazy" />
          </div>

          {/* <div className='scroll-down' ></div> */}
        </div>
      </div>


      {/* braker */}

      <div className="container px-4 py-5" id="custom-cards">

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `URL(${planet})` }} data-aos="fade-up">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Orbiting Planets in Vast Cosmos</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <i className="bi bi-arrow-right-circle-fill fs-1"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${sship})` }} data-aos="fade-up">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Exploring the Cosmos: Journey of the Galactic Spaceship</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <i className="bi bi-arrow-right-circle-fill fs-1"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${astronut})` }} data-aos="fade-up">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Discovering the Cosmos: A Journey with the Astronaut</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <i className="bi bi-arrow-right-circle-fill fs-1"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
