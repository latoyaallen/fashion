import React from 'react';
import TV from './TV'
import RemoteControl from './RemoteControl'
import fashionAndStyle from '../data/fashionAndStyle';
import Channels from './Channels'

const imageAttribution = {
  position: 'fixed',
  bottom: 0,
  color: 'black',
}

const LivingRoom = (props) => (
  <div>
    <TV
      src={fashionAndStyle[0]["src"]}
    />
    <Channels/>
    <p style={imageAttribution}>Image Attribution: West Elm</p>
  </div>
);

export default LivingRoom;
