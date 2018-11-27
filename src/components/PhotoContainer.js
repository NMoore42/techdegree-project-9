import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = (props) => {

  const results = props.imageInfo;
  let photos;
  if (results.length > 0){
      photos = results.map( image =>
        <Photo
          imageID={image.id}
          imageFarm={image.farm}
          imageServer={image.server}
          imageSecret={image.secret}
          imageText={image.title}
          key={image.id}
        />
    );
  } else {
    photos = <NotFound />
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;
