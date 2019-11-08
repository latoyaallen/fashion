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
  width: 2000,
  zIndex: -1,
  position: 'absolute',
  marginBottom: 200,
}

const PopularContentRow = (props) => (
  <div style={popularStyle}>
    <p style={seashellBackground}></p>
    <p style={popularText}>POPULAR</p>
    <div style={cardsContainer} >
      <Card
        src={props.category[0].src}
        height={300}
        width={450}
        title={props.category[0].title}
        creator={props.category[0].creator}
        category={"Street Style"}
        handleVideo={props.handleVideo}
        id={props.category[0].id}
      />
      <Card
        src={props.category[1].src}
        height={300}
        width={450}
        title={props.category[1].title}
        creator={props.category[1].creator}
        category={"Casual Looks"}
        handleVideo={props.handleVideo}
        id={props.category[1].id}
      />
      <Card
        src={props.category[2].src}
        height={300}
        width={450}
        title={props.category[2].title}
        creator={props.category[2].creator}
        category={"How To Style"}
        handleVideo={props.handleVideo}
        id={props.category[2].id}
      />
    </div>
  </div>
);

export default PopularContentRow;
