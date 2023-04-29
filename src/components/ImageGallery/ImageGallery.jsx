import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ children, onClick }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem onClick={onClick} />
      {children}
    </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
