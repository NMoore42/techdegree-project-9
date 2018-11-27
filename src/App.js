import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import axios from 'axios';

//Components
import Search from './components/Search';
import QuickNav from './components/QuickNav';
import PhotoContainer from './components/PhotoContainer';
import Header from './components/Header';
import config from './config';


class App extends Component {

  constructor() {
    super();
    this.state = {
      imageInfo: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'mushroom') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imageInfo: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search onSearch={this.performSearch}/>
          <QuickNav />
          <div>
            {
              (this.state.loading)
              ? <p>Fetching Results...</p>
              : <PhotoContainer imageInfo={this.state.imageInfo} />
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
