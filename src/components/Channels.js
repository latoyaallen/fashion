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

const link ={
  textDecoration: 'none',
  color: 'pink',
}

const email = "peachhaus@allen-labs.com"
const Channels = (props) => (
  <div style={buttonGroup}>
    <button style= {button} onClick={props.handleCategory.bind(this, 'lookBooks')}>Look Books (5)</button>
    <button style= {button} onClick={props.handleCategory.bind(this, 'vintage')}>Vintage (3)</button>
    <button style= {button} onClick={props.handleCategory.bind(this, 'streetStyle')}>Street Style (1)</button>
    <button style= {button} onClick={props.handleCategory.bind(this, 'fashionWeek')}>Fashion Week (6)</button>
    <button style= {button}><a style={link}href={`mailto:${email}`}>Submit A Video</a></button>
  </div>
);

export default Channels;
