import React from 'react';
import Card from './Card';

const cardsContainer = {
  display: 'flex',
  paddingLeft: 20,
  paddingBottom: 35,
}

const popularText ={
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 600,
  letterSpacing: 4.2,
}

const popularStyle = {
  paddingBottom: 20,
  paddingTop: 10,
}

const seashellBackground = {
  backgroundColor: '#f9f4ee', // seashell
  height: '600px',
  width: '100%',
  zIndex: -1,
  position: 'absolute',
  marginBottom: 200,
}

const PopularContentRow = (props) => (
  <div style={popularStyle}>
    <p style={seashellBackground}></p>
    <p style={popularText}>POPULAR</p>
    <div style={cardsContainer} >
      {props.videos.map(d => (
      <Card
        src={d.src}
        height={300}
        width={450}
        title={d.title}
        creator={d.creator}
        handleVideo={props.handleVideo}
        id={d.id}
      />
        ))}
    </div>
  </div>
);

export default PopularContentRow;
