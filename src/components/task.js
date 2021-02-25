import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  render() {
    const useStyles = makeStyles({
      root: {
        minWidth: 275,
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
    
    return (
      <div>
        <Card margin={10} className={useStyles.root}>
          <CardContent>
            <Typography
              className={useStyles.title}
              color="textSecondary"
              gutterBottom
            >
              {this.props.task.description}
            </Typography>
            <Typography className={useStyles.pos} color="textSecondary">
              {this.props.task.status} -- 
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.task.responsible.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Task;
