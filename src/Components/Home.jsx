import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from '../Photo/btc.png'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
    <Box w={'full'} h='85vh' bgColor={'black'}>
      <motion.div style={{ height: '80vh' }} animate={{ translateY: '20px' }} transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}>
        <Image src={img1} alt='bitcoin image' h={'full'} w='full' objectFit={'contain'} />
      </motion.div>
      <Text color={'whiteAlpha.900'} mt='-20px' textAlign={'center'} fontSize='4xl'>CRYPTO</Text>
    </Box>
  )
}
