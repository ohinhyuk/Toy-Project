import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import styled from "@emotion/styled";
import "../static/fonts/fonts.css";
import { border } from "@mui/system";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { style } from "@mui/system";

    const user = "img/user.png";

    const RowAlignBox = styled(Box)((props) => ({
        backgroundColor : 'black',
        color: 'white',
        display : 'flex',
        alignItems : 'center',
        justifyContent: props.align,
        width : props.width
    }));

    const SearchTextField = styled(TextField)({
        
        ' .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'red',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'red',
              },
        },
        width:'50%',
        
            
    })
    const CircleImageBox = styled(Box)({
        border: 1 , 
        borderRadius:"50%" ,
        overflow:'hidden' , 
        width:'40px' , 
        height:'40px'
    })

    const UserImage = styled(Box)({
        width:"100%", 
        height:"100%",
        objectFit:'cover'
    })

    

function Header(){


    const [searchWord , setSearchWord] = useState("검색");
    const onChange = (event) =>{
        const { target : {value}} = event;
        setSearchWord(value);
    }

    document.body.style.margin = '0';

    return(
        <RowAlignBox align="space-between">
            <RowAlignBox align="flex-start">
                <MenuIcon sx={{ mx : 2}}/>
                <YouTubeIcon fontSize="large" sx={{color:'red' }}/>
                <Typography variant="h6" sx={{fontFamily: 'Oswald'}}>MeTube</Typography>
            </RowAlignBox>
            <RowAlignBox align="center" width="50%">
            <SearchTextField value={searchWord} size="small" onChange={onChange} 
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlinedIcon sx={{color:'white'}} />
                  </InputAdornment>
                ),
              }}
          />
            <MicIcon/>
            </RowAlignBox>
            <RowAlignBox align="space-between" width="10%">
                    <VideoCallIcon />
                    <NotificationsActiveIcon  />       
                <CircleImageBox>  
                    <UserImage component="img" src={user} />
                </CircleImageBox>
            </RowAlignBox>

        </RowAlignBox>
    );
}

export default Header;