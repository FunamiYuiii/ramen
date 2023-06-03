// pages/_app.js
import { Box, ChakraProvider, VStack } from '@chakra-ui/react'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box w='full' h='100vh'>
        <VStack>
          <Component {...pageProps} /> 
        </VStack>        
      </Box>      
    </ChakraProvider>
  )
}

export default MyApp;