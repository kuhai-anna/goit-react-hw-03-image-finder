import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';

export class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <Section>
          <ImageGallery />
          <Button />
        </Section>
        <Loader />
      </>
    );
  }
}
