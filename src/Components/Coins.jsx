import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import { server } from "../index";
import Error from './Error';
import { Loader } from './Loader';
import CoinCard from "./CoinCard";

export const Coins = () => {


  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState("usd")
  const [page, setPage] = useState(1)

  const currecySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : currency === "usd" ? "$" : "";
  const changepage = (page) => {
    setPage(page)
    setLoading(true)
  }
  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        // console.log(data);
        setLoading(false)


      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error />

  return (

    <Container maxW={'container.xl'} >
      {loading ? <Loader /> :
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack p={'6'}>
              <Radio value='inr'>INR</Radio>
              <Radio value='eur'>EUR</Radio>
              <Radio value='usd'>USD</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={'wrap'}  justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard id={i.id} key={i.id} name={i.name} image={i.image} symbol={i.symbol} price={i.current_price} currecySymbol={currecySymbol} />
            ))}
          </HStack>

          <HStack p={'8'} overflowX='auto' w={'full'}>
            {btns.map((item, index) => (
              <Button key={index} onClick={() => changepage(index + 1)} bgColor={'black'} color='white'>{index + 1}</Button>
            ))}
          </HStack>
        </>
      }
    </Container>
  )
}
