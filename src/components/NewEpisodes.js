import React from 'react';
import Episode from './Episode'
import posts from '../data/posts';

const contentContainer = {
  maxWidth: '500px',
  margin: 'auto',
  background: 'white',
}

const titleText = {
  fontSize: 30,
  paddingLeft: '6px',
}

const NewEpisodes = (props) => (
  <div style={contentContainer}>
    <p style={titleText}>New Episodes</p>
    <div>
      {posts.map(p =>
      <div key={p.id}>
        <Episode
          haus={p.haus}
          user={p.user}
          title={p.title}
          src={p.src}
          date={p.date}
        />
      </div>
      ) }
    </div>
  </div>
);

export default NewEpisodes;
