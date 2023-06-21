import { AppBar, Box } from "@mui/material";
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
      }}
    >
      <Box component={"img"} src="/images/mangja.png" width={70}></Box>
      <Box>
        <DarkModeToggle />
      </Box>
    </Box>
  );
}
