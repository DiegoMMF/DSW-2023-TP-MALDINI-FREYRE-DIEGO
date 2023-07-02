import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logoUTN.png"
import { Button } from 'react-bootstrap'

export const Header = ({ openModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggle = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav
            id="header"
            className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
        >
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="UTN logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                    id="navbar"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="foxes/25">
                                Mis Mascotas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="registration">
                                Registrarme
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={openModal}>
                            <NavLink className="nav-link" to="#">
                                Ingresar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
