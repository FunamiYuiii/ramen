import { Box, Container, HStack, Heading, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Box w={{ base: '325px', md: '500px'}}>
            <Heading>
                <Text fontSize={{ base: '22px', md: '30px'}} fontFamily='Yuji Syuku'>
                🍜久留米ラーメン 一口ブログ
                </Text>
            </Heading>
        </Box>
    )
}
export default Header