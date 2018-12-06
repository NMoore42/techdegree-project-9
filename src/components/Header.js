//Container for quick select options, search bar, and API results
import React from 'react';
import Search from './Search';
import QuickNav from './QuickNav';
import PhotoContainer from './PhotoContainer';


const Header = (props) => {
  //Maps quick select components based on array of navOptions located in app.js
  let quickNavOptions = props.navOptions.map( options =>
    <QuickNav onSearch={props.onSearch} urlMatch={props.urlMatch} key={options.id} navOptions={options.name} />
  );

  return(
    <div>
      <title>React App Assets</title>
      <Search onSearch={props.onSearch} />
      <nav className="main-nav">
        <ul>
          {quickNavOptions}
        </ul>
      </nav>
      {/*Ternary operator that renders "Fetching Resutls..." to page if props.loading is true or PhotoContainer component if false*/}
      {
        (props.loading)
        ? <p>Fetching Results...</p>
        : <PhotoContainer imageInfo={props.imageInfo}  userSearch={props.userSearch}/>
      }
    </div>
  );
}

export default Header;
