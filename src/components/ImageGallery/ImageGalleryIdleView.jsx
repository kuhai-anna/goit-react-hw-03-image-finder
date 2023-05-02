import PropTypes from 'prop-types';
import idleImage from '../../images/blue-cube-optim.jpeg';
// import idleImage from '../../images/cubes-optim.jpeg';

export const ImageGalleryIdleView = ({ message }) => {
  return (
    <div role="alert">
      <img src={idleImage} alt="" height="100vh" />
      <p>{message}</p>
    </div>
  );
};

ImageGalleryIdleView.propTypes = {
  message: PropTypes.string.isRequired,
};
