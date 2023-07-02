import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer id="footer" className="pb-4 pt-4">
      <div className="container text-light">
        <div className="row text-center">
          <div className="col-12 col-lg">
            Desarrollo de Sitios Web 2023
          </div>
          <div className="col-12 col-lg">
            <NavLink href="https://www.frsf.utn.edu.ar/" target="_blank">
              UTN Facultad Regional Santa Fe
            </NavLink>
          </div>
          <div className="col-12 col-lg">
            DiegoMMF
          </div>
        </div>
      </div>
    </footer>
  )
}
