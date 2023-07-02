import React from 'react';

import twitter from '../images/twitter.png';
import instagram from '../images/instagram.jpeg';
import facebook from '../images/facebook.jpeg';

export const NetworkLinks = () => {
  return (
    <div className="network-links row">
      <a className="col-1" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="network icon" />
      </a>
      <a className="col-1" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="network icon" />
      </a>
      <a className="col-1" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="network icon" />
      </a>
    </div>
  );
};