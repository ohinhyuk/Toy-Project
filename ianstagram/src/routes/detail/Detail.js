import { Box } from "@mui/system";
import React from "react";

function Detail(){

    document.body.style = 'background: rgba(0, 0, 0, 0.5);';

    return(
        <Box sx={{width:"85%" , height:"95vh", mt:2, marginX:"auto" , display:'flex' }}>
            <Box sx={{ height:"100%", width:"60%", border:0, backgroundColor:"black"}}></Box>
            <Box sx={{ height:"100%",width:"40%",border:0, backgroundColor:"white"}}></Box>
            
        </Box>
    );
}

export default Detail;