import React from 'react';
import Card from './Card';
import getCategory from '../lib/getCategory';

const contentContainer = {
  display: 'flex',
  paddingLeft: 20,
  paddingBottom: 20,
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
      />
      <Card
        src={props.category[1].src}
        height={300}
        width={450}
        title={props.category[1].title}
        creator={props.category[1].creator}
      />
      <Card
        src={props.category[2].src}
        height={300}
        width={450}
        title={props.category[2].title}
        creator={props.category[2].creator}
      />
    </div>
  </div>
);

export default ContentRow;
