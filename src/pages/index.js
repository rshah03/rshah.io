import React from "react";
import Link from "gatsby-link";
import "../layouts/index.scss";
import { Icon, Grid, Image, Button } from "semantic-ui-react";
import Layout from "../components/layout";

const IndexPage = () =>
  <Layout>
    <div className="animated fadeInLeft">
      <h1>
        P R O J E C T S<Link to="/projects">
          <Icon name="chevron right" />
        </Link>
      </h1>

      <hr />
      <Grid
        className="imageSection"
        centered
        doubling
        stackable
        container
        columns={2}
      >
        <Grid.Column textAlign="center">
          <Image
            className="image"
            className="profileImage"
            src="https://bit.ly/2p8s3jP"
          />
          <br />
          <Button className="resumeButton" basic color="blue" href="/blog">
            B L O G
          </Button>
          <br />
        </Grid.Column>
        <Grid.Column>
          <p className="myName">Hi, I'm Ronak!</p>
          <p className="aboutMe">
            To me, technology evokes a sense of innate curiosity; an intrigue.
            My passion for technology, including programming, is a by-product of
            that curiosity. I have been enamored with the technological world
            since I first hit the power switch on the first PC my family owned
            back in 1998. The potential of what can be accomplished using
            technology is an awe-inspiring thought. As a developer, I pride
            myslef in being able to humbly contribute to the future.
          </p>
        </Grid.Column>
      </Grid>
    </div>;
  </Layout>;

export default IndexPage;
