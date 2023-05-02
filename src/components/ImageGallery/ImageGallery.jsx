import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { fetchImagesWithQuery } from '../../services/image-api';
import { ImageGalleryErrorView } from './ImageGalleryErrorView';
import { ImageGalleryIdleView } from './ImageGalleryIdleView';
import { Loader } from 'components/Loader/Loader';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class ImageGallery extends Component {
  static = {
    searchQuery: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    onSelectImage: PropTypes.func.isRequired,
    viewLoadMoreBtn: PropTypes.func.isRequired,
  };

  state = {
    images: [],
    error: null,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, _) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      try {
        const { hits, totalHits } = await fetchImagesWithQuery(nextQuery);
        const { viewLoadMoreBtn } = this.props;

        this.setState({ images: hits, status: 'resolved' });
        viewLoadMoreBtn(totalHits); //прередає загальну кулькусть знайдених картинок

        if (hits.length === 0) {
          throw new Error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        this.setState({ error, status: Status.REJECTED });
      }
    }
  }

  render() {
    const { onClick, onSelectImage, children } = this.props;
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return (
        <ImageGalleryIdleView
          message={'Enter your search query in the search field.'}
        />
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return (
        <ImageGalleryErrorView
          message={`Whoops, something went wrong. ${error.message}`}
        />
      );
    }

    if (status === 'resolved') {
      return (
        <ul className="gallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onClick={onClick}
              onSelectImage={onSelectImage}
            />
          ))}
          {children}
        </ul>
      );
    }
  }
}
