import React from 'react'
import { NavLink } from 'react-router-dom'

export const ExtraData = ({
    foxName,
    data,
}) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                {foxName}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {`${data?.sex}, ${data?.age} años.`}
                </h5>
                <p className="card-text">
                    {data?.longDescription}
                </p>
                <NavLink href="#" className="btn btn-primary">
                    Contáctanos
                </NavLink>
            </div>
            <div className="card-footer text-body-secondary">
                {data?.breeder}
            </div>
        </div>
    )
}
