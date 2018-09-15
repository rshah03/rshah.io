import React from "react";
import Link from "gatsby-link";
import "../layouts/index.scss";
import { Icon, Grid, Image, Button } from "semantic-ui-react";
import Layout from "../components/layout";

const IndexPage = () =>
  <Layout>
    <div className="animated fadeInLeft">
      <Grid centered columns={1}>
        <Grid.Column>
          <span>
            <h1>
              A B O U T<Link to="/projects">
                <Icon name="chevron right" />
              </Link>
            </h1>
          </span>
        </Grid.Column>
      </Grid>

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
            src="https://media.licdn.com/dms/image/C5603AQEIbibKyqRAWQ/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=eCXOhcm3t7Wa1jo__uhuXXy10_VvJJE6DO6WjE7Wa7I"
          />
          <br />
          <Button className="resumeButton" basic color="blue" href="/blog">
            B L O G
          </Button>
          <br />,
        </Grid.Column>
        <Grid.Column>
          <p className="myName">Hi, I'm Ronak!</p>
          <p className="aboutMe">
            To me, technology evokes a sense of innate curiosity; an intrigue.
            My passion for programming and general interest in Computer Science
            is a by-product of that curiosity. I have been enamored with the
            technological world and all that it has to offer from a very young
            age. It amazes me with its limitless potential. It only took one
            introduction to programming course for me to know that it was what I
            wanted to do, thus establishing my passion. I strive to be on the
            cutting-edge of technology and constantly foray into the unknown.{" "}
          </p>
        </Grid.Column>
      </Grid>
    </div>;
  </Layout>;

export default IndexPage;
