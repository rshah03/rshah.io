import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.scss';
import { Icon } from 'semantic-ui-react'

const IndexPage = () =>
  <div>
    <span><h1>A B O U T<Link to="/projects"><Icon name="chevron right"/></Link></h1></span>
    <hr />
    <img className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" />
    <h3>Some text</h3>
    <Link to="/projects/">Go to page 2</Link>
  </div>

export default IndexPage
