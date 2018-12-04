import React from 'react';
import Search from './Search';
import QuickNav from './QuickNav';


const Header = (props) => {

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
    </div>
  );
}

export default Header;
