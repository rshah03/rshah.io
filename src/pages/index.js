import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.scss';
import { Icon, Grid, Image, Button } from 'semantic-ui-react'

const IndexPage = () =>
  <div className="animated fadeInLeft">
    <Grid centered columns={1}>
      <Grid.Column>
        <span><h1>A B O U T<Link to="/projects"><Icon name="chevron right"/></Link></h1></span>
      </Grid.Column>
    </Grid>

    <hr />
    <Grid className="imageSection" centered doubling stackable container columns={2}>
        <Grid.Column textAlign="center">
          <Image className="image" className="profileImage" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAoLAAAAJDlkYzRmYjVjLTJhNDgtNDEyMy04YzZlLTU0ZmZmZTQ4ODkxNg.jpg" />
          <Button className="resumeButton" basic color='green' href="https://drive.google.com/open?id=19t2mzanhr5ghMC5SiPOWk2kLLUnVHjWW" target="_blank">R E S U M É</Button> 
          <br />
          <Link to="/blog"><Button className="resumeButton" basic color="blue">B L O G</Button></Link>
          <br /> 
        </Grid.Column>
        <Grid.Column>
          <p className="myName">Hi, I'm Ronak!</p>
          <p className="aboutMe">I am a senior at the University of Houston, pursuing a degree in Computer Science, with a specification in Software Design and Development. </p>
          <p className="aboutMe">To me, technology evokes a sense of innate curiosity; an intrigue. My passion for programming and general interest in Computer Science is a by-product of that curiosity. I have been enamored with the technological world and all that it has to offer from a very young age. It amazes me with its limitless potential. It only took one introduction to programming course for me to know that it was what I wanted to do, thus establishing my passion. I strive to be on the cutting-edge of technology and constantly foray into the unknown. </p>
        </Grid.Column>
    </Grid>
  </div>

export default IndexPage
