import { makeStyles } from "@material-ui/core";
import { Box, Grid, Paper } from "@mui/material";
import { createTheme, display, ThemeProvider } from "@mui/system";
import React from "react";
const gridStyles = makeStyles((theme) => ({
    root: {
        // padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            gridTemplateAreas: `"story"
                            "main"`,
            gridTemplateColumns: "100%" 
        },
        [theme.breakpoints.up('sm')]:{
            gridTemplateAreas: `"story"
                            "main"`,
            gridTemplateColumns: "100%" 
        },
        [theme.breakpoints.up('md')]:{
            gridTemplateAreas: `"story sidebar"
                            "main sidebar"`,
            gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)"  
        },
    }
}));

function Home(){
    const classes = gridStyles();    
    
    return(
        
        <Box component="div"  sx={{
            display: "grid",
            gap: "3rem",
            width:"60%",
            margin: "auto",
            
            // gridTemplateAreas: `"story sidebar"
            //                     "main sidebar"`,
            // gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)"                 
           }}
           className={classes.root}>
                
                
                
                <Paper elevation={3} sx={{ gridArea : 'story' ,  height:"100px" , mt:15 }}>


                </Paper>
                
                
                <Paper elevation={3} sx={{ gridArea: 'main'  , height:"2500px"}}>


                </Paper>
                

                <Paper elevation={3} sx={{ gridArea: 'sidebar',maxHeight:"300px", mt: 20}}>

                </Paper>
        </Box>
        
        
    );
}

export default Home;