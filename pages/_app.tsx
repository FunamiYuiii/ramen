// pages/_app.js
import { Box, ChakraProvider, VStack } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>
          久留米ラーメンブログ
        </title>
      </Head>
      <Box w='full' h='100vh'>
        <VStack>
          <Component {...pageProps} /> 
        </VStack>        
      </Box>      
    </ChakraProvider>
  )
}

export default MyApp;