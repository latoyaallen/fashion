import React from 'react';
import ContentRow from './ContentRow';
import PopularContentRow from './PopularContentRow';
import lookBooks from '../data/lookBooks';
import vintage from '../data/vintage';
import fashionWeek from '../data/fashionWeek';
import mostPopular from '../data/mostPopular';

const bodyContainer = {
  paddingTop: 5,
}

const seashellBackground = {
  backgroundColor: '#f9f4ee', // seashell
  height: '300px',
  width: '100%',
  zIndex: -1,
  position: 'absolute',
}

const lookBookVideos = [lookBooks[0], lookBooks[1], lookBooks[2]];
const vintageVideos = [vintage[0], vintage[1], vintage[2]];
const popularVideos = [mostPopular[0], mostPopular[1], mostPopular[2]];
const fashionWeekVideos = [fashionWeek[0], fashionWeek[1], fashionWeek[2]];

const Body = (props) => (
  <div style={bodyContainer}>
    <p style={seashellBackground}></p>
    <ContentRow
      category={"lookBooks"}
      categoryTitle={"Autum Look Books"}
      handleVideo={props.handleVideo}
      videos={lookBookVideos}
    />
    <ContentRow
      category={"vintage"}
      categoryTitle={"Vintage"}
      handleVideo={props.handleVideo}
      videos={vintageVideos}
    />
    <PopularContentRow
      category={"mostPopular"}
      handleVideo={props.handleVideo}
      videos={popularVideos}
    />
    <ContentRow
      category={"fashionWeek"}
      categoryTitle={"Fashion Week"}
      handleVideo={props.handleVideo}
      videos={fashionWeekVideos}
    />
  </div>
);

export default Body;
