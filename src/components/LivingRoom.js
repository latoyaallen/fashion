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

const getCategory = (category, count) => {
  if(category === 'streetStyle') {
    return streetStyle[0]["src"];
  }
  if(category === 'lookBooks') {
    return lookBooks[0]["src"];
  }
  if(category === 'vintage') {
    return vintage[0]["src"];
  }
  if(category === 'hauls') {
    return hauls[0]["src"];
  }
}
const LivingRoom = (props) => (
  <div>
    <TV
      src={getCategory(props.category, props.count)}
      handleNext={props.handleNext}
      handlePrevious={props.handlePrevious}
    />
    <p style={imageAttribution}>Image West Elm</p>
    <Channels
      handleClick={props.handleClick}
    />
  </div>
);

export default LivingRoom;
