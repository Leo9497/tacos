import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';





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
    maxWidth: 370,
  },
  media: {
    height: 180,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>Menu</h1>
      <Grid container 

      >
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
          <Box  fontWeight="fontWeightBold" letterSpacing={2}> Tacos</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/titulo.png"
          title="Alambres"
        />
      </CardActionArea>
    </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Alambres</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Tacos"
        />
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12}sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
          <Box  fontWeight="fontWeightBold" letterSpacing={2}>Especialidades</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Tacos"
        />
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Sincronizadas</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Tacos"
        />
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Quesos fundidos</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Alambres"
        />
      </CardActionArea>
    </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Papas rellenas</Box> 
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Tacos"
        />
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography className="color"  gutterBottom variant="h5" component="h2">
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Tortas</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Tacos"
        />
      </CardActionArea>
    </Card>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>

          <Card className={classes.cardss}>
      <CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" >
          <Box fontWeight="fontWeightBold" letterSpacing={2}>Frijoles charros</Box>
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/fogon.jpg"
          title="Tacos"
        />
      </CardActionArea>
    </Card>

    
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
