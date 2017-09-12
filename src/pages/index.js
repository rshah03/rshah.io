import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.scss';
import { Icon, Grid } from 'semantic-ui-react'

const IndexPage = () =>
  <div className="animated fadeInRight">
    <span><h1>A B O U T<Link to="/projects"><Icon name="chevron right"/></Link></h1></span>
    <hr />
    {/* <img className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" /> */}
    <Grid centered doubling stackable columns={2}>
      <Grid.Row>
        <Grid.Column>
          <img className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" />
        </Grid.Column>
        <Grid.Column>
          <h4 className="aboutMe">My name is Ronak Shah.<br/>I am a senior at the University of Houston, pursuing a degree in Computer Science, with a specification in Software Design and Development.</h4>
          <h4 className="aboutMe">I am a naturally curious technology enthusiast. My passion for programming and general interest in Computer Science is a by-product of that curiosity. From a very young age I have been enamored with technology, and all that it has to offer by way of its limitless potential. It only took one introduction to programming course for me to know that it was what I wanted to do. I strive to be on the cutting-edge of technology and constantly foray into the unknown.</h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>

export default IndexPage
