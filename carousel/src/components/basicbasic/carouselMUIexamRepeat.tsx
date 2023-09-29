import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Card from './card.tsx';

function Carousel() {
  // setting the state variables
  // cards will be the cards that are displayed
  const [cards, setCards] = useState<React.JSX.Element[]>([]);
  // currentPage is the current page of the cards that is currently displayed
  const [currentPage, setCurrentPage] = useState(0);
  // slideDirection is the direction that the cards will slide in
  const [slideDirection, setSlideDirection] = useState<'right' | 'left' | undefined>('left');

  // cardsPerPage is the number of cards that will be displayed per page
  // you can modify for your needs
  const cardsPerPage = 4;
  // this is just a dummy array of cards it uses the MUI card demo and repeats it 10 times
  const duplicateCards: JSX.Element[] = Array.from({ length: 10 }, (_, i) => <Card key={i} />)

  // these two functions handle changing the pages
  const handleNextPage = () => {
    setSlideDirection('left');
    setCurrentPage((prevPage) => prevPage + 1);
  }

  const handlePrevPage = () => {
    setSlideDirection('right');
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // This useEffect is really just for demonstration purposes
  // it sets the cards to the duplicateCards array
  // you can remove this and replace it with your own useEffect
  // or if your page is static you can just set the cards to the array
  // at the top of the file
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
        height: '400px',
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{
          margin: 5,
        }}
        disabled={currentPage === 0}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <Box sx={{ width: '100%', height: '100%' }}>
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
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
        }}
        disabled={currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );

}

export default Carousel;