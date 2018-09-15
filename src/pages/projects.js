import React from 'react'
import Link from 'gatsby-link'
import {
  Grid,
  Card,
  Icon
} from 'semantic-ui-react'
import '../layouts/projects.scss'

const SecondPage = () =>
  <
  div className = "animated fadeInRight" >
  <
  h1 > < Link to = "/" > < Icon name = "chevron left" / > < /Link>P R O J E C T S</h1 > < hr / >
  <
  Grid className = "projectGrid"
centered doubling divided stackable columns = {
    3
  } >
  <
  Grid.Row >
  <
  Grid.Column >
  <
  a href = "https://github.com/rshah03/WeatherUp"
target = "_blank" >
  <
  Card centered >
  <
  Card.Content >
  <
  Card.Header > Weather Up < /Card.Header> <
  Card.Meta > JavaScript / NodeJS(React) < /Card.Meta> <
  Card.Description > A React based, simple weather conglomerate application using Redux
for state management. < /Card.Description> <
  /Card.Content> <
  /Card> <
  /a> <
  /Grid.Column> <
  Grid.Column >
  <
  a href = "https://github.com/rshah03/Minesweeper"
target = "_blank" >
  <
  Card centered >
  <
  Card.Content >
  <
  Card.Header > Minesweeper < /Card.Header> <
  Card.Meta > Java < /Card.Meta> <
  Card.Description > Minesweeper recreated in Java using Swing UI, JUnit
for TDD, and packaged with Gradle. < /Card.Description> <
  /Card.Content> <
  /Card> <
  /a> <
  /Grid.Column> <
  Grid.Column >
  <
  a href = "https://github.com/rshah03/Minesweeper"
target = "_blank" >
  <
  Card centered >
  <
  Card.Content >
  <
  Card.Header > GithubBattle < /Card.Header> <
  Card.Meta > JavaScript(React) < /Card.Meta> <
  Card.Description > The application compares two github profiles and determines a winner / loser based on statistical metrics. < /Card.Description> <
  /Card.Content> <
  /Card> <
  /a> <
  /Grid.Column> <
  /Grid.Row> <
  /Grid> <
  /div>

export default SecondPage