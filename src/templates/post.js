import React from "react";
import Helmet from "react-helmet";
import { Button, Icon } from "semantic-ui-react";
import "./post.scss";
import Layout from "../components/layout";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div className="postPage animated fadeIn">
        <Button
          color="blue"
          className="backButton"
          icon="left chevron"
          href="/blog"
        />

        <div className="postArea animated slideInUp">
          <h1>
            {post.frontmatter.title}
          </h1>
          <div
            className="bodyText"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
