import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.scss';

const IndexPage = () =>
  <div>
    <h1>A B O U T</h1>
    <hr />
    <img className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" />
    <h3>Some text</h3>
    <Link to="/projects/">Go to page 2</Link>
  </div>

export default IndexPage
