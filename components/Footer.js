import { Flex } from "@chakra-ui/react";

export default function Footer(){
    return(
        <Flex alignItems="center" width="100%" direction="column" pos="fixed" bottom="4">
            <p><span>Copyright</span> 2022 &copy;Todos os direitos reservados</p>
            <p>O conteúdo do site não pode ser editado, 
                copiado ou distribuído sem expressa autorização do SENAI-SP.</p>
        </Flex>
    )
}