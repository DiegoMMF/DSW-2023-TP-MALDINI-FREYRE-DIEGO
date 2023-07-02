import React from 'react'
import { NavLink } from 'react-router-dom'
import { NetworkLinks } from './NetworkLinks'

export const Footer = () => {
  return (
    <footer id="footer" className="pb-4 pt-4">
      <div className="container text-dark">
        <div className="row text-center d-flex align-items-center">
          <div className="col-12 col-lg">
            <NetworkLinks />
          </div>
          <div className="col-12 col-lg">
            DSW 2023 TUTI
          </div>
          <div className="col-12 col-lg">
            <NavLink href="https://www.frsf.utn.edu.ar/" target="_blank">
              UTN FRSF
            </NavLink>
          </div>
          <div className="col-12 col-lg">
            Diego Maldini
          </div>

        </div>
      </div>
    </footer>
  )
}
