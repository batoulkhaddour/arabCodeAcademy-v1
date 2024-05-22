import { Flex, Box, useBreakpointValue, Image } from "@chakra-ui/react"
import MenuItems from './menuItems'




function Header() {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            wrap="nowrap"
            px="3rem"
            py={{ base: "0", md: "0", sm: "20px" }}
            bg="brand.primary"
            color="white"
        >
            <MenuItems />

            <Box flexBasis={{ base: "100%", md: "auto" }}>
                <Flex justify={{ base: "center", md: "end", sm: "end" }}>
                    <Box fontSize="lg" fontWeight="bold" letterSpacing="tight">
                        <Image src='/images/Arab-academy-logo.png' maxW='300px' />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header