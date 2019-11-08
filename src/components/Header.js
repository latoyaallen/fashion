import React from 'react';

const headerContainer = {
  paddingTop: 5,
  display: 'flex',
}

const buildALook = {
  paddingLeft: 420,
  paddingTop: 30,
}

const logoStyle= {
  paddingLeft: 600,
  fontSize: 30,
}

const instagram = {
  paddingTop: 45,
  paddingLeft: 20,
  textDecoration: 'none',
  color: 'black',
}

const twitter = {
  paddingTop: 45,
  paddingLeft: 20,
  textDecoration: 'none',
  color: 'black',
}


const Header = (props) => (
  <div style={headerContainer}>
    <p style={logoStyle}>
      Peach.Haus
    </p>
    <p style={buildALook} >
      Build A Look
    </p>
    <a
      style={instagram}
      href="https://www.instagram.com/_peach.haus/"
      target="_blank"
      rel="noopener noreferrer">
      Instagram
    </a>
    <p></p>
    <a
      style={twitter}
      href="https://twitter.com/PeachHaus"
      target="_blank"
      rel="noopener noreferrer">
      Twitter
    </a>
  </div>
);

export default Header;
