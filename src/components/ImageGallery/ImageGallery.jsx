import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { fetchImagesWithQuery } from '../../services/image-api';
import { ImageGalleryErrorView } from './ImageGalleryErrorView';
import { ImageGalleryIdleView } from './ImageGalleryIdleView';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  static = {
    searchQuery: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired,
  };

  state = {
    images: [],
    totalHits: null,
    error: null,
    status: 'idle',
    // selectedImg: null,
  };

  async componentDidUpdate(prevProps, _) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });

      try {
        const { hits, totalHits } = await fetchImagesWithQuery(nextQuery);

        this.setState({ images: hits, totalHits, status: 'resolved' });

        if (hits.length === 0) {
          throw new Error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  render() {
    const { onClick, children } = this.props;
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
            />
          ))}
          {children}
        </ul>
      );
    }
  }
}
