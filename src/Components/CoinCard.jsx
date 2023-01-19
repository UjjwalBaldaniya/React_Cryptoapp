import React from 'react'
import { Heading,  Image, VStack, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, image, symbol, price, currecySymbol = "₹" }) => (
        <Link to={`/coin/${ id }`}>
            <VStack w={'52'} p='8' shadow={'lg'} borderRadius={'lg'} m='4' transition={'all 0.3s'} css=
                {{
                    "&:hover": { transform: "scale(1.1)" }
                }}>
                <Image src={image} w='10' h={'10'} />
                <Heading size={'md'} noOfLines='1'>{symbol}</Heading>
                <Text noOfLines={'1'}>{name}</Text>
                <Text noOfLines={'1'}>{price ? `${ currecySymbol } ${ price }` : "NA"}</Text>
            </VStack>
        </Link>
    )

export default CoinCard