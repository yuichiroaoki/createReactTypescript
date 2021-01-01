import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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

export default function Contents() {
    const classes = useStyles();
  
    return (
        <Container>
            <Typography variant="h1">
                Hello
            </Typography>
        </Container>
    );
  }