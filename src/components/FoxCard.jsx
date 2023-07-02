import React from 'react'
import { NavLink } from 'react-router-dom';

export const FoxCard = ({
    foxName,
    foxInfo,
    foxPhoto,
    foxNumber,
    showDetailsButton,
}) => {
    let cardClassName = "card";
    if (showDetailsButton) { cardClassName += " details" }
    return (
        <div className={cardClassName}>
            <img src={foxPhoto} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{foxName}</h5>
                <p className="card-text">{foxInfo}</p>
                {showDetailsButton && (
                    <NavLink to={`/foxes/${foxNumber}`} className="btn btn-primary">
                        Detalles
                    </NavLink>
                )}
            </div>
        </div>
    )
}