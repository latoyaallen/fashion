import React from 'react';
import Card from './Card';

const contentContainer = {
  display: 'flex',
  paddingLeft: 20,
  paddingBottom: 40,
  marginTop: 20,
}

const categoryTitle ={
  paddingLeft: 20,
  fontSize: 30,
}

const videoViewContainer = {
  maxWidth: 500,
  margin: 'auto',
  padding: 10,
}

const Video = (props) => (
  <div>
    <div style={contentContainer} >
      <Card
        src={"https://www.youtube.com/embed/RTmqYADBi1E"}
        height={500}
        width={750}
        title={"4 Super Simple Everyday Outfits Lookbook | Samio"}
        creator={"Samio"}
        handleVideo={props.handleVideo}
        id={200}
      />
    </div>
    <h2>What you need to create these looks</h2>
      <p>Black Heeled Boots</p>
      <p>Camel Coat</p>
      <p>Black Flared Trousers</p>
      <p>Cropped Teddy Coat</p>
      <p>Layerd Gold Necklace</p>
      <p>White Shirt</p>
      <p>Tan Belt</p>
      <p>Grey Blazer</p>
      <p>Black Biker Jacket</p>
      <p>Black Cartigan</p>
      <p>Dark Cranberry Boots</p>
  </div>
);

export default Video;
