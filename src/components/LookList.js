import React from 'react';

const LookList = (props) => (
  <div>
    <h2>What you need to recreate these looks</h2>
    <h2>Coats and Jackets</h2>
    {props.coatsAndJackets.map(d => (
      <p>{d}</p>
    ))}
    <h2>Tops</h2>
    {props.tops.map(d => (
      <p>{d}</p>
    ))}
    <h2>Bottoms</h2>
    {props.bottoms.map(d => (
      <p>{d}</p>
    ))}
    <h2>Jewelry and Accessories</h2>
    {props.jewelryAndAccessories.map(d => (
      <p>{d}</p>
    ))}
    <h2>Shoes</h2>
    {props.shoes.map(d => (
      <p>{d}</p>
    ))}
  </div>
);

export default LookList;
