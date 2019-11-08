import React from 'react';
import Card from './Card';
import LookList from './LookList';
import videoSrc from '../lib/videoSrc';
import videoTitle from '../lib/videoTitle';
import videoCreator from '../lib/videoCreator';

const contentContainer = {
  display: 'flex',
  paddingLeft: 20,
  paddingBottom: 40,
  marginTop: 20,
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
        src={videoSrc("lookBooks", videoId)}
        height={500}
        width={750}
        title={videoTitle("lookbooks", videoId)}
        creator={videoCreator("lookbooks", videoId)}
        handleVideo={props.handleVideo}
        id={props.id}
      />
    </div>
    <LookList />
  </div>
);

export default Video;
