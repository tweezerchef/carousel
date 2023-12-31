import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CarouselMUIRepeat from "../components/basicbasic/carouselMUIexamRepeat";
import DBCarousel from "../components/reactiveDBCar/dbCarousel";
import BasicPopover from "../components/popovers/basicBasicPop";
import DynamicPopover from "../components/popovers/dynamicPop";

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

      <Box overflow="hidden">
        <BasicPopover />
        <CarouselMUIRepeat />
      </Box>
      <Box overflow="hidden">
        <DynamicPopover />
        <DBCarousel />
      </Box>
    </Stack>
  );
}
