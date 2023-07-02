import React from 'react'
import { FoxCard } from './FoxCard'
import { foxies } from '../utils/foxies'

export const Foxes = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1>Nuestros Zorritos</h1>
                <div>
                    {foxies.map(({ foxPhoto, foxInfo, foxName }, index) => (
                        <FoxCard
                            key={foxPhoto}
                            foxName={foxName}
                            foxInfo={foxInfo}
                            foxPhoto={foxPhoto}
                            foxNumber={index+1}
                            showDetailsButton
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
