import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logoUTN.png"

export const Header = () => {
    return (
        <nav
            id="header"
            className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
        >
            <div className="container">
                <NavLink className="navbar-brand" href="#">
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
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/pets/1">
                                Mis Mascotas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"registration"}>
                                Registrarme
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link text-dsw"
                                data-toggle="modal"
                                data-target="#modalLogin"
                            >
                                Ingresar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
