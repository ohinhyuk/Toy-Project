import { Box } from "@mui/material";
import HeaderLottie from "./headerLottie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isSpeak, setIsSpeak] = useState(false);

  return (
    <Box
      sx={{
        // border: 1
        width: "100%",
        zIndex: 100,
        position: "fixed",
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
        paddingX: "40px",
        paddingY: "10px",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <Box
            component={motion.img}
            src={process.env.PUBLIC_URL + "/img/mangja.png"}
            width={50}
            whileHover={{ y: [0, -10, 0, -10, 0] }}
          ></Box>
        </Link>
      </Box>

      <Box>
        <Box
          width={50}
          onMouseOver={() => setIsSpeak(true)}
          onMouseOut={() => setIsSpeak(false)}
        >
          <HeaderLottie />
        </Box>

        {/* <DarkModeToggle /> */}
      </Box>
      {isSpeak && (
        <Box
          sx={{
            position: "absolute",
            right: 90,
            top: 60,
            border: 1,
            mr: 0,
            borderRadius: "15px 0px 15px 15px",
            width: "150px",
            height: "50px",
            backgroundColor: "Background.sidebar",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Hello
        </Box>
      )}
    </Box>
  );
}
