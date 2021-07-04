import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Typography, Box} from '@material-ui/core';
import "./Servicios.css"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    
    
  },
  papericons: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 500,
  },
}));

function About() {
    const classes = useStyles();
    return (
    <div className="App ">
        <header className="App-header  ">
        <Grid container   >
        
        <Grid item xs={12} sm={8} >
        
          <Paper className={classes.paper} variant="outlined"  >
              <Typography>
          <Typography variant='h4'  >
           <Box className="about" fontWeight="fontWeightBold"   m={3} letterSpacing={2}   >
           Servicio de taquizas
          </Box></Typography>
          <Box  p={1} letterSpacing={1}   >
          <p  className="text" align="justify" >Tambien contamos con servicios de taquizas a domicilio
          para tus mejores eventos, festivales, ceremonias, fiestas, convenciones u otro tipo de reunione con
          los  ricos tacos, quesadillas, gringas de pastor, incluye todo el servicio
          completo como son las Salsas, verduras, y nosotros mismos despachamos. </p>
        
            </Box>
            </Typography>
          </Paper>
        </Grid>


        <Grid item xs={12} sm={4}>
        
          <div className="galeriaservi">
          
          <div className="columnaservigrid">
          <img src="/images/papa.jpg" alt="" />
          
        </div>
  </div>   
  
        </Grid>

        <Grid item xs={12} >
       
       
     
          <div className="galeriaservi">
          
          <div className="columnaservi">
          <img src="/images/servi2.jpg" alt="" />
        </div>
        <div className="columnaservi">
          <img src="/images/servi2.jpg" alt="" />
        </div>
        <div className="columnaservi">
          <img src="/images/tac1.jpg" alt="" />
        </div>
        
  </div>   
        
        </Grid>
        
      </Grid>
      
        </header>
    </div>
    )
}

export default About;

