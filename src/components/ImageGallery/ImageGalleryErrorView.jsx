import PropTypes from 'prop-types';
import errorImage from '../../images/blue-cube-optim.jpeg';

export const ImageGalleryFallbackView = ({ message }) => {
  return (
    <div
      role="alert"
      // style={{
      //   backgroundImage: errorImage,
      // }}
    >
      <img src={errorImage} alt="" />
      <p>{message}</p>
    </div>
  );
};

ImageGalleryFallbackView.propTypes = {
  message: PropTypes.string.isRequired,
};
