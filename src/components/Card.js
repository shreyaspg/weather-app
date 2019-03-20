import React, { Component } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
const styles = {
  card: {
    minWidth: 100,
    maxWidth: 300
  },
  button: {
    margin: "20px auto"
  }
};
class Cards extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
    this.state = {
      text: this.props.data.text,
      details: this.props.data.details
    };
  }

  render() {
    console.log("Card props", this.props);
    return (
      <div>
        <Card style={this.props.style}>
          <CardContent>
            <Typography variant="h3">{this.state.text}</Typography>
            <hr />
            <Typography variant="h5">{this.state.details}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => this.props.onLoad()}
              style={styles.button}
              size="small"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Cards;
