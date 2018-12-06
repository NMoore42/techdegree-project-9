//Container for quick select links
import React from 'react';
import { NavLink } from 'react-router-dom';



const QuickNav = (props) => {
  //Helper to include "search/" in url if not present
  let urlStatus;
  if (window.location.pathname === '/'){
    urlStatus = 'search/'
  } else {
    urlStatus = ''
  }

  return (
    <React.Fragment>
      <li><NavLink to={`${urlStatus}${props.navOptions}`} onClick={ () => {props.onSearch(props.navOptions)}}>{props.navOptions.charAt(0).toUpperCase()}{props.navOptions.slice(1)}</NavLink></li>
    </React.Fragment>
  );
}

export default QuickNav;
