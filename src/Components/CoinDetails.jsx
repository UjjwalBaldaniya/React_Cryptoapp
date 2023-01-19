import React from 'react'
import { Box, Container, HStack, Image, Radio, RadioGroup, Stat, StatLabel, Text, VStack} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Loader } from './Loader';
import { server } from "../index";
import { useParams } from 'react-router-dom';
import Error from './Error';

export const CoinDetails = () => {

    const params = useParams();

    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [currency, setCurrency] = useState("usd")


    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`${ server }/coins/${ params.id }`)
                setCoin(data)
                setLoading(false)
                console.log(data);
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        fetchCoin();
    }, [params.id])

    if (error) return <Error />

    return (
        <Container maxW={'container.xl'}>

            {loading ? <Loader /> :
                <>
                    <Box w={'full'}>
                        hii i am
                    </Box>

                    <RadioGroup value={currency} onChange={setCurrency}>
                        <HStack p={'6'}>
                            <Radio value='inr'>INR</Radio>
                            <Radio value='eur'>EUR</Radio>
                            <Radio value='usd'>USD</Radio>
                        </HStack>
                    </RadioGroup>

                    <VStack alignItems={'flex-start'} p='16'>
                        <Text alignSelf={'center'}>Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}</Text>
                        <Image src={coin.image.large} w='16' h={16} objectFit='contain' />

                        <Stat>
                            <StatLabel>{coin.name}</StatLabel>
                            {/* <StatNumber >{coin.market_data.current_price}</StatNumber> */}
                        </Stat>

                    </VStack>
                </>
            }
        </Container>
    )
}
