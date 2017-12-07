import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext;
  console.log(posts);

  if (posts) {
    return (
      <div>
        <span>Posts about {tagName}:</span>

        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Tags;
