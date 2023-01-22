import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { createTheme , ThemeProvider } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListIcon from '@mui/icons-material/List';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

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
    const [storyLoading , setStoryLoading] = useState(false);
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
        setStoryLoading(true);
    } , []);

    // pid

    const [pids , setPids] = useState([]);
    const [pidsLoading , setPidsLoading] = useState(false);
    useEffect( () => {
        setPids([
        {
            name: "dayexdream",
            userImage: "img/character1.png",
            pidImage: [ "img/bear1.png" , "img/bear2.png"],
            content : "오늘 하루 나의 상태!",
        },
        {
            name: "readillust",
            userImage: "img/character2.png",
            pidImage: [ "img/cafe1.png"],
            content : "카페는 역시 아메리카no",
        },
        {
            name: "cha_ni_o2o",
            userImage: "img/character3.png",
            pidImage: ["img/car1.png" , "img/car2.png" , "img/car3.png"],
            content : "이것들 사고 말거야",
        },
        {
            name: "lego_ao",
            userImage: "img/character4.png",
            pidImage: ["img/coding1.png" , "img/coding2.png"],
            content : "Coding is my life..AYee",
        },
        {
            name: "zionhann",
            userImage: "img/character5.png",
            pidImage: ["img/four1.png" , "img/four2.png" , "img/four3.png"],
            content : "인생 별거 있나. 4컷이지 뭐",
        },
        {
            name: "shinaee1",
            userImage: "img/character6.png",
            pidImage: ["img/lion1.png" , "img/lion2.png"],
            content : "다들 해피해피설~~",
        },
    ])
    setPidsLoading(true);
    }, [])


    const classes = gridStyles();    
    
    return(
        <Box>
            { storyLoading && pidsLoading ? <Box>
            <ThemeProvider theme={headerTheme}>
                <Header />
                </ThemeProvider>
        
        
        <Box component="div"  sx={{
            display: "grid",
            gap: "2rem",
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

        {/* pid */}
                <Box elevation={3} sx={{ gridArea: 'main' }}>
                    {pids.map(( pid , index) => ( 
                    <Paper elevation={3} key={index} sx={{mb:5}}>
                        <Box sx={{display: "flex", flexDirection:'row' ,border:0 , width:"100%" , justifyContent:'start'}}>
                        <Box sx={{width:"35px", height: "35px",border:0, borderRadius: "50%", overflow: "hidden", m:2}}><img src={pid.userImage} width="100%" height="100%" style={{objectFit:"cover"}} /></Box>
                        <Typography variant="caption" sx={{ fontWeight:'bold',marginY:'auto'}}>{pid.name}</Typography>
                        <ListIcon sx={{marginLeft:'auto' , mt: 3 , mr:2}}/>
                        </Box>
                        <Box>
                        <Box  sx={{display: 'flex', flexDirection: 'row', whiteSpace:'nowrap', overflowX: 'auto'}}>{pid.pidImage.map( (image , index) => (
                                <img key={index} src={image} width="100%" />
                            
                            ))}
                        </Box>
                        </Box>
                        <Box sx={{display : "flex" , flexDirection:'row' ,justifyContent:'start' }}>
                            <FavoriteBorderIcon sx={{mx : 1 , my: 0.5}}/>
                            <ChatBubbleOutlineIcon sx={{mx : 1,my: 0.5}}/>
                            <SendIcon sx={{mx : 1,my: 0.5}}/>
                            <BookmarkBorderIcon sx={{ marginLeft: 'auto' , mr: 1,my: 0.5 ,fontSize:'25px'}} />
                        </Box>
                        <Box>
                        <Box sx={{display:'flex' , alignItems:'center'}}>
                            <Box sx={{width:"15px", height: "15px",border:0, borderRadius: "50%", overflow: "hidden", m:2}}>
                                <img src={pid.userImage} width="100%" height="100%" style={{objectFit:"cover"}} />
                            </Box>
                            <Typography variant="body2"> <strong >min_zzi</strong>님 외 <strong>350명</strong>이 좋아합니다.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" sx={{mx:1}}><strong>{pid.name} </strong> {pid.content}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="gray" sx={{opacity:'0.8' , ml:2 , mt:1}}>댓글 8개 모두 보기</Typography>
                        </Box>
                        <Box sx={{mt:1}}>
                            <Typography variant="caption" color="gray" sx={{opacity:'0.6' , ml:2 , fontSize:"5px"}}> 3시간 전 </Typography>
                        </Box>
                        <hr style={{opacity:'0.5'}}/>
                        <Box sx={{display:"flex" , alignItems:'center'}}>
                            <SentimentSatisfiedAltIcon sx={{ mx: 1}}/>
                            <Typography variant="body2" color="gray" sx={{opacity:'0.8'}}>
                                댓글 달기...
                            </Typography>
                            <Button sx={{marginLeft:'auto' , opacity: '0.4'}}>게시</Button>
                        </Box>
                        
                        </Box>
                    </Paper>

                    )
                    )}
                </Box>            
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