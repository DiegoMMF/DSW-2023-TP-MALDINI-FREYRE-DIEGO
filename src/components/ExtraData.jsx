import React from 'react'
import { NavLink } from 'react-router-dom'

export const ExtraData = ({
    cardTitle,
    data: {
        age,
        sex,
        breeder,
        longDescription
    }
}) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                {cardTitle}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {`${sex}, ${age} años.`}
                </h5>
                <p className="card-text">
                    {longDescription}
                </p>
                <NavLink href="#" className="btn btn-primary">
                    Contáctanos
                </NavLink>
            </div>
            <div className="card-footer text-body-secondary">
                {breeder}
            </div>
        </div>
    )
}
