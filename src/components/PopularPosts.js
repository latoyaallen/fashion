import React from 'react';
import PostPreview from './PostPreview'
import posts from '../data/posts';

const contentContainer = {
  maxWidth: '500px',
  margin: 'auto',
  background: 'white',
}

const PopularPosts = (props) => (
  <div style={contentContainer}>
    <h1>New Episodes</h1>
    <div>
      {posts.map(p =>
      <div key={p.id}>
        <PostPreview
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

export default PopularPosts;
