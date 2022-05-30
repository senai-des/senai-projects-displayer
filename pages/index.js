import { Box, color, ColorModeScript, Image,Img } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { Button,Menu, Checkbox, Flex, Heading, IconButton, Input, MenuButton, TagCloseButton, MenuList, MenuItem, Stack } from '@chakra-ui/react'
import Link from 'next/link';
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import App from 'next/app';

const IndexPage = ()=>{
  return(
    <Box>
      <Navbar />
      <Heading>Sim
        
      </Heading>
      
      <Footer />
     </Box>  
  )
}

export default IndexPage

 // <Box w='100%'>
      //   <Navbar />

      //   <ColorModeScript initialColorMode='light'></ColorModeScript>
      //   <Image htmlWidth="100%" src='https://res.cloudinary.com/dnhr0nevx/image/upload/v1653854417/WhatsApp_Image_2022-05-29_at_15.57.26_fy7ipb.jpg' alt='Dan Abramov' />
      //   <Footer />
      // </Box>