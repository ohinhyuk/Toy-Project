import { Box, Typography } from "@mui/material";
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
            <Box gridArea="list" sx={{}}></Box>
            
            <Box gridArea="message" sx={{borderLeft : 1 ,
            borderColor:"lightGray"}}>
                <SendIcon sx={{ p:2,color:"primary.main" ,fontSize:"100px"}}/></Box>
            
        </Box>
        <Footer />
        </Box>
    );
}

export default Message;