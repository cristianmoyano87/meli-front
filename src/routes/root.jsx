import { Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Root() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleChange = evt => {
        setQuery(evt.target.value)
    }
    
    const handleClick = () => {
        navigate(`/items?search=${query}`)
    }

    const handleSubmit = event => {
        event.preventDefault()
        navigate(`/items?search=${query}`)
    }

    return (
    <>
        <Flex justify="center" align="center" bg="yellow" p='6px'>
            <img alt="logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.3/mercadolibre/logo__large_plus.png" />
            <form onSubmit={handleSubmit} >
                <InputGroup>
                    <Input
                        onChange={handleChange}
                        ml='50px'
                        mr='10px'
                        p="6px"
                        fontSize="16px"
                        border="none"
                        w='60vw'
                        placeholder="Nunca dejes de buscar"
                        id="q"
                        aria-label="Search"
                        type="search"
                        name="q"
                        bg='white'
                    />
                    <InputRightAddon 
                        onClick={handleClick}
                        cursor="pointer"
                        children={<SearchIcon/>}
                    />
                </InputGroup>
            </form>
          </Flex>
          <div id="detail">
            <Outlet />
          </div>
    </>

);
}

/*
export default function Root() {
    return (
      <>
      <Box bg="tomato" w="100%" h="2rem" p={4} color="white">Chakra box</Box>
      <br/>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Nunca dejes de buscar"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`contacts/1`}>Your Name</a>
              </li>
              <li>
                <a href={`contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
  */