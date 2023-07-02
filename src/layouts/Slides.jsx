import Carousel from 'react-bootstrap/Carousel';
import { foxies } from '../utils/foxies';
import { NavLink } from 'react-router-dom';

export const Slides = () => {
  return (
    <Carousel>
      {foxies.map(({ foxName, foxPhoto, foxInfo }, index) => (
        <Carousel.Item key={foxName}>
          <img
            className="d-block w-100"
            src={foxPhoto}
            alt="fox photo"
          />
          <Carousel.Caption>
            <NavLink className="nav-link" to={`/foxes/${index+1}`}>
              <h3>{foxName}</h3>
            </NavLink>
            <p>{foxInfo}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}