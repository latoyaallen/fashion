import React from 'react';
import westElmTV from '../images/westElmTV.png'

const Iframe = (props) => (
  <div style={videoContainer}>
    <iframe
      src={props.src}
      height="415"
      width="475"
      title={props.title}
    />
  </div>
);

const videoContainer = {
  paddingLeft: 370,
  paddingTop: 170,
  position: 'absolute',
  zIndex: 1,
}

const textSize = {
  fontSize: '15px',
}

const image = {
  width: 1200,
  position: 'absolute',
  zIndex: -1,
}

const TV = (props) => (
  <div>
    <img style={image} src={westElmTV} alt="West Elm TV" />
    <Iframe
      src={props.src}
    />
  </div>
);

export default TV;
