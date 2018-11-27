import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = (props) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {/*Photo List*/}
        {props.imageInfo.map( image =>
          <Photo
            imageID={image.id}
            imageFarm={image.farm}
            imageServer={image.server}
            imageSecret={image.secret}
            imageText={image.title}
            key={image.id}
          />
        )}
        <NotFound />
      </ul>
    </div>
  );
}

export default PhotoContainer;
