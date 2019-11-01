import React from 'react';

const remoteControl = {
  border: '2px solid #25262b',
  borderRadius: '10px',
  marginLeft: '1150px', //generate space around element
  height: '100vh',
  backgroundColor: '#e8e9ed',
}

const RemoteControl = (props) => (
  <div>
    <div style={remoteControl}>

      <h1><center>Peach Haus TV</center></h1>
      <h2><center>Channel: Fashion </center></h2>
      <h3><center>WHAT EVERYONE IS WEARING IN NEW YORK | FALL TRENDS 2019 </center></h3>
      <h4><center>By KarenBritChick</center></h4>
      <p>Channels:</p>
      <p>Fashion and Style</p>
      <p>Skincare</p>
      <p>Curls</p>
      <p>Apartment In The City</p>
      <p>Book Lovers</p>
    </div>
  </div>
);

export default RemoteControl;
