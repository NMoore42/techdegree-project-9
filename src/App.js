import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';

//Components
import ErrorRoute from './components/ErrorRoute';
import Header from './components/Header';
import config from './config';


class App extends Component {

  constructor() {
    super();
    this.state = {
      imageInfo: [],
      loading: true,
      userSearch: '',
      //Hardcoded options for quick link topics used in QuickNav
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
    //On page load, defaults API request to "mushroom", if search action performed, updates URL to search topic
    const searchBarStatus = window.location.pathname.slice(1);
    if (searchBarStatus === ''){
      this.performSearch('mushroom');
    } else {
      this.performSearch(window.location.pathname.slice(1));
    }

  }

  //Sends API request based on query value and returns 24 objects
  performSearch = (query) => {
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
            <Route exact path='/' render={ ({match}) => <Header onSearch={this.performSearch} urlMatch={match.url} navOptions={this.state.navOptions} imageInfo={this.state.imageInfo}  userSearch={this.state.userSearch} loading={this.state.loading} /> } />
            <Route exact path='/search/:search' render={ ({match}) => <Header onSearch={this.performSearch} urlMatch={match.url} navOptions={this.state.navOptions} imageInfo={this.state.imageInfo}  userSearch={this.state.userSearch} loading={this.state.loading} /> } />
            <Route component={ErrorRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
