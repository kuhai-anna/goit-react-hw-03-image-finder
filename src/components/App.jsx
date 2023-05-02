import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    totalHits: null,
    selectedImg: null,
    showModal: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ ...searchQuery });
  };

  // передача посилання на активну картинку
  selectedImg = largeImageURL => {
    this.setState({ selectedImg: largeImageURL });
  };

  viewLoadMoreBtn = totalHits => {
    this.setState({ totalHits });
  };

  // відкриття та закриття модалки
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { searchQuery, totalHits, showModal, selectedImg } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Section>
          <ImageGallery
            searchQuery={searchQuery}
            onClick={this.toggleModal}
            onSelectImage={this.selectedImg}
            viewLoadMoreBtn={this.viewLoadMoreBtn}
          >
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img src={selectedImg} alt="" />
              </Modal>
            )}
          </ImageGallery>
          {totalHits > 12 && <Button />}
        </Section>
      </>
    );
  }
}
