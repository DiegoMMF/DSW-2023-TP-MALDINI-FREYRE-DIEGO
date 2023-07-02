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
            foxName={foxies[id - 1].foxName}
            foxInfo={foxies[id - 1].foxInfo}
            foxPhoto={foxies[id - 1].foxPhoto}
            foxNumber={id}
          />
        </div>
        <div className="col">
          <ExtraData
            foxName={foxies[id - 1].foxName}
            data={foxies[id - 1].data}
          />
        </div>
      </div>
    </div>
  );
}
