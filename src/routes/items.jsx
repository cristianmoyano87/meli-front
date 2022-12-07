import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { find } from '../services/meli';
import { Box, Image, Spinner, Flex, Text, Center } from "@chakra-ui/react";

export default function Items() {
    const [results, setResults] = useState()

    let { search } = useLocation()

    useEffect(()=> {
        find(search.slice(8), setResults)
    }, [search])

    if (typeof(results) == 'undefined')
        return <Center h='100vh'>
            <h1>Buscando: {search.slice(8)}</h1>
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Center>
    
    return <>
        <Box width='100%' bg='lightgrey' pl='15%' pr='15%'>
        {results.paging.total} resultados <br/>
        {results.results.map( result => card(result) )}
        </Box>
    </>
}

function card( result) {
return <Box key={result.id} borderWidth='1px'>
    <a href={`/items/${result.id}`}>
        <Flex bg='white'>
            <Image 
                alt={result.title} 
                src={result.thumbnail}
                boxSize='190px'
                objectFit='cover'
            />
            <Box p='20px' w='50%'>
                <Text fontSize='2xl'>{result.price.toLocaleString('es-AR')}</Text>
                <Text fontSize='xl'>{result.title}</Text>
            </Box>
            <Box>
                <Text fontSize='sm'><br/><br/>{result.address.state_name}</Text>
            </Box>
        </Flex>
    </a>
    </Box>
}