import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';

import { createTheme , ThemeProvider } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const headerTheme = createTheme({
    typography: {
        fontFamily: "'Dancing Script', cursive",
        fontSize : 15,
    },
})

function Message(){

    const friends = [{
        name : 'kimyuhyuk0406',
        image : 'img/newjeans1.png',
        message : "헉스 좀 쉬어라 ㅠㅠ",
        lastModifiedTime : "3분",
        isRead : false
      },
      {
          name : 'min_zzi',
          image : 'img/newjeans2.png',
          message : "개웃갸",
          lastModifiedTime : "1시간",
          isRead : true

      },
      {
      name : 'hello_world',
      image : 'img/newjeans3.png',
      message : "나 졸업해!",
      lastModifiedTime : "2일",
      isRead : true
      },
      {
      name : 'hello_ianstagram',
      image : 'img/newjeans4.png',
      message : "커즈아아아아 하입보이~",
      lastModifiedTime : "3일",
      isRead : false
      },
      {
      name : 'minsu_0908',
      image : 'img/newjeans5.png',
      message : "디로 ~ 디로~ ㄷㅣ로",
      lastModifiedTime : "1년",
      isRead : true
      },
  ]
  


    return(
        <Box>
            <ThemeProvider theme={headerTheme}>
                <Header />
                </ThemeProvider>
        <Box sx={{
            border: 1,
            borderColor:"lightGray",
            display:"grid",
            marginX:"auto",
            mt: 10,
            // height: "100%",
            height:{ md : "85vh" , xs:"85vh"},
            width:{ md : "72%" , xs:"100%"},
            gridTemplateAreas:  `" menu message"
                                 " list message"`,
            gridTemplateColumns: { md: "350px 1fr" ,xs:"250px 1fr"},
            gridTemplateRows: "70px 1fr"
        }}>
            
            <Typography variant="h6" gridArea="menu" sx={{pt:2, pl:5,fontWeight:"500",textAlign: "center" , borderBottom:1,
            borderColor:"lightGray", }}> inhyuk_52 ▿ <DriveFileRenameOutlineOutlinedIcon  sx={{fontSize:"35px" ,float:"right" ,pr:2}}/> </Typography>    
            <Box gridArea="list" sx={{}}>
                {friends.map( (friend , index) => (
                    <Box key={index} sx={{display:'flex' , alignItems:'center'}}>
                        <Box sx={{mx:2, my:1, minWidth:'50px', height:'50px' , border:0 , borderRadius:'50%' , overflow:'hidden'}}>
                            <img src={friend.image} width="100%" height="100%" style={{objectFit:'cover'}}/>
                        </Box>
                        {friend.isRead ? 
                        <Box>    
                            <Typography variant="body2">{friend.name}</Typography>
                            <Typography variant="body2" sx={{color:'gray'}}>{friend.message} ∙ {friend.lastModifiedTime}</Typography>
                        </Box>
                        :
                        <Box sx={{ display:'flex' , alignItems:'center', width:"100%"}}>
                            <Box>
                            <Typography variant="body2"><strong>{friend.name}</strong></Typography>
                            <Typography variant="body2"><strong>{friend.message} ∙ {friend.lastModifiedTime}</strong></Typography>
                            </Box>
                            <Typography variant="body2" color="primary.main" sx={{marginLeft:'auto' , mr:1}}>●</Typography>
                        </Box>
                        }
                    </Box>
                ))}
            </Box>
            
            <Box gridArea="message" sx={{borderLeft : 1 , borderColor:"lightGray" , display:'flex',flexDirection: 'column'  , alignItems:'center' , justifyContent:'center'}}>
                <Box sx={{border : 2 , borderRadius:"50%" , borderColor:'gray'}}>
                    <SendIcon sx={{ p:2,color:"gray" ,fontSize:"100px"}}/>
                </Box>
                
                <Typography variant="h5" sx={{color:'gray' ,mt:2}}>Message</Typography>
                <Typography variant="body2" sx={{color:'darkGray' ,mt:1}}>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</Typography>
                <Button variant="contained" color="secondary" sx={{mt:2}}> 메세지 보내기 </Button>
                </Box>
                
            </Box>
        <Footer />
        </Box>
    );
}

export default Message;