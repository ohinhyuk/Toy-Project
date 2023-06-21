import { Box, Typography } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <Box
      sx={{
        // border: 1,
        backgroundColor: "",
        display: "flex",
        justifyContent: "space-between",
        paddingX: "40px",
        paddingY: "10px",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box component={"img"} src="/images/mangja.png" width={50}></Box>
      </Box>
      <Box>
        <DarkModeToggle />
      </Box>
    </Box>
  );
}
