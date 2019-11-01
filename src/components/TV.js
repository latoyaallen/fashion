import React from 'react';
import westElmTV from '../images/westElmTV.png'

const Iframe = (props) => (
  <div style={videoContainer}>
    <iframe
      src={props.src}
      height="285"
      width="471"
      title={props.title}
    />
  </div>
);

const videoContainer = {
  paddingLeft: 345,
  paddingTop: 205,
  position: 'absolute',
  zIndex: 1,
}

const textSize = {
  fontSize: '15px',
}

const image = {
  // width: 1050,
  width: 1150,
  height: 1000,
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
