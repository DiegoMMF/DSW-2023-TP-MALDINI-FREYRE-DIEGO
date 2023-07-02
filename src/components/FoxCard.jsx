import React from 'react'
import { NavLink } from 'react-router-dom';

export const FoxCard = ({
    foxName,
    foxInfo,
    foxPhoto,
    foxNumber,
    showDetailsButton,
}) => (
    <div className="card my-3">
        <img src={foxPhoto} className="card-img-top" alt="..." />
        <div className="card-body panel">
            <h5 className="card-title">{foxName}</h5>
            {showDetailsButton && (
                <>
                    <p className="card-text">{foxInfo}</p>
                    <NavLink
                        to={`/foxes/${foxNumber}`}
                        className="btn btn-primary"
                    >
                        Mas Info
                    </NavLink>
                </>
            )}
        </div>
    </div>
);