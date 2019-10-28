import React from 'react';

const previewContainer = {
  border: '2px solid #25262b',
  borderRadius: '10px',
  padding: '10px' //generate space around content
}

const linkText = {
  textDecoration: 'none',
  color: 'black',
}

const PostPreview = (props) => (
  <div style={previewContainer}>
    <span>{props.haus} posted by {props.user}</span>
    <a
      style={linkText}
      className="App-link"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
    <h3>{props.title}</h3>
    </a>
    <p>
      comment share save
    </p>
  </div>
);

  export default PostPreview;
