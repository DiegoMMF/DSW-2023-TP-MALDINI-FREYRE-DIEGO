import React from 'react'
import { FoxCard } from './FoxCard'
import { foxies } from '../utils/foxies'

export const Foxes = () => {
    return (
        <section className='container'>
            <h1>Nuestros Zorritos</h1>
            <div className='row'>
                    {foxies.map(({ foxPhoto, foxInfo, foxName }, index) => (
                        <div key={foxPhoto} className='col-md-4 col-sm-12 col-lg-3'>
                        <FoxCard
                            foxName={foxName}
                            foxInfo={foxInfo}
                            foxPhoto={foxPhoto}
                            foxNumber={index+1}
                            showDetailsButton
                        />
                        </div>
                    ))}
            </div>
        </section>
    )
}
