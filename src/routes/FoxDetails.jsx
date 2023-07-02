import React from 'react'
import { useLocation } from 'react-router';
import { foxies } from '../utils/foxies';
import { FoxCard } from '../components/FoxCard';
import { ExtraData } from '../components/ExtraData';

export const FoxDetails = () => {
  const id = useLocation().pathname?.split('/')[2]
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 my-2 col-md-5 col-lg-3">
          <FoxCard
            foxName={foxies[id - 1].foxName}
            foxInfo={foxies[id - 1].foxInfo}
            foxPhoto={foxies[id - 1].foxPhoto}
            foxNumber={id}
          />
        </div>
        <div className="col-12 my-2 col-md-7 col-lg-5">
          <ExtraData
            foxName={foxies[id - 1].foxName}
            data={foxies[id - 1].data}
          />
        </div>
      </div>
    </div>
  );
}
