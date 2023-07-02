import React from 'react'
import { NavLink } from 'react-router-dom';

export const FoxCard = ({
    cardTitle = 'Título de la tarjeta',
    cardText = 'Texto de la tarjeta',
    cardImg = 'https://via.placeholder.com/150',
    showDetailsButton,
}) => {
    let cardClassName = "card";
    if (showDetailsButton) { cardClassName += " details" }
    return (
        <div className={cardClassName}>
            <img src={cardImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                {showDetailsButton && (
                    <NavLink href="#" className="btn btn-primary">
                        Detalles
                    </NavLink>
                )}
            </div>
        </div>
    )
}