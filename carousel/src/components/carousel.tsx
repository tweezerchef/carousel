import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Card from './card.jsx';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';





function Carousel(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [cards, setCards] = useState<JSX.Element[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'right' | 'left' | undefined>('left');

    const cardsPerPage = isMobile ? 3 : 4;

    const duplicateCards: JSX.Element[] = Array.from({ length: 10 }, (_, i) => <Card key={i} />)

    function handleNextPage() {
    setSlideDirection('left');
    setCurrentPage((prevPage) => prevPage + 1);
  }

    const handlePrevPage = () => {
      setSlideDirection('right');
      setCurrentPage((prevPage) => prevPage - 1);
    };
    useEffect(() => {
      setCards(duplicateCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
          height: isMobile ? '80vw' : '400px',
          marginTop: isMobile ? '.2vh' : '1.5vh',
          paddingBottom: '0',
        }}
      >
        <IconButton
          onClick={handlePrevPage}
          sx={{
            margin: 5,
            padding: 0,
            alignSelf: 'center',
            justifySelf: 'start',
          }}
          disabled={currentPage === 0}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: currentPage === index ? 'block' : 'none',
              }}
            >
              <Slide direction={slideDirection} in={currentPage === index}>
                <Stack
                  spacing={2}
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                >
                  {cards.slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage)}
                </Stack>
              </Slide>
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={handleNextPage}
          sx={{
            margin: 5,
            padding: 0,
            alignSelf: 'center',
            justifySelf: 'end',
          }}
          disabled={currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    );

}

export default Carousel;