import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  // відкриття та закриття модалки
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Searchbar />

        <Section>
          <ImageGallery onClick={this.toggleModal}>
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img src="" alt="" />
              </Modal>
            )}
          </ImageGallery>
          <Button />
        </Section>
        <Loader />
      </>
    );
  }
}
