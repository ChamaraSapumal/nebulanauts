import { useEffect, useState } from 'react'
import galaxy from '../src/assets/galaxy.png'
import './App.css'
import AOS from 'aos'
import Home from './component/Home'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  return (

    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={galaxy} className="bi me-2" width="40" height="32" />
            <span className="fs-4">NebulaNauts</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fs-4">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item fs-4">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item fs-4">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item fs-4">
                <a className="nav-link">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Home></Home>

    </div>

  )
}

export default App
