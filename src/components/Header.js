import React from 'react';
import Search from './Search';
import QuickNav from './QuickNav';


const Header = (props) => {
  return(
    <div>
      <title>React App Assets</title>
      <Search onSearch={props.onSearch}/>
      <QuickNav />
    </div>
  );
}

export default Header;
