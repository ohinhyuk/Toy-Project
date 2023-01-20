import { Box } from "@mui/material";
import React from "react";

function Footer(){

    return(
        <Box>
            <Box sx={{ display: 'flex',
          justifyContent: 'space-evenly',
          fontSize: "5px",
          width: "30%",
          margin:"Auto",
        mt: "30px"}}
          color="text.secondary">

                <Box>소개</Box> ・ 
                <Box>도움말</Box> ・ 
                <Box>홍보 센터</Box> ・ 
                <Box>API</Box> ・ 
                <Box>채용 정보</Box> ・ 
                <Box>개인정보처리방침</Box> ・ 
                <Box>약관</Box> ・ 
                <Box>위치</Box> ・ 
                <Box>언어</Box>
            </Box>
            <Box sx={{ display: 'flex',
          justifyContent: 'space-evenly',
          fontSize: "10px",
          width: "30%",
          margin:"Auto",
          my: "10px",
          }}
          
          color="text.secondary">

            © 2023 IANSTAGRAM FROM Oh-Inhyuk
            </Box>
            
        </Box>
    );
}


export default Footer;