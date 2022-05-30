import { Box, color,Progress, Image,Img, Spacer, useColorMode, VStack,Button,Menu, Checkbox, Flex, Heading, IconButton, Input, MenuButton, TagCloseButton, MenuList, MenuItem, Stack, Icon  } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { FaSun, FaMoon,FaInstagram,FaGithub,FaLinkedin,FaUser} from 'react-icons/fa'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { redirect } from 'next/dist/server/api-utils';


export default function Navbar(){

    const{colorMode,toggleColorMode} = useColorMode();
    const isDark = colorMode == "dark";

    return(
        <VStack p={5}>
            <Flex width="100%" alignItems="center">

                <Image htmlWidth={150} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653700266/logo-senai2_vpyclk.png' alt='Dan Abramov' />
                
                <Spacer></Spacer>
                
                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6} >
                    <Link href="/">HOME</Link>
                </Flex>
                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6}>
                
                    <Link href="/">SOBRE</Link>
                    
                </Flex>
                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6}>
                    
                    <Link href="/">PORTIFÓLIO</Link>
                </Flex>
                <Flex _hover={isDark?{bg:"gray.700", rounded:"3"}:{bg:"gray.200", rounded:"3"}} letterSpacing={1} p="2" mr={6}>
                    <Link href="/">ALUNOS</Link>
                </Flex>

                <Spacer></Spacer>

                <IconButton icon={<FaGithub />} isRound="true"></IconButton>
                <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
                <IconButton ml={2} icon={<FaUser />} isRound="true"></IconButton>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
            </Flex>
            
        </VStack>
        
    )
}

// <Flex height="5vh" justifyContent="space-between" alignItems="center" direction="row" bgGradient="linear(to-b, green.200,pink.500)" p={10} width="100%">
        //  <Flex>
        //     <Box>
        //         <Image htmlWidth={150} src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653700266/logo-senai2_vpyclk.png' alt='Dan Abramov' />
        //     </Box>
        // </Flex>
    
        // <Flex>
          
        //     <Button color='blue.400' _hover={{ bg: 'blue.500', color:"white" }} size='sm' rounded="full" variant="ghost">
        //       Login
        //     </Button>

        //     <Button color='blue.400' colorScheme="blue.400" _hover={{ bg: 'blue.500',color:"white" }} ml={4} rounded="full" size='sm' border="2px" variant="outline">
        //       Cadastro
        //     </Button>
        // </Flex>
       
        // </Flex>