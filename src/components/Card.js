import React from 'react';
import Iframe from './Iframe';

const textContainer = {
  paddingTop: 300,
}
const videoTitle = {
  fontSize: 20,
}
const creatorName = {
  fontSize: 18,
}

const cardContainer = {
  width: 700,
}

const Card = (props) => (
  <div style={cardContainer}>
    <Iframe
      src={props.src}
      height={300}
      width={450}
    />
    <div style={textContainer}>
      <p style={videoTitle}>{props.title}</p>
      <p style={creatorName}>{props.creator}</p>
    </div>
  </div>
);

export default Card;
