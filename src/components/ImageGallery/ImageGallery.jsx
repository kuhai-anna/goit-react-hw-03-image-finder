import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, children, onClick }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
      {children}
    </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
