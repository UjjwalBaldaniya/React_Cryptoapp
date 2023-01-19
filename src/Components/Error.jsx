import { Alert, AlertIcon, } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (

    <Alert status='error' w={'lg'} left='50%' transform={'translateX(-50%)'} marginTop='8'>
      <AlertIcon />
      Error
    </Alert>
  )
}

export default Error