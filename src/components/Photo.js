import React from 'react';

const Photo = (props) => {
  return (
    <React.Fragment>
      <li>
        <img src={props.imageSource} alt={props.imageText} />
      </li>
    </React.Fragment>
  );
}

export default Photo;
