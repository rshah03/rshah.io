import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { Menu, Icon, Grid } from "semantic-ui-react";
import Helmet from "react-helmet";

import "../layouts/index.scss";

const Header = () => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Menu fluid pointing borderless className="navBar">
            <Menu.Menu>
              <Menu.Item className="menuItem nameTitle">
                <h3 className="developerTag">
                  <Icon name="terminal" />
                  <a href="/">Ronak Shah</a>
                </h3>
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
              <Menu.Item className="menuItem">
                <a
                  href="https://github.com/rshah03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size="big" name="github" />
                </a>
              </Menu.Item>
              <Menu.Item className="menuItem">
                <a
                  href="https://www.linkedin.com/in/ronak-shah-03/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size="big" name="linkedin" />
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Ronak Shah"
      meta={[
        { name: "description", content: "A portfolio and blog by Ronak Shah" },
        {
          name: "keywords",
          content:
            "Ronak, Shah, personal, website, portfolio, projects, programming"
        }
      ]}
      link={[
        // {rel: 'stylesheet' href:'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'},
        {
          rel: "stylesheet",
          href:
            "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        },
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Raleway"
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: "auto",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
