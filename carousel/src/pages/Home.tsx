import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CarouselMUIRepeat from "../components/basicbasic/carouselMUIexamRepeat.tsx";

export default function Home() {
  return (
    <Stack
      marginTop="30px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Stack spacing={1} alignItems="center" marginBottom="60px">
        <h1>Carousels 4 You!</h1>
        <h2>React, Material UI, and Typescript</h2>
      </Stack>
      <Box
        overflow="hidden"
        alignContent="center"
        alignItems="center"
        marginTop="60px"
      >
        <CarouselMUIRepeat />
      </Box>
    </Stack>
  );
}
