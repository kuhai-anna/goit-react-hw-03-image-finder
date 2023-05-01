import PropTypes from 'prop-types';
import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { fetchImagesWithQuery } from '../../services/image-api';
import { ImageGalleryFallbackView } from './ImageGalleryErrorView';

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

    const loaderParams = {
      color: '#c2014ef4',
      // color: '#0171c2f4',
      ariaLabel: 'three-dots-loading',
    };

    const loaderWrapperStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      // backgroundColor: '#d9effff4',
    };

    if (status === 'idle') {
      return <p>Enter your search query in the search field.</p>;
    }

    if (status === 'pending') {
      return (
        <ThreeDots
          {...loaderParams}
          wrapperStyle={loaderWrapperStyle}
          visible={true}
        />
      );
    }

    if (status === 'rejected') {
      return (
        <ImageGalleryFallbackView
          message={`Whoops, something went wrong. ${error.message}`}
        ></ImageGalleryFallbackView>
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

//  <>
//    {error && <p>Whoops, something went wrong. {error.message}</p>}
//    {isLoading && (
//      <ThreeDots
//        {...loaderParams}
//        wrapperStyle={loaderWrapperStyle}
//        visible={true}
//      />
//    )}
//    {images.length > 0 && (
//      <ul className="gallery">
//        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//          <ImageGalleryItem
//            key={id}
//            webformatURL={webformatURL}
//            largeImageURL={largeImageURL}
//            tags={tags}
//            onClick={onClick}
//          />
//        ))}
//        {children}
//      </ul>
//    )}
//  </>;

// ImageGallery.propTypes = {
//   children: PropTypes.any,
//   onClick: PropTypes.func.isRequired,
// };

// export const ImageGallery = ({ images, children, onClick }) => {
//   return (
//     <ul className="gallery">
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//           onClick={onClick}
//         />
//       ))}
//       {children}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   children: PropTypes.any,
//   onClick: PropTypes.func.isRequired,
// };
