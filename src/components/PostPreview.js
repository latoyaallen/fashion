import React from 'react';

const Iframe = (props) => (
  <div>
    <iframe
      src={props.src}
      height="415"
      width="475"
      title={props.title}
    />
  </div>
);

const previewContainer = {
  border: '2px solid #25262b',
  borderRadius: '10px',
  padding: '10px' //generate space around content
}

const PostPreview = (props) => (
  <div style={previewContainer}>
    <span>{props.haus} posted by {props.user}</span>
    <h3>{props.title}</h3>
    <Iframe
      src={props.src}
    />
    <p>
      comment share save
    </p>
  </div>
);

export default PostPreview;
