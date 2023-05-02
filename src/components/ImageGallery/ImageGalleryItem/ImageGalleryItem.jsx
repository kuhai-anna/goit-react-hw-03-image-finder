import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
  onSelectImage,
}) => {
  const handleImageClick = () => {
    onClick();
    onSelectImage(largeImageURL);
  };

  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} onClick={handleImageClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
};
