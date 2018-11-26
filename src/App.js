import React, { Component } from 'react';

//Components
import Search from './components/Search';
import QuickNav from './components/QuickNav';
import PhotoContainer from './components/PhotoContainer';
import Header from './components/Header';

const imageInfo = [
  {
    imageSource:"https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    imageText:"Nick 1",
    id: 1
  },
  {
    imageSource:"https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
    imageText:"Nick 2",
    id: 2
  },
  {
    imageSource:"https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
    imageText:"Nick 3",
    id: 3
  },
  {
    imageSource:"https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
    imageText:"Nick 4",
    id: 4
  }
];

class App extends Component {

  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <Search />
            <QuickNav />
            <PhotoContainer
              imageInfo={imageInfo}
            />
          </div>
      </div>
    );
  }
}

export default App;
