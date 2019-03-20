import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Paper, Button } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Cards from "./components/Card";

let style = {
  card1: {
    margin: "20px auto",
    maxWidth: "280px"
  },
  card2: {
    margin: "20px auto",
    maxWidth: "280px"
  }
};

class App extends Component {
  state = {
    today: {
      text: "Today",
      details: "23 Celcius"
    },
    tommorow: {
      text: "Tommorrow",
      details: "22 Celcius"
    }
  };
  loadContent = () => {
    console.log("button clicked");
  };
  render() {
    return (
      <div>
        <NavBar />
        <Grid container spacing={5}>
          <Grid item xs={6} style={style.card1}>
            <Cards data={this.state.today} onLoad={this.loadContent} />
          </Grid>
          <Grid item xs={6} style={style.card2}>
            <Cards data={this.state.tommorow} onLoad={this.loadContent} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
