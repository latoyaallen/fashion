import React from 'react';
import Card from './Card';

const contentContainer = {
  display: 'flex',
  paddingLeft: 20,
  paddingBottom: 40,
  marginTop: 20,
}

const categoryTitle ={
  paddingLeft: 20,
  fontSize: 30,
}

const ContentRow = (props) => (
  <div>
    <p style={categoryTitle}>{props.categoryTitle}</p>
    <div style={contentContainer} >
      {props.videos.map(d => (
      <Card
        src={d.src}
        height={300}
        width={450}
        title={d.title}
        creator={d.creator}
        handleVideo={props.handleVideo}
        id={d.id}
        category={d.category}
      />
        ))}
    </div>
  </div>
);

export default ContentRow;
