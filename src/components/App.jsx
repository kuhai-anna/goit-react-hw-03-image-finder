import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
      </>
    );
  }
}
