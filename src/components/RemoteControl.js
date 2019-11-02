import React from 'react';

const remoteControl = {
  border: '2px solid #25262b',
  borderRadius: '70px',
  marginLeft: '1150px', //generate space around element
  height: '100vh',
  backgroundColor: '#e8e9ed',
}

const text = {
  margin: 'auto',
  //width: '50%',
  padding: '10px',
}

const RemoteControl = (props) => (
  <div>
    <div style={remoteControl}>
      <div style={text}>
        <h2><center>Current Channel: Fashion</center></h2>
        <h3><center>Episode: {props.title}</center></h3>
        <h4><center>Created by {props.creator}</center></h4>
        <center>Tweet video submisstions to @hauspeach</center>
      </div>
    </div>
  </div>
);

export default RemoteControl;
