import React from 'react';

import twitter from '../images/twitter.png';
import instagram from '../images/instagram.jpeg';
import facebook from '../images/facebook.jpeg';

export const NetworkLinks = () => {
  return (
    <aside className="container">
      <div className="row gap-5 my-5">
      <div className="col-3 col-md-2 col-lg-1 text-center">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="network icon" className='network-icon'/>
        </a>
      </div>
      <div className="col-3 col-md-2 col-lg-1 text-center">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="network icon" className='network-icon'/>
        </a>
      </div>
      <div className="col-3 col-md-2 col-lg-1 text-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="network icon" className='network-icon'/>
        </a>
      </div>
      </div>
    </aside>
  );
};