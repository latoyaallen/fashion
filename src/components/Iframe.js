import React from 'react';

const videoContainer = {
  float: 'left',
  display: 'inline',
  width: '30%',
}

const Iframe = (props) => (
  <div style={videoContainer}>
    <iframe
      src={props.src}
      height={props.height}
      width={props.width}
      title={props.title}
    />
  </div>
);

export default Iframe;
