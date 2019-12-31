import React from "react";
import "../layouts/index.scss";
import { Icon, Grid, Button, Message } from "semantic-ui-react";
import Layout from "../components/layout";

const list = ["gRPC", "GoLang", "Docker"];

const IndexPage = () => (
  <Layout>
    <div className="animated fadeInLeft">
      <h1>
        P R O J E C T S
        <a href="/projects">
          <Icon name="chevron right" />
        </a>
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
          <Message header="Technologies I'm Interested in Today" list={list} />
          <br />
          <Button className="resumeButton" basic color="blue" href="/blog">
            B L O G
          </Button>
          <br />
        </Grid.Column>
        <Grid.Column>
          <p className="myName">Hi, I'm Ronak!</p>
          <p className="aboutMe">
            To me, technology evokes a sense of innate curiosity; technology
            provokes an intrigue. My passion for technology, including
            programming, is a by-product of that curiosity. I have been enamored
            with the technological world since I first hit the power switch on
            the first PC my family owned back in 1998. The potential of what can
            be accomplished using technology is an awe-inspiring thought. As a
            developer, I pride myslef in having the opportunity to contribute to
            a better future.
          </p>
        </Grid.Column>
      </Grid>
    </div>
    ;
  </Layout>
);

export default IndexPage;
