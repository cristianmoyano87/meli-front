import { useParams, useNavigate } from "react-router-dom"
import { getDetail } from "../services/meli"
import { useEffect, useState } from "react"
import { Spinner, Box, Flex, Image, Text, Button } from "@chakra-ui/react"
import fallback from './logo-300x300.jpg'


const Atras = () => {
    let navigate = useNavigate();
    return <Button onClick={() => navigate(-1)}>Volver</Button>
}

export default function Detail () {
    let { id } = useParams()

    const [result, setResult] = useState()

    useEffect(()=> {
        getDetail(id, setResult)
    }, [id])

    if (typeof(result) == 'undefined')
    return <>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
    </>

    return <>
        <Box width='100%' bg='lightgrey' pt='30px' pb='30px' pl='15%' pr='15%'>
            <Atras/>
            <Flex bg='white'>
                <Box w='80%'>
                    <Image 
                        alt={result.dataId.pictures[0].id} 
                        src={result.dataId.pictures[0].url}
                        boxSize='350px'
                        objectFit='scale-down'
                        m='20px'
                        fallbackSrc={fallback}
                    />
                    <Box bg='white' p='20px'>
                        <Text fontSize='2xl'>Descripción del producto</Text>
                        <Text fontSize='sm'>{result.dataDescription.plain_text}</Text>
                    </Box>
                </Box>
                <Box p='20px' w='50%'>
                    <Text m='10px' fontSize='sm'>{result.dataId.attributes.filter( attr => attr.id === 'ITEM_CONDITION').map( attribute => attribute.value_name)}</Text>
                    <Text m='10px' fontSize='xl'>{result.dataId.title}</Text>
                    <Text m='10px' fontSize='2xl'>$ {result.dataId.price.toLocaleString('es-AR')}</Text>
                    <Button w='100%' colorScheme='blue'>Comprar</Button>
                </Box>
            </Flex>
        </Box>
    </>
}