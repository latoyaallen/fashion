import React from 'react';

const headerContainer = {
  paddingTop: 5,
  display: 'flex',
}

const shopYourCloset = {
  paddingLeft: 320,
  paddingTop: 30,
}

const logoStyle= {
  paddingLeft: 600,
  fontSize: 30,
  cursor: 'pointer',
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
    <p style={logoStyle}
      onClick={props.handleHome.bind()}
    >
      Peach.Haus
    </p>
    <p style={shopYourCloset} >
      Shop Your Closet
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
