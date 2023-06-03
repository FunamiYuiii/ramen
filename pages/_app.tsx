// pages/_app.js
import { Box, ChakraProvider, Container, HStack, VStack } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet" /> 
        <title>
          🍜久留米ラーメンブログ
        </title>
      </Head>
      <Box w='full' minH='100vh' fontFamily='Yuji Syuku'>
        <Container display='flex' maxW='1000px'>
          <HStack w='full'>
            <Box pos='relative' display={{ base: 'none', md: 'block' }}>
              <Box pos='fixed' top='100px'>
                <Menu />
              </Box>
            </Box>
            <Container w={{ base: '325px', md: '500px' }}>
              <VStack w='full' spacing='50px' align='start' mt={{ base: '10px', md: '0px' }}>
                <Header />
                <Box display={{ base: 'block', md: 'none' }}>
                  <Menu />
                </Box>
                <Component {...pageProps} />
                <Footer />
              </VStack>
            </Container>
          </HStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp;