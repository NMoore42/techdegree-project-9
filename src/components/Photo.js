import React from 'react';

const Photo = (props) => {
  return (
    <React.Fragment>
      <li>
        <img src={`
          https://farm${props.imageFarm}.staticflickr.com/${props.imageServer}/${props.imageID}_${props.imageSecret}.jpg
          `}
          alt={props.imageText}
        />
      </li>
    </React.Fragment>
  );
}

export default Photo;
