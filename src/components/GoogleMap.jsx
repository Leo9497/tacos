import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            
          <iframe width="472" height="400" 
           frameborder="0" scrolling="no" marginheight="0" 
           marginwidth="0" id="gmap_canvas" 
           src="https://maps.google.com/maps?width=472&amp;height=281&amp;hl=en&amp;q=Plutarco%20El%C3%ADas%20calles,%20San%20Jos%C3%A9%20Iturbide,%20Guanajuato,%20Mexico%20Guanajuato+(San%20Jos%C3%A9%20Iturbide,%20Guanajuato,%20Mexico)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
          
           <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=edb2a9fc7679ed042cd446e21ccbf4de41354597'></script>
          </Paper>
        </Grid>
        
      
      
      </Grid>
    </div>
  );
}
