import { Box, VStack, Text } from "@chakra-ui/react"
import Shop from "../components/shop"

const IndexPage = () => {
    return (
        <Box w='full'>
            <VStack spacing={10} >
                <Box w={{ base: '325px', md: '500px'}}>
                    <Text fontSize={{ base: '14px', md: '16px'}}>
                        久留米高専在学中の生徒が久留米市にあるラーメン店を食べ歩き、書いたブログと
                        なっています。
                    </Text>
                </Box>
                <Shop id='mns' name='久留米ラーメン道 麺志 本店' path='/img/mns_GTO1.jpeg'
                    des='西鉄久留米駅から徒歩3分の位置にあるラーメン店です。GTOスペシャル、'
                    address='久留米市東町39-2馬場ビル1階' />
                <Shop id='th' name='大砲ラーメン 本店' path='/img/th_G1.jpeg'
                    des=''
                    address='久留米市通外町11-8' />
                <Shop id='dr' name='大龍ラーメン 小森野店' path='/img/dr_G1.jpeg'
                    des=''
                    address='佐賀県鳥栖市真木町1056-1' />
                <Shop id='m1' name='満一 ゴールドレーベル フレスタ久留米店' path='/img/m1.jpeg'
                    des=''
                    address='久留米市城南町2-34 フレスタ久留米 2F' />
            </VStack>
        </Box>
    )
}
export default IndexPage