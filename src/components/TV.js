import React from 'react';
import westElmTV from '../images/westElmTV.png'

const Iframe = (props) => (
  <div style={videoContainer}>
    <iframe
      src={props.src}
      height="450"
      width="780"
      title={props.title}
    />
  </div>
);

const videoContainer = {
  paddingLeft: 580,
  paddingTop: 310,
  position: 'absolute',
  zIndex: 1,
}

const image = {
  width: 1922,
  height: 1538,
  position: 'absolute',
  zIndex: -1,
}

const nextVideo = {
  paddingTop: 515,
  paddingLeft: 770,
  cursor: 'pointer',
}

const previousVideo = {
  paddingTop: 500,
  paddingLeft: 350,
  cursor: 'pointer',
  position: 'absolute',
}

const TV = (props) => (
  <div>
    <img style={image} src={westElmTV} alt="West Elm TV" />
    <Iframe
      src={props.src}
    />
    <p style={previousVideo} onClick={props.handlePrevious.bind(this, props.count)}>PREVIOUS</p>
    <p style={nextVideo} onClick={props.handleNext.bind(this, props.count )}>NEXT</p>
  </div>
);

export default TV;
