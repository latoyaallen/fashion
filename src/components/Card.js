import React from 'react';
import Iframe from './Iframe';

const textContainer = {
  paddingTop: 300,
}
const videoTitle = {
  fontSize: 20,
  margin: '32px, 0, 0',
  fontWeight: 10,
  cursor: 'pointer',
}
const creatorName = {
  fontSize: 18,
}

const cardContainer = {
  width: 700,
  marginRight: 10,
}

const Card = (props) => (
  <div style={cardContainer}>
    <Iframe
      src={props.src}
      height={300}
      width={450}
    />
    <div style={textContainer}>
      <h2 style={videoTitle} onClick={props.handleVideo.bind(this, props.id)}>{props.title}</h2>
      <p style={creatorName}>{props.creator}</p>
    </div>
  </div>
);

export default Card;
