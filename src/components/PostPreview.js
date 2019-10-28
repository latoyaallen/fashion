import React from 'react';
import daysAgo from '../lib/daysAgo';

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

const textSize = {
  fontSize: '15px',
}

//const today = new Date();
////const t = today.toString().substring(4,15);
//const datePosted = "Mon Oct 28 2019" //'2019-10-28'


//const postedDaysAgo = daysAgo( today, datePosted)

const PostPreview = (props) => (
  <div style={previewContainer}>
    <span>{props.haus}</span>
    <p style={textSize} >Posted by {props.user} 1 day ago</p>
    <h3>{props.title}</h3>
    <Iframe
      src={props.src}
    />
  </div>
);

export default PostPreview;
