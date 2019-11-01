import React from 'react';
import TV from './TV'
import RemoteControl from './RemoteControl'
import fashionAndStyle from '../data/fashionAndStyle';

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
    <p style={imageAttribution}>Image Attribution: West Elm</p>
    <RemoteControl
      currentChannel={"Fashion"}
      title={fashionAndStyle[0]["title"]}
      creator={fashionAndStyle[0]["creator"]}
    />
  </div>
);

export default LivingRoom;
