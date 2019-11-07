import React from 'react';
import Iframe from './Iframe';

const text = {
  paddingTop: 300,
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
    <div style={text}>
      <p>{props.title}</p>
      <p>{props.creator}</p>
    </div>
  </div>
);

export default Card;
