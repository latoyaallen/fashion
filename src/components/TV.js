import React, { useState } from 'react';
import westElmTV from '../images/westElmTV.png'


import lookBooks from '../data/lookBooks';
import streetStyle from '../data/streetStyle';
import vintage from '../data/vintage';
import hauls from '../data/hauls';

const numberOfVideos = (category) => {
  if(category === 'streetStyle') {
    return streetStyle.length;
  }
  if(category === 'lookBooks') {
    return lookBooks.length;
  }
  if(category === 'vintage') {
    return vintage.length;
  }
  if(category === 'hauls') {
    return hauls.length;
  }
}
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

const image = {
  width: 1150,
  height: 1000,
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
