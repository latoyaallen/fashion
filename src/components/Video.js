import React from 'react';
import Card from './Card';
import LookList from './LookList';

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
  <div style={videoViewContainer}>
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
    <LookList />
  </div>
);

export default Video;
