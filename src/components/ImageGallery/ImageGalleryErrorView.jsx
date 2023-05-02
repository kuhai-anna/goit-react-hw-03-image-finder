import PropTypes from 'prop-types';
import errorImage from '../../images/sad-danbo-optim.jpeg';

export const ImageGalleryErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} alt="" height="" />
      <p>{message}</p>
    </div>
  );
};

ImageGalleryErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
