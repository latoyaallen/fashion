import React from 'react';
import TV from './TV'
import posts from '../data/posts';

const contentContainer = {
  background: 'white',
}

const imageAttribution = {
  position: 'fixed',
  bottom: 0,

}

const LivingRoom = (props) => (
  <div style={contentContainer}>
    <TV
      src={posts[0]["src"]}
    />
    <p style={imageAttribution}>Image Attribution: West Elm</p>
  </div>
);

export default LivingRoom;
