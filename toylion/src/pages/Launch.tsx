import { Box, Grid, ImageList, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllLanches } from "../Components/Apis";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ILaunch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  links: {
    mission_patch: string;
  };
}

export default function Launch() {
  const [launches, setLaunches] = useState<ILaunch[]>([]);

  useEffect(() => {
    getAllLanches().then((res) => setLaunches(res.data));
  }, []);
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ pt: 10 }}
    >
      <Typography
        sx={{
          textAlign: "center",

          mb: 10,
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Launch List
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ImageList cols={5} gap={20}>
          {launches.map((launch, index) => (
            <Link to={`/launch/${index}`} state={launches[index]}>
              <Grid item key={index}>
                <Box
                  component={"img"}
                  src={launch.links.mission_patch}
                  width={200}
                  height={200}
                />
              </Grid>
            </Link>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
