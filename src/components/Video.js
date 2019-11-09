import React from 'react';
import Card from './Card';
import LookList from './LookList';
import videoSrc from '../lib/videoSrc';
import videoTitle from '../lib/videoTitle';
import videoCreator from '../lib/videoCreator';
import videoCoatsAndJackets from '../lib/videoCoatsAndJackets';
import videoTops from '../lib/videoTops';
import videoBottoms from '../lib/videoBottoms';
import videoJewelryAndAccessories from '../lib/videoJewelryAndAccessories';
import videoShoes from '../lib/videoShoes';
import videoDresses from '../lib/videoDresses';

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
console.log(videoId);

const Video = (props) => (
  <div style={videoViewContainer}>
    <div style={contentContainer} >
      <Card
        src={videoSrc(videoId)}
        height={500}
        width={750}
        title={videoTitle("lookbooks", videoId)}
        creator={videoCreator("lookbooks", videoId)}
        handleVideo={props.handleVideo}
        id={props.id}
        category={props.category}
      />
    </div>
    <LookList
      coatsAndJackets={videoCoatsAndJackets(videoId)}
      tops={videoTops(videoId)}
      bottoms={videoBottoms(videoId)}
      jewelryAndAccessories={videoJewelryAndAccessories(videoId)}
      shoes={videoShoes(videoId)}
      dresses={videoDresses(videoId)}
    />
  </div>
);

export default Video;
