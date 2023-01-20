import { Box, Grid, Paper } from "@mui/material";
import { display } from "@mui/system";
import React from "react";

function Home(){

    const styles = theme => ({
        root: {
            padding: theme.spacing(1),
            [theme.breakpoints.down('xs')]: {
                gridTemplateAreas: `"story"
                                "main"`,
                gridTemplateColumns: "minmax(0,1fr)" 
            },
            [theme.breakpoints.up('sm')]:{
                gridTemplateAreas: `"story"
                                "main"`,
                gridTemplateColumns: "minmax(0,1fr)" 
            },
            [theme.breakpoints.up('md')]:{
                gridTemplateAreas: `"story sidebar"
                                "main sidebar"`,
                gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)"  
            },
        },
    });
    
    return(
        <Box styles={styles}  sx={{
            display: "grid",
            gap: "3rem",
            width:"50%",
            margin: "auto",
            // gridTemplateAreas: `"story sidebar"
            //                     "main sidebar"`,
            // gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)"                 
           }}>
                
                
                
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