import React from 'react';
import Card from './Card';
import LookList from './LookList';
import getSrc from '../lib/getSrc';

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


// this only works if our ids are 3 digits long
const videoId = window.location.pathname.substring(7,10);

const Video = (props) => (
  <div style={videoViewContainer}>
    <div style={contentContainer} >
      <Card
        src={getSrc("lookBooks", videoId)}
        height={500}
        width={750}
        title={"4 Super Simple Everyday Outfits Lookbook | Samio"}
        creator={"Samio"}
        handleVideo={props.handleVideo}
        id={props.id}
      />
    </div>
    <LookList />
  </div>
);

export default Video;
