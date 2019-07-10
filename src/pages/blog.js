import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "../layouts/blog.scss";
import Layout from "../components/layout";
import { graphql } from "gatsby";

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <div className="animated fadeInRight">
          <h1>B L O G</h1>
          <hr />
          <div className="blogBackground">
            <div className="blogList">
              {/* This should be wrapped in a grid. new rows should be created per blog posts */}
              {this.props.data.allMarkdownRemark.edges.map(post =>
                <Button
                  fluid
                  className="blogButton"
                  key={post.node.id}
                  href={post.node.frontmatter.path}
                >
                  {post.node.frontmatter.title}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query indexQUery {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default BlogPage;
