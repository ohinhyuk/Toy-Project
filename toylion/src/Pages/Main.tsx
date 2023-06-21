import { Box } from "@mui/material";
import { motion } from "framer-motion";
import MainImage from "../Components/Main/MainImage";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 90);
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <MainImage />
    </Box>
  );
}
