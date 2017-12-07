import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Template = ({ date, location }) => {
  const { markdownRemark, post } = data;
  const { fronmatter, html } = post;

  return (
    <div>
      {/* dynamic header */}
      <Helmet title={`${title} - My Blog`} />

      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        exerpt
      }
    }
  }
`;