import React from 'react';
import Channels from './Channels'

const remoteControl = {
  border: '2px solid #25262b',
  borderRadius: '70px',
  marginLeft: '1150px', //generate space around element
  height: '100vh',
  backgroundColor: '#e8e9ed',
}

const RemoteControl = (props) => (
  <div>
    <div style={remoteControl}>
      <h1><center>Peach Haus TV</center></h1>
      <h2><center>Channel: {props.fashion}</center></h2>
      <h3><center>{props.title}</center></h3>
      <h4><center>{props.creator}</center></h4>
      <Channels />
    </div>
  </div>
);

export default RemoteControl;
