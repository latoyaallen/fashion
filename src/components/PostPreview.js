import React from 'react';

const previewContainer = {
  border: '2px solid #25262b',
  borderRadius: '10px',
}


const PostPreview = (props) => (
  <div style={previewContainer}>
    <span>{props.haus} posted by {props.user}</span>
    <h3>{props.title}</h3>
      comment share save
  </div>
)

export default PostPreview;
