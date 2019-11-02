import React from 'react';
import TV from './TV'
import Channels from './Channels'
import pamper from '../data/pamper';
import fallStyle from '../data/fallStyle';
import makeup from '../data/makeup';
import hair from '../data/hair';

const imageAttribution = {
  position: 'fixed',
  bottom: -20,
  color: 'black',
}

const getCategory = (category, count) => {
  var size = count
  if(category === 'fallStyle') {
    const length = fallStyle.length;
    if(count >= fallStyle.length) {
      size = count - 1;
    }
    console.log(fallStyle[size]);
    return fallStyle[size]["src"];
  }
  if(category === 'pamper') {
    return pamper[0]["src"];
  }
  if(category === 'makeup') {
    return makeup[0]["src"];
  }
  if(category === 'hair') {
    return hair[0]["src"];
  }
}
const LivingRoom = (props) => (
  <div>
    <TV
      src={getCategory(props.category, props.count)}
      handleNext={props.handleNext}
    />
    <p style={imageAttribution}>Image West Elm</p>
    <Channels
      handleClick={props.handleClick}
    />
  </div>
);

export default LivingRoom;
