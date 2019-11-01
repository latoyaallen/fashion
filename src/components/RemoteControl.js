import React from 'react';
import TV from './TV'
import posts from '../data/posts';

const remoteControl = {
  border: '2px solid #25262b',
  borderRadius: '10px',
  //paddingRight: '10px', //generate space around content
  //marginBottom: '40px', //generate space around element
  marginLeft: '1150px', //generate space around element
  height: '100vh',
  backgroundColor: '#e8e9ed',
}

const nextButton = {
  marginTop: '1000px',
}

const RemoteControl = (props) => (
  <div>
    <div style={remoteControl}>

      <h1><center>Peach Haus TV</center></h1>
      <h2><center>Channel: Fashion </center></h2>
      <h3><center>WHAT EVERYONE IS WEARING IN NEW YORK | FALL TRENDS 2019 </center></h3>
      <h4><center>By KarenBritChick</center></h4>
      <p>Channels:</p>
      <p>Fashion</p>
      <p>Beauty</p>
      <p>Apartment In The City</p>
      <p>Bookish</p>
    </div>
  </div>
);

export default RemoteControl;
