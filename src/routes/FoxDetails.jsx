import React from 'react'
import { useLocation } from 'react-router';
import { foxies } from '../utils/foxies';
import { FoxCard } from '../components/FoxCard';
import { ExtraData } from '../components/ExtraData';

export const FoxDetails = () => {
  const id = useLocation().pathname?.split('/')[2]
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <FoxCard
            cardTitle={foxies[id - 1].cardTitle}
            cardText={foxies[id - 1].cardText}
            cardImg={foxies[id - 1].cardImg}
          />
        </div>
        <div className="col">
          <ExtraData
            cardTitle={foxies[id - 1].cardTitle}
            data={foxies[id - 1].data}
          />
        </div>
      </div>
    </div>
  );
}
