
import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from "../index";
import Error from './Error';
import { Loader } from './Loader';

export const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {

      try {
        const { data } = await axios.get(`${ server }/exchanges`);
        setExchanges(data);
        // console.log(data)
        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }
    fetchExchanges();
  }, [])

  if (error) return <Error />

  return (

    <Container maxW={'container.xl'}>
      {loading ? <Loader /> :
        <>
          <HStack wrap={'wrap'} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard key={i.id} name={i.name} url={i.url} image={i.image} rank={i.trust_score_rank} />
            ))}
          </HStack>
        </>
      }
    </Container>
  );
};


// --------Exchange Card-----------//

const ExchangeCard = ({ name, url, image, rank }) => (

  <a href={url} target='_blank' rel='noreferrer'>
    <VStack w={'52'} p='8' shadow={'lg'} borderRadius={'lg'} m='4' transition={'all 0.3s'} css=
    {{
      "&:hover": { transform: "scale(1.1)" }
    }}>
      <Image src={image} w={'10'} h={'10'} />
      <Heading size={'md'} noOfLines='1'>{rank}</Heading>
      <Text noOfLines={'1'}>{name}</Text>
    </VStack>
  </a>
);
