import React from 'react';

const button = {
  width: '50%',
  height: '50%',
  backgroundColor: '#86bbc2',
  color: 'white',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  border: '1px solid #25262b',
  borderRadius: '7px',
  display: 'block',
}

const buttonGroup = {
  position: 'absolute',
  width: '300px',
  height: '200px',
  margin: '120px 0 0 1230px',
}

const Channels = (props) => (
  <div style={buttonGroup}>
    <button style= {button} onClick={props.handleClick.bind(this, 'fallStyle')}>Fall Style</button>
    <button style= {button} onClick={props.handleClick.bind(this, 'makeup')}>Makeup</button>
    <button style= {button} onClick={props.handleClick.bind(this, 'hair')}>Hair</button>
    <button style= {button} onClick={props.handleClick.bind(this, 'pamper')}>Pamper</button>
    <button style= {button}>Submit a Video</button>
  </div>
);

export default Channels;
