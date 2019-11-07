import React from 'react';
import Card from './Card';

const cardsContainer = {
  display: 'flex',
  paddingLeft: 20,
  paddingBottom: 75,
}

const popularText ={
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 600,
  letterSpacing: 4.2,
}

const popularStyle = {
  backgroundColor: '#f9f4ee', // seashell
  paddingTop: 20,
}

const PopularContentRow = (props) => (
  <div style={popularStyle}>
    <p style={popularText}>POPULAR</p>
    <div style={cardsContainer} >
      <Card
        src={props.category[0].src}
        height={300}
        width={450}
        title={props.category[0].title}
        creator={props.category[0].creator}
      />
      <Card
        src={props.category[1].src}
        height={300}
        width={450}
        title={props.category[1].title}
        creator={props.category[1].creator}
      />
      <Card
        src={props.category[2].src}
        height={300}
        width={450}
        title={props.category[2].title}
        creator={props.category[2].creator}
      />
    </div>
  </div>
);

export default PopularContentRow;
