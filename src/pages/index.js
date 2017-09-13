import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.scss';
import { Icon, Grid, Image } from 'semantic-ui-react'

const IndexPage = () =>
  <div className="animated fadeInLeft">
    <span><h1>A B O U T<Link to="/projects"><Icon name="chevron right"/></Link></h1></span>
    <hr />
    {/* <img className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" /> */}
    <Grid className="imageSection" centered doubling stackable container columns={2}>
      {/* <Grid.Row className="imageSection"> */}
        <Grid.Column>
          <Image className="image" className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" />
        </Grid.Column>
        <Grid.Column>
          <p className="myName">Hi, I'm Ronak!</p>
          <p className="aboutMe">I am a senior at the University of Houston, pursuing a degree in Computer Science, with a specification in Software Design and Development. </p>
          <p className="aboutMe">I am a naturally curious technology enthusiast. My passion for programming and general interest in Computer Science is a by-product of that curiosity. From a very young age I have been enamored with technology, and all that it has to offer by way of its limitless potential. It only took one introduction to programming course for me to know that it was what I wanted to do. I strive to be on the cutting-edge of technology and constantly foray into the unknown. </p>
        </Grid.Column>
      {/* </Grid.Row> */}
    </Grid>
  </div>

export default IndexPage
