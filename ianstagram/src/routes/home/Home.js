import { makeStyles } from "@material-ui/core";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { createTheme , ThemeProvider } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const headerTheme = createTheme({
    typography: {
        fontFamily: "'Dancing Script', cursive",
        fontSize : 15,
    },
})

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

    // story

    const [stories , setStories] = useState([]);
    const [Loading , setLoading] = useState(false);
    useEffect(() => {
        setStories([
            {
                name : "hk_is_hakyoung",
                image : "img/calvin.png"
            },
            {
                name : "yeOng.jo",
                image : "img/github.png"
            },
            {
                name : "smallest_ju",
                image : "img/instagram.png"
            },
            {
                name : "0310_jhn",
                image : "img/kakao.png"
            },
            {
                name : "kang.garam",
                image : "img/kangol.png"
            },
            {
                name : "issac_kim",
                image : "img/lacoste.png"
            },
            {
                name : "hyodo_hee",
                image : "img/react.png"
            }
        ]);
        setLoading(true);
    } , []);

    // pid

    const [pids , setPids] = useState([]);

    useEffect( () => {
        
    }, [])


    const classes = gridStyles();    
    
    return(
        <Box>
            { Loading ? <Box>
            <ThemeProvider theme={headerTheme}>
                <Header />
                </ThemeProvider>
        
        
        <Box component="div"  sx={{
            display: "grid",
            gap: "3rem",
            width:"60%",
            margin: "auto",            
           }}
           className={classes.root}>
                <Paper elevation={3} sx={{ gridArea : 'story' ,  height:"110px" , mt:10 , display: 'flex', flexDirection: 'row', whiteSpace:'nowrap', overflowX: 'auto' }}>
                    {stories.map( (story, index) => (
                        <Box key={index} sx={{ border : 0 , width : "300px" , marginY:'auto', mx:1 , marginY:'auto'}}>
                            <Box sx={{width:"52px" , height:"52px" , p:0.2,border:2, borderColor:'#FF007F' , borderRadius:"50%" , marginX:'auto' }}><Box sx={{ width:"50px" , height:"50px" ,border:0 , borderRadius: "100%" , overflow:'hidden', marginX:'auto'}}><img src={story.image}  width="100%" height="100%" style={{objectFit:"cover"}} /></Box></Box>
                            <Typography variant="caption" sx={{textAlign:'center'}}>{story.name.length > 8 ? story.name.slice(0,8) + "..." : story.name}</Typography>
                         </Box>
                    ))}
                </Paper>
                <Paper elevation={3} sx={{ gridArea: 'main'  , height:"2500px"}}>
                </Paper>            
                <Paper elevation={3} sx={{ gridArea: 'sidebar',maxHeight:"300px", mt: 20}}>
                </Paper>
        </Box>
            
            <Footer />
            </Box> 
            : <Box>loading...</Box>}
        </Box>
                    );
}

export default Home;