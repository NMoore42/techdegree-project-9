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
            imageSource={image.imageSource}
            imageText={image.imageText}
            key={image.id.toString()}
          />
        )}
        <NotFound />
      </ul>
    </div>
  );
}

export default PhotoContainer;
