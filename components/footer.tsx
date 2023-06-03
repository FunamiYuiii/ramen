import { Box, Container, HStack, Text } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box w={{ base: '325px', md: '500px'}}>
            <Text fontSize={{ base: '14px', md: '16px'}}>
                &copy; Rt 2023
            </Text>
        </Box>
    )
}
export default Footer