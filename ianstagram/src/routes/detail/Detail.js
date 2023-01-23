import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function Detail(){
    const location = useLocation();

    const pid = {
        name : location.state?.name,
        userImage : location.state?.userImage,
        pidImage : location.state?.pidImage,
        content :  location.state?.content
    }

    document.body.style = 'background: rgba(0, 0, 0, 0.5);';

    console.dir(pid.name + pid.userImage + pid.pidImage);

    return(
        <Box>
            <a href="../" style={{textDecoration: 'none' , color: 'inherit'}}>
        <Box sx={{width:"85%" , height:"95vh", mt:2, marginX:"auto" , display:'flex' }}>
            <Box sx={{ height:"100%", width:"60%", border:0, backgroundColor:"black" , display:'flex' , alignItems:'center', whiteSpace:'nowrap' , overflowX:'auto'}}>
                {pid.pidImage.map((image , index) => (
                    <img key={index} src={image} width="100%" height="90%" />
                ))}
                
            </Box>
            <Box sx={{ height:"100%",width:"40%",border:0, backgroundColor:"white" , display:'flex' , flexDirection:'column'}}>
                <Box sx={{display:'flex' , alignItems:'center' , px:2 , pt:2 , pb:2 , borderBottom:1, borderColor:'lightgray'}}>
                    <Box sx={{ width:"35px" , height:'35px' , border:0 , borderRadius:'50%' ,overflow:'hidden', mr:2 }}>
                        <img width="100%" height="100%" src={pid.userImage} style={{objectFit:'cover'}}/>
                    </Box>
                    <Typography variant="body2" ><strong>{pid.name}</strong></Typography>

                </Box>

                <Box sx={{display:'flex' , alignItems:'center' , px:2 , py:2}}>
                    <Box sx={{ width:"35px" , height:'35px' , border:0 , borderRadius:'50%' ,overflow:'hidden', mr:2 }}>
                        <img width="100%" height="100%" src={pid.userImage} style={{objectFit:'cover'}}/>
                    </Box>
                    <Box>
                        <Typography variant="body2" ><strong>{pid.name}</strong> {pid.content}</Typography>
                        <Typography variant="caption" sx={{color:'gray'}}>수정됨 ∙ 16시간</Typography>
                    </Box>
                </Box>

                <Box sx={{marginTop:'auto' ,p:1}}>
                    <hr color="lightGray" style={{opacity:'0.5'}}></hr>
                    <Box sx={{display:'flex'}}>
                    <FavoriteBorderIcon sx={{mx : 1 , my: 0.5}}/>        
                    <SendIcon sx={{mx : 1,my: 0.5}}/>
                    <BookmarkBorderIcon sx={{ marginLeft: 'auto' , mr: 1,my: 0.5 ,fontSize:'25px'}} />
                    </Box>

                    <Box sx={{display: 'flex' , alignItems:'center', mx:1,mt:1}}>
                        <Box sx={{ width:"25px" , height:'25px' , border:0 , borderRadius:'50%' ,overflow:'hidden' , mr:1 }}>
                            <img width="100%" height="100%" src={pid.userImage} style={{objectFit:'cover'}}/>
                        </Box>
                        <Typography variant="caption"><strong>ian</strong>님 외 <strong>여러 명</strong>이 좋아합니다.</Typography>
                    </Box>
                    <Typography variant="caption" sx={{mx:1 , color:'gray' ,fontSize:'20%'}}>16시간 전</Typography>

                </Box>
            </Box> 
        </Box>
        </a>
        </Box>
    );
}

export default Detail;