// import { Label } from "@material-ui/icons";
// import { Label } from "@mui/icon-material";
// import { Typography } from "@material-ui/core";
import { Box, Button, Grid,Typography ,Paper } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GridViewIcon from '@mui/icons-material/GridView';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import SettingsIcon from '@mui/icons-material/Settings';
import React from "react";

import { createTheme , ThemeProvider } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const headerTheme = createTheme({
    typography: {
        fontFamily: "'Dancing Script', cursive",
        fontSize : 15,
    },
})

function Profile(){

    return(
        <Box>
            <ThemeProvider theme={headerTheme}>
                <Header />
                </ThemeProvider>
        <Grid container spacing={2} sx={{width:"80%" , margin:"Auto" , my: 10}}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                }}
            >
                <Box id="profile-leftBox-photo" sx={{ width: 150 , height: 150, border: 1 ,borderRadius:"50%" , mx : { md:10} , mr: {md:10 ,xs:2} ,my:2 , overflow:'hidden'}}>
                    <img src="img/inhyuk.png" width="100%" height="100%" style={{objectFit:'cover'}}/>
                </Box>
                <Box id="profile-rightBox">
                    <Box id="profile-englishName" sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    minWidth: {md:"300px" , xs:"250px"}
                    
                    }}>
                        <Typography variant="h5" sx={{py:3 , fontWeight:"lighter" ,fontFamily:"Monospace"}}>Inhyuk</Typography>
                        <Button color="inherit" size="medium" variant="text" sx={{ width: "100px" , height:"40px", marginY: "auto",color:"gray"}}>프로필 편집</Button>
                        <SettingsIcon sx={{ marginY: "auto", color:"gray"}}/>
                        </Box>
                    <Box id="profile-follower" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    minWidth:{md:"300px" , xs:"250px"}
                    }}>
                        <Box>게시물 0</Box>
                        <Box>팔로워 268</Box>
                        <Box>팔로우 278</Box>
                        </Box>
                    <Box id="profile-koreanName" sx={{ my : 3}}><Typography variant="body2" sx={{fontWeight: 'medium'}}>오인혁</Typography></Box>
                </Box>
            </Box>
            <Grid item xs={12}>
            
            <Box id="story" sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    p: 2
                    }}>
                        <Box id="story-1" sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{border:0 , borderRadius:"50%" , width: { md:"80px" , xs:"50px"} , height:{ md:"80px" , xs:"50px"} ,mx: {md: 3 , xs:1} , overflow:'hidden'}}>
                            <img src="img/p1.png" width="100%" height="100%" style={{objectFit:'cover'}}/>
                            </Box>
                            <Typography variant="caption" sx={{py:1,fontWeight:"bold", textAlign:'center'}}>22-2</Typography>    
                        </Box>
                        <Box id="story-1" sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{border:0 , borderRadius:"50%" ,width: { md:"80px" , xs:"50px"} , height:{ md:"80px" , xs:"50px"}  ,mx: {md: 3 , xs:1}, overflow:'hidden'}}>
                            <img src="img/p2.png" width="100%" height="100%" style={{objectFit:'cover'}}/>
                            </Box>
                            <Typography variant="caption" sx={{py:1,fontWeight:"bold", textAlign:'center'}}>22-1</Typography>    
                        </Box>
                        <Box id="story-1" sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{border:0 , borderRadius:"50%" , width: { md:"80px" , xs:"50px"} , height:{ md:"80px" , xs:"50px"}  ,mx: {md: 3 , xs:1}, overflow:'hidden'}}>
                            <img src="img/p3.png" width="100%" height="100%" style={{objectFit:'cover'}}/>
                            </Box>
                            <Typography variant="caption" sx={{py:1,fontWeight:"bold", textAlign:'center'}}>민지</Typography>    
                        </Box>
                        <Box id="story-1" sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{border:0 , borderRadius:"50%" , width: { md:"80px" , xs:"50px"} , height:{ md:"80px" , xs:"50px"}  ,mx: {md: 3 , xs:1}, overflow:'hidden'}}>
                            <img src="img/lion1.png" width="100%" height="100%" style={{objectFit:'cover'}}/>
                            </Box>
                            <Typography variant="caption" sx={{py:1,fontWeight:"bold", textAlign:'center'}}>운동</Typography>    
                        </Box>
            </Box>
            </Grid>
            <Grid item xs={12}>

                <Box id="board-saved-taged" sx={{ display: 'flex', justifyContent: 'center', borderTop :1 ,borderColor:"lightGray" , margin:"auto"
                    }}>
                    <Typography variant="caption" sx={{mx: 4 , my: 2 }}><GridViewIcon sx={{ mr: 0.5 ,fontSize:"15px" ,verticalAlign: "middle"}} />게시물</Typography>
                    <Typography variant="caption" sx={{mx: 4 , my: 2}}><BookmarkBorderIcon sx={{mr: 0.5,fontSize:"15px" ,verticalAlign: "middle"}} />저장됨</Typography>
                    <Typography variant="caption" sx={{mx: 4 , my: 2}}><RememberMeIcon sx={{mr: 0.5,fontSize:"15px" ,verticalAlign: "middle"}}/>태그됨</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <img src="img/board.png" width="100%"></img>
                </Box>
            </Grid>
        </Grid>
        <Footer />
        </Box>
    );
}

export default Profile;