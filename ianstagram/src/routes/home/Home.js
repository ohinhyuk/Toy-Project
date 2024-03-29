import { makeStyles } from "@material-ui/core";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createTheme , ThemeProvider } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListIcon from '@mui/icons-material/List';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { grid } from "@mui/system";

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
            gridTemplateColumns: "minmax(0,2fr) minmax(0,1.3fr)"  
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
                image : "img/calvin.png",
                storyImage : "img/story1.png"
            },
            {
                name : "yeOng.jo",
                image : "img/github.png",
                storyImage : "img/story2.png"
            },
            {
                name : "smallest_ju",
                image : "img/instagram.png",
                storyImage : "img/story3.png"
            },
            {
                name : "0310_jhn",
                image : "img/kakao.png",
                storyImage : "img/story4.png"
            },
            {
                name : "kang.garam",
                image : "img/kangol.png",
                storyImage : "img/story5.png"
            },
            {
                name : "issac_kim",
                image : "img/lacoste.png",
                storyImage : "img/story6.png"
            },
            {
                name : "hyodo_hee",
                image : "img/react.png",
                storyImage : "img/story1.png"
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

    // user

    const user = {
        id : "Inhyuk_52",
        name : "오인혁",
    }

    const recommendation = [{
      name : 'kimyuhyuk0406',
      image : 'img/newjeans1.png',
    },
    {
        name : 'min_zzi',
        image : 'img/newjeans2.png',
    },
    {
    name : 'hello_world',
    image : 'img/newjeans3.png',
    },
    {
    name : 'hello_ianstagram',
    image : 'img/newjeans4.png',
    },
    {
    name : 'minsu_0908',
    image : 'img/newjeans5.png',
    },
]


    const classes = gridStyles();    
    
    return(
        <Box>
            { storyLoading && pidsLoading ? <Box>
            <ThemeProvider theme={headerTheme}>
                <Header />
                </ThemeProvider>
        
        {/* story */}
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
                            <Link key={index} to="../story" style={{textDecoration: 'none', color: 'none'}} state={{
                            name: story.name,
                            image: story.image,
                            storyImage: story.storyImage
                        }}>
                            <Box sx={{width:"52px" , height:"52px" , p:0.2,border:2, borderColor:'#FF007F' , borderRadius:"50%" , marginX:'auto' }}><Box sx={{ width:"50px" , height:"50px" ,border:0 , borderRadius: "100%" , overflow:'hidden', marginX:'auto'}}><img src={story.image}  width="100%" height="100%" style={{objectFit:"cover"}} /></Box></Box>
                            <Typography variant="caption" sx={{textAlign:'center'}}>{story.name.length > 8 ? story.name.slice(0,8) + "..." : story.name}</Typography>
                            </Link>
                         </Box>

                         
                    ))}
                </Paper>

        {/* pid */}
                <Box elevation={3} sx={{ gridArea: 'main' }}>
                    {pids.map(( pid , index) => ( 
                        <Link key={index} to="../detail" style={{textDecoration: 'none', color: 'none'}} state={{
                            name: pid.name,
                            userImage : pid.userImage,
                            pidImage: pid.pidImage,
                            content: pid.content 
                         }}>
                    <Paper elevation={3} sx={{mb:5}}>

                    
                        
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
                        <hr style={{color:'#d3d3d3', opacity:'0.3'}}/>
                        <Box sx={{display:"flex" , alignItems:'center'}}>
                            <SentimentSatisfiedAltIcon sx={{ mx: 1}}/>
                            <Typography variant="body2" color="gray" sx={{opacity:'0.8'}}>
                                댓글 달기...
                            </Typography>
                            <Button sx={{marginLeft:'auto' , opacity: '0.4'}}>게시</Button>
                        </Box>
                        
                        </Box>
                        
                    </Paper>
                        
                    </Link>
                    )
                    )}
                </Box>            

                {/* sidebar */}
                <Box sx={{ gridArea: 'sidebar',maxHeight:"300px", mt: 15, ml:2 , display: { md:'grid' , xs:'none'} }}>
                    <Box sx={{ display: 'flex' , alignItems:'center'}}>
                        <Box sx={{border:0 , borderRadius:"50%", width:"60px" ,height:"60px" , overflow:'hidden'}}>
                                    <img src="img/inhyuk.png" width="100%" height="100%" style={{objectFit:'cover'}}/>
                        </Box>
                        <Box sx={{ml : 2}}>
                            <Typography variant="body2"><strong>{user.id}</strong></Typography>
                            <Typography variant="body2" sx={{ color:'gray'}}>{user.name}</Typography>
                        </Box>
                        <Button sx={{marginLeft:'auto'}}>전환</Button>
                    </Box>
                    <Box sx={{my:2 , display: 'flex' , alignItems:'center'}}>
                    <Typography variant="body2" sx={{ color:'gray' , opacity:"0.7"}}><strong>회원님을 위한 추천</strong></Typography>
                    <Button sx={{color: 'black', marginLeft : 'auto' , fontSize:'13px'}}>모두 보기</Button>
                    </Box>
                    
                    {recommendation.map( (person , index) => (
                        <Box key={index} sx={{ display: 'flex' , mb:1}}>
                            <Box sx={{mr:1 ,border: 0 , borderRadius:'50%' , width:'40px' , height:'40px' ,overflow:'hidden'}}>
                                <img src={person.image} width="100%" height="100%" style={{objectFit:'cover'}}/>
                            </Box>
                            <Box>
                                <Typography variant="body2"><strong>{person.name}</strong></Typography>
                                <Typography variant="caption" sx={{color:'gray' , opacity:'0.7'}}>danpparkk님 외 2명이 팔로우합니다</Typography>
                            </Box>
                            <Button sx={{marginLeft:'auto'}}>팔로우</Button>

                            
                        </Box>
                    ))}

                </Box>

        </Box>
            
            <Footer />
            </Box> 
            : <Box>loading...</Box>}
        </Box>
                    );
}

export default Home;