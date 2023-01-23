import { Box, createTheme, Input, TextField, ThemeProvider, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SendIcon from '@mui/icons-material/Send';

const headerTheme = createTheme({
    typography: {
        fontFamily: "'Dancing Script', cursive",
        fontSize : 15,
    },
})

function Story(){

    const location = useLocation();

    const story = {
        name : location.state?.name,
        image : location.state?.image,
        storyImage : location.state?.storyImage
    }

    document.body.style = 'background: rgba(0, 0, 0, 0.9);';
    console.log(story.name)

    const def = `${story.name}`.concat("님 에게 메세지 보내기")
    return(

        <Box>
            <ThemeProvider theme={headerTheme}>
                <Box sx={{display:'flex' , alignItems:'center'}}>
            <Typography variant="h6" sx={{color:"white" , pl : 2}}>Ianstagram</Typography>
            <a href="../" style={{marginLeft:'auto'}}><CloseOutlinedIcon sx={{color:'white'}}/></a>
            </Box>
            </ThemeProvider>

            <Box sx={{ width:"30%" , height:"90vh" , margin:"auto" , border:0 , backgroundColor:'lightCoral' ,display:'flex' , flexDirection:'column' , backgroundImage:`url(${story.storyImage})` , backgroundRepeat:'no-repeat' , backgroundSize:'cover',backgroundPosition:'center'}}>
                
                <Box sx={{display:'flex' , alignItems:'center' , p:2}}>
                    <Box sx={{width:"40px" , height:"40px" , border:0 , borderRadius : '50%' , overflow:'hidden'}}>
                        <img src={story.image} width="100%" height="100%" style={{ objectFit:'cover' }}/>
                        
                    </Box>
                    <Typography variant="body2" sx={{ml:1, color:'white'}}>{story.name}</Typography>
                    <Typography variant="body2" sx={{ml:1, color:'white'}}>1시간</Typography>
                </Box>
                <Box sx={{display : 'flex' , alignItems:'center' ,
                            
                            width:'95%',marginTop:'auto',}}>
                    <TextField
                        defaultValue={def}
                        // color=""
                        focused
                        size="small"
                        sx={{
                            ' .MuiOutlinedInput-root': {
                            color: 'white',
                            fontSize:'small',
                            borderRadius:"20px"
                            },
                            width:'100%',
                            marginTop:'auto',
                            p:2,
                        }}
                    />
                    <SendIcon  sx={{marginLeft:'auto',color:'white'}}/>
                </Box>
            </Box>

            
            <Box>
            
            </Box>
        </Box>
    );
}

export default Story;