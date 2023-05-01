import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { fetchImagesWithQuery } from '../services/image-api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    totalHits: null,
    isLoading: false,
    error: null,
    selectedImg: null,
    showModal: false,
  };

  // передача посилання на активну картинку
  selectedImg = largeImageURL => {
    // const { images } = this.state;
    // const imageURL = images.map(image => image.largeImageURL);
    console.log(largeImageURL);
    this.setState({ selectedImg: largeImageURL });
  };

  // відкриття та закриття модалки
  toggleModal = () => {
    // this.setState({ isLoading: true });
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    // this.setState({ isLoading: false });
  };

  render() {
    const { images, totalHits, isLoading, error, showModal, selectedImg } =
      this.state;

    const loaderParams = {
      height: '80',
      width: '80',
      radius: '9',
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

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <ThreeDots
            {...loaderParams}
            wrapperStyle={loaderWrapperStyle}
            visible={true}
          />
        )}
        {images.length > 0 && (
          <Section>
            <ImageGallery images={images} onClick={this.toggleModal}>
              {showModal && (
                <Modal onClose={this.toggleModal}>
                  <img src={selectedImg} alt="" />
                </Modal>
              )}
            </ImageGallery>
            {totalHits > 12 && <Button />}
          </Section>
        )}

        <Loader />
      </>
    );
  }
}