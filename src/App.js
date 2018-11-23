import React, { Component } from 'react';

//Components
import Search from './components/Search';
import QuickNav from './components/QuickNav';
import PhotoContainer from './components/PhotoContainer';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <body className="container">
            <Search />
            <QuickNav />
            <PhotoContainer />
          </body>
      </div>
    );
  }
}

export default App;
