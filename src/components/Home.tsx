import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import  {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Contents from './Contents';

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

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Router>
              <main className={classes.content}>
                <Header />
                <Switch>
                  <Route exact path="/" component={Contents} />
                </Switch>
              </main>          
        </Router>
      </div>
    );
}