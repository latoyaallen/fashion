import React from 'react';

const imageContainer = {
  width: 509.0909,
  height: 350,
  left: 80,
}

const Image = (props) => (
  <div>
    <img style={imageContainer} src={props.image} alt="Poster" />
    {props.id}
  </div>
)

export default Image;
