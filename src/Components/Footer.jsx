import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box minH={'48'} bgColor='black' color={'white'} px='16' py={["16", "8"]}>
            <Stack direction={["column", "row"]} alignItems='center' h={'full'}>
                <VStack alignItems={["center", "flex-start"]} w='full'>
                    <Text fontSize={'4xl'} fontWeight={'bold'}>About Us</Text>
                    <Text fontSize={'md'} letterSpacing={"widest"}
                        textAlign={["center", "left"]}>We are best Crypto App in the World.</Text>
                </VStack>
                <VStack>
                    <Avatar boxSize={'28'} />
                    <Text fontSize={'lg'}>Our Founder</Text>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer