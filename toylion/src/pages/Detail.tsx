import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Detail() {
  const { state } = useLocation();

  console.log(state);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "100px",
        }}
      >
        <Typography sx={{ fontSize: "40px", fontWeight: "bold", mb: 5 }}>
          NO.{state.flight_number} {state.mission_name} ({state.launch_year})
        </Typography>
        <Box
          component={"img"}
          src={state.links.mission_patch}
          width={200}
          height={200}
        />
        <Typography sx={{ fontSize: "20px", py: 5, maxWidth: "500px" }}>
          {state.details}
        </Typography>
      </Box>
    </Box>
  );
}
