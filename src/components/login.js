import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "../css/login.css";
import { Typography } from "@material-ui/core";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      password: null,
    };
  }
  render() {
    return (
      <Container component="main" className="container" fixed>
        <CssBaseline></CssBaseline>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className="img"
              component="img"
              image="https://previews.123rf.com/images/seamartini/seamartini1504/seamartini150400058/38290896-silueta-de-la-cabeza-cient%C3%ADfico-pensando-en-la-investigaci%C3%B3n-qu%C3%ADmica-con-engranajes-cerebrales-y-burbujas-d.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography className="text-center" variant="h5" component="h2">
                TASK PLANNER
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <form noValidate>
                  <TextField
                    type="text"
                    id="username"
                    label="Username"
                    style={{ margin: 12 }}
                    fullWidth
                  />
                  <TextField
                    id="password"
                    type="password"
                    label="password"
                    fullWidth
                    style={{ margin: 12 }}
                  />
                  <Button variant="contained" color="primary">
                    LOGIN
                  </Button>
                </form>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    );
  }
}

export default Login;
