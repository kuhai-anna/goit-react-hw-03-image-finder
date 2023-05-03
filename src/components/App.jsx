import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { ModalImage } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    totalHits: null,
    lengthArray: 0,
    selectedImg: null,
    showModal: false,
  };

  // передача пошукового запиту при сабміті форми
  handleFormSubmit = (searchQuery, page) => {
    this.setState({ ...searchQuery, ...page });
  };

  // передача посилання на активну картинку при кліку на картинку
  selectedImg = largeImageURL => {
    this.setState({ selectedImg: largeImageURL });
  };

  //прередача загальної кількості знайдених картинок при отриманні результату запиту
  viewLoadMoreBtn = (totalHits, lengthArray) => {
    this.setState({ totalHits, lengthArray });
  };

  // відкриття та закриття модалки
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // збільшення номеру сторінки при кліку на кнопку
  loadMoreBtnClick = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const {
      searchQuery,
      page,
      lengthArray,
      totalHits,
      showModal,
      selectedImg,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Section>
          <ImageGallery
            searchQuery={searchQuery}
            page={page}
            onClick={this.toggleModal}
            onSelectImage={this.selectedImg}
            viewLoadMoreBtn={this.viewLoadMoreBtn}
          >
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <ModalImage src={selectedImg} alt="" />
              </Modal>
            )}
          </ImageGallery>
          {totalHits > 12 && lengthArray >= 12 && (
            <Button onClick={this.loadMoreBtnClick} />
          )}
        </Section>
      </>
    );
  }
}
