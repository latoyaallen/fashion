import React from 'react';
import TV from './TV'
import Channels from './Channels'

import lookBooks from '../data/lookBooks';
import streetStyle from '../data/streetStyle';
import vintage from '../data/vintage';
import hauls from '../data/hauls';

const imageAttribution = {
  position: 'fixed',
  bottom: -20,
  color: 'black',
}

const getEmbed = (category, count) => {
  if(category === 'streetStyle') {
    return streetStyle[count]["src"];
  }
  if(category === 'lookBooks') {
    return lookBooks[count]["src"];
  }
  if(category === 'vintage') {
    return vintage[count]["src"];
  }
  if(category === 'hauls') {
    return hauls[count]["src"];
  }
}

const numberOfVideos = (category) => {
  if(category === 'streetStyle') {
    return streetStyle.length;
  }
  if(category === 'lookBooks') {
    return lookBooks.length;
  }
  if(category === 'vintage') {
    return vintage.length;
  }
  if(category === 'hauls') {
    return hauls.length;
  }
}

const LivingRoom = (props) => (
  <div>
    <TV
      src={getEmbed(props.category, props.count)}
      handleNext={props.handleNext}
      handlePrevious={props.handlePrevious}
      category={props.category}
      count={props.count}
    />
    <p style={imageAttribution}>Image West Elm</p>
    <Channels
      handleCategory={props.handleCategory}
    />
  </div>
);

export default LivingRoom;
