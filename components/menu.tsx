import { Box, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react"
import NextLink from 'next/link'

const Menu = () => {
    return (
        <Box w='200px'>
            <VStack spacing='5px' align='start'>
                <Text fontWeight='bold'>
                    紹介お店一覧
                </Text>
                <UnorderedList spacing='5px'>
                    <ListItem>
                        <Link href='/#mns' as={NextLink} >
                            麺志
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#th' as={NextLink} >
                            大砲ラーメン
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#dr' as={NextLink} >
                            大龍ラーメン
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#m1' as={NextLink} >
                            満一
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#rfk' as={NextLink}>
                            来福軒
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='/#tr' as={NextLink}>
                            Toiro
                        </Link>
                    </ListItem>
                </UnorderedList>
            </VStack>
        </Box>
    )
}
export default Menu