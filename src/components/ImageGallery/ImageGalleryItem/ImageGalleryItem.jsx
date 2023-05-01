import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} onClick={onClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};
