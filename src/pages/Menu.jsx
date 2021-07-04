import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./MenuImg.css"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.error,
  },
  cardss: {
    maxWidth: 370,
    maxHeight: 280,
  },
  media: {
    height: 180,
    maxWidth: '100%',
  },
  
 
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <h1>Menu</h1>
      <Grid container 

      >
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardActionArea  >
      <CardContent  className="menuBox">
          <Typography  gutterBottom variant="h5" component="h2">
          <Box  fontWeight="fontWeightBold" letterSpacing={2}> Tacos</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/tacos.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Alambres</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
      <CardActionArea >
      <CardContent className="menuBox">
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Alambres</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/alambre.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Alambres</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12}sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
      <CardActionArea>
      <CardContent className="menuBox">
          <Typography  gutterBottom variant="h5" component="h2">
          <Box  fontWeight="fontWeightBold" letterSpacing={2}>Especialidades</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/tacos.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Especialidades</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
      <CardActionArea>
      <CardContent className="menuBox">
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Sincronizadas</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/sincro.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Sincronizadas</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <Card className={classes.root}>
      <CardActionArea>
      <CardContent className="menuBox">
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Quesos fundidos</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/quesofundido.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Quesos fundidos</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
      <CardActionArea>
      <CardContent className="menuBox">
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Papas rellenas</Box> 
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/papas.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Papas rellenas</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
      <CardActionArea>
      <CardContent className="menuBox">
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Tortas</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/torta.jpg"
        >
                <figure>
               <div className="capa">
                    <h3>Tortas</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.root}>
      <CardActionArea>
      <CardContent className="menuBox">
          <Typography gutterBottom variant="h5" >
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Frijoles charros</Box>
          </Typography>
        </CardContent>
        <div className="contenedor">
      <div className="capa">
      <CardMedia
          image="/images/frijoles.jpg"
         
        >
                <figure>
               <div className="capa">
                    <h3>Frijoles charros</h3>
                    <p>* Pastor</p>
                    <p>* Bistec</p>
                    <p>* Costilla</p>
                    <p>* Chuleta</p>
                    <p>* Chorizo</p>
                    <p>* Campechana</p>
                    <p>* Vaquera</p>
                </div>
                </figure>
        </CardMedia>
          
         </div>
         </div>
      </CardActionArea>
    </Card>

    
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
