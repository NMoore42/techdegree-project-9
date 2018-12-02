import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
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
      loading: true,
      userSearch: [],
      navOptions: [
        {
          name:'computers',
          id:1
        },
        {
          name:'dogs',
          id:2
        },
        {
          name:'cats',
          id:3
        }
      ]
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
        loading: false,
        userSearch: query
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
          <Switch>
            <Route render={ ({match}) => <Header onSearch={this.performSearch} urlMatch={match.url} history={this.history} navOptions={this.state.navOptions}/> } />
            <Route path='/:search' render={ ({match}) => <Header onSearch={this.performSearch} history={this.history} urlMatch={match.url} navOptions={this.state.navOptions}/> } />
          </Switch>
              {
                (this.state.loading)
                ? <p>Fetching Results...</p>
                : <PhotoContainer imageInfo={this.state.imageInfo}  userSearch={this.state.userSearch}/>
              }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
