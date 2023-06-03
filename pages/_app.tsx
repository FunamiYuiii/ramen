// pages/_app.js
import { Box, ChakraProvider, VStack } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>
          久留米ラーメンブログ
        </title>
      </Head>
      <Box w='full' minH='100vh' p='relative'>
        <Header />
        <VStack>
          <Component {...pageProps} /> 
        </VStack>
        <Box p='absolute' bottom='0'>
          <Footer />
        </Box>        
      </Box>      
    </ChakraProvider>
  )
}

export default MyApp;