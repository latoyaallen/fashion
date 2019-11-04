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
  margin: '-420px 0 0 1230px',
}

const Channels = (props) => (
  <div style={buttonGroup}>
    <button style= {button} onClick={props.handleClick.bind(this, 'lookBooks')}>Look Books</button>
    <button style= {button} onClick={props.handleClick.bind(this, 'vintage')}>Vintage</button>
    <button style= {button} onClick={props.handleClick.bind(this, 'streetStyle')}>Street Style</button>
    <button style= {button} onClick={props.handleClick.bind(this, 'hauls')}>Hauls</button>
    <button style= {button}>Submit a Video</button>
  </div>
);

export default Channels;
