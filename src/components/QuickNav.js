import React from 'react';
import { NavLink } from 'react-router-dom';



const QuickNav = (props) => {


  return (
    <React.Fragment>
      <li><NavLink to={`${props.urlMatch}${props.navOptions}`} onClick={ () => {props.onSearch(props.navOptions)}}>{props.navOptions.charAt(0).toUpperCase()}{props.navOptions.slice(1)}</NavLink></li>
    </React.Fragment>
  );
}

export default QuickNav;
