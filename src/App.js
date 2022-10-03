import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {Grid, GridItem} from '@chakra-ui/react';
import Header from './Components/Header';

function App() {
  return (
    <ChakraProvider>
          <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'90px 1fr 90px'}
      gridTemplateColumns={'300px 1fr'}
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='0' bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl='10%' pr='10%' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='10%' pr='10%' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='10%' pr='10%' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
    </ChakraProvider>
   
  );
}

export default App;
