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
      <Card
        src={props.category[0].src}
        height={300}
        width={450}
        title={props.category[0].title}
        creator={props.category[0].creator}
        handleVideo={props.handleVideo}
        id={props.category[0].id}
      />
      <Card
        src={props.category[1].src}
        height={300}
        width={450}
        title={props.category[1].title}
        creator={props.category[1].creator}
        handleVideo={props.handleVideo}
        id={props.category[1].id}
      />
      <Card
        src={props.category[2].src}
        height={300}
        width={450}
        title={props.category[2].title}
        creator={props.category[2].creator}
        handleVideo={props.handleVideo}
        id={props.category[2].id}
      />
    </div>
  </div>
);

export default ContentRow;
