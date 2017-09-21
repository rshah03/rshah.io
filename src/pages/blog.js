import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Icon, Grid, Button } from 'semantic-ui-react'

class BlogPage extends Component {
  render() {
    return (
      <div>
        <h1><Link to="/projects"><Icon name="chevron left"/></Link>B L O G</h1>
        <hr />
      </div>
    );
  }
}

export default BlogPage;