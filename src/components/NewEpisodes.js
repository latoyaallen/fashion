import React from 'react';
import Episode from './Episode'
import posts from '../data/posts';

const contentContainer = {
  maxWidth: '500px',
  margin: 'auto',
  background: 'white',
}

const NewEpisodes = (props) => (
  <div style={contentContainer}>
    <h1>New Episodes</h1>
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
