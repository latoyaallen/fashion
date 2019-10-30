import React from 'react';
import daysAgo from '../lib/daysAgo';

const Iframe = (props) => (
  <div>
    <iframe
      src={props.src}
      height="415"
      width="475"
      title={props.title}
    />
  </div>
);

const previewContainer = {
  border: '2px solid #25262b',
  borderRadius: '10px',
  padding: '10px' //generate space around content
}

const textSize = {
  fontSize: '15px',
}

const Episode = (props) => (
  <div style={previewContainer}>
    <span>Channel: {props.haus}</span>
    <p style={textSize} >Posted by {props.user} 2 days ago</p>
    <h3>{props.title}</h3>
    <Iframe
      src={props.src}
    />
  </div>
);

export default Episode;
