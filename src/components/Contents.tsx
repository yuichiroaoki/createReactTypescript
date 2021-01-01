import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      backgroundColor: 'green'
    },
    title: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      height: '100vh', 
      overflow: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
}));

export default function SimplePaper() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
      </div>
    );
  }