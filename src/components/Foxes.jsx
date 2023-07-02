import React from 'react'
import { FoxCard } from './FoxCard'
import { foxies } from '../utils/foxies'
import { Link } from 'react-router-dom'

export const Foxes = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1>Nuestros Zorritos</h1>
                <div className="hstack gap-3">
                {foxies.map(({ cardImg, cardText, cardTitle }, index) => (
                    <Link to={`/pets/${index + 1}`} key={cardImg}>
                        <FoxCard
                            cardTitle={cardTitle}
                            cardText={cardText}
                            cardImg={cardImg}
                            showDetailsButton
                        />
                    </Link>
                ))}
                </div>
            </div>
        </div>
    )
}
