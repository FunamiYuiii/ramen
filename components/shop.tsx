import { Box, Image, Text, VStack } from "@chakra-ui/react"
const dir = process.env.NODE_ENV === 'production' ? '/ramen' : ''

type Props = {
    id: string
    name: string
    path: string
    des: string
    address: string
}
const Shop = (
    props: Props
) => {
    return (
        <Box id={props.id}>
            <VStack spacing='10px' >
                <Text w={{ base: '325px', md: '500px'}} fontSize={{ base: '17px', md: '25px'}}>
                    {props.name}
                </Text>
                <Image src={dir+props.path} alt={props.name}
                    w={{ base: '325px', md: '500px'}} borderRadius='5%' />
                <Text w={{ base: '325px', md: '500px'}} fontSize={{ base: '14px', md: '16px'}}>
                    {props.des}
                </Text>
                <Text w={{ base: '325px', md: '500px'}} fontSize={{ base: '13px', md: '14px'}}>
                    📍所在地：{props.address}
                </Text>
            </VStack>
        </Box>
    )
}
export default Shop