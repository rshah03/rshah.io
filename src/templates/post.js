import React from 'react';
import Helmet from 'react-helmet';
import { Button, Icon } from 'semantic-ui-react'
import './post.scss';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div className="postPage">
      <Button
        color="blue"
        className="backButton"
        icon="left chevron"
        href="/blog"
      />

        
      <div className="postArea">
        <h1>
          {post.frontmatter.title}
        </h1>
        <div className="bodyText" dangerouslySetInnerHTML={{__html: post.html}} />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`