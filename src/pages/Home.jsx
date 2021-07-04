import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import GoogleMap from '../components/GoogleMap';


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
    <div>
    <div className="home">
      
      <h2 >No hay nada mejor que unos ricos tacos</h2>
    </div>
      
      <Grid container >
       
        <Grid item xs={12} sm={8}>
          
        <Box className="Texto" textAlign="justify" m={2}>
          <p>
        ¿Antojos de tacos? te invitamos a nuestra taquería para que disfrutes de un excelente Menu 
        y variedades de tacos y platillos, para todos los gustos.
        </p> <br />
        <p  textAlign="justify" >
        Preparamos alimentos de excelente sabor con el proposito de dar lo mejor a nuetros clientes. 
      </p> <br />
      <p  textAlign="justify" >
        No lo dudes y visitanos. 
      </p>
      
      </Box>
      
        </Grid>

        <Grid  item xs={12} sm={4}   >
          <Paper className={classes.paper} >   
          <Card className={classes.cardss}>
     
        <CardMedia
          className={classes.media}
          image="images/trompo.jpeg"
          title="fogon"
        />
       
    </Card>
    </Paper>
 
        </Grid>
      
        
        
     
      </Grid>
      <Grid  item xs={12} >
        <h2>Ubicación</h2>
        <GoogleMap />
        </Grid>
  

    
    </div>
  );
}


