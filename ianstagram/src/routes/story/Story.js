import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";

const headerTheme = createTheme({
    typography: {
        fontFamily: "'Dancing Script', cursive",
        fontSize : 15,
    },
})

function Story(){

    document.body.style = 'background: rgba(0, 0, 0, 0.9);';

    return(
        <Box>
            <ThemeProvider theme={headerTheme}>
            <Typography variant="h6" sx={{color:"white" , pl : 2}}>Ianstagram</Typography>
            </ThemeProvider>

            <Box sx={{ width:"30%" , height:"90vh" , margin:"auto" , border:1 , borderColor:"gray" , backgroundColor:"gray"}}>

            </Box>
        </Box>
    );
}

export default Story;