// import './App.css';
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './App.module.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal/Modal';

import PixabayApi from './servises/Pixabay-api';
import Button from './components/Button/Button';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeimage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImage();
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
    });
  };

  fetchImage = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    PixabayApi.fetchPixabay(options)
      .then(arrImages =>
        this.setState(prevState => ({
          images: [...prevState.images, ...arrImages],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

        this.setState({ isLoading: false });
      });
  };

  openModal = url => {
    console.log(url);
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeimage: url,
    }));
  };

  closeModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeimage: null,
    }));
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery arrImages={this.state.images} onClick={this.openModal} />

        {images.length > 0 && <Button onClick={this.fetchImage} />}

        {isLoading && (
          <Loader type="Circles" className={styles.loader} color="#00BFFF" height={100} width={100} timeout={3000} /> //3 secs
        )}

        {this.state.showModal && this.state.largeimage && (
          <Modal onClose={this.closeModal}>
            <img src={this.state.largeimage} height="100%" width="100%" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
