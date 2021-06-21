import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GoogleMap from '../components/GoogleMap';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
    cardss: {
      maxWidth: 480,
    },
    media: {
      height: 440,
    },
    titulo: {
      height: 10,
      maxWidth: 400,
    },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
       
        <Grid item xs={12} sm={8}>
          
        <Box className="Texto" textAlign="justify" m={2}>
        ¿Antojos de tacos? Ven con nosotros en la taquería el fogoncito donde les ofrecemos gran
        variedad de tacos.
      </Box>
        </Grid>

        <Grid  item xs={12} sm={4}   >
          <Paper className={classes.paper} >   <Card className={classes.cardss}>
     
        <CardMedia
          className={classes.media}
          image="images/trompo.jpeg"
          title="fogon"
        />
       
    </Card>
    </Paper>
 
        </Grid>
        <Grid  item xs={12} >
        <h2>Ubicación</h2>
        <GoogleMap />
        </Grid>
        
        
     
      </Grid>
      
    </div>
  );
}


