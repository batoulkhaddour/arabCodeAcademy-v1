import {
    Flex, Link, Button, Box, IconButton, Image, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue
} from "@chakra-ui/react"
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from "react";

function MenuItems() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [display, setdisplay] = useState('none')
    return (
        <Box
            flexBasis={{ base: "100%", md: "20%", sm: "20%" }}
        >
            <Flex
                align="center"
                display={['none', 'none', 'flex', 'flex']}
                justify={{ base: "start", md: "end" }}
                direction={{ base: "column", md: "row" }}
            >
                <Button mx={2} colorScheme='red' w={175}>
                    تسجيل الدخول
                    <Image src="/images/icons/iconLogin.png" ml={2} maxW='20px' />
                </Button>
                <Button mx={2} colorScheme='blue' w={175}>
                    انشاء حساب
                    <Image src="/images/icons/🦆 icon _profile circled_.png" ml={2} maxW='20px' />
                </Button>

                <Box
                    align="center"
                    display={['none', 'none', 'flex', 'flex']}
                    justify={{ base: "center", md: "end" }}
                    alignItems={{ base: "center", md: "center" }}
                    direction={{ base: "column", md: "row" }}
                    ml={{ base: 40, md: 20, sm: 0 }}

                >

                    <Link href="/" passHref>
                        <Button
                            colorScheme='none'
                            color="white"
                            variant='ghost'
                            aria-label='Educational-paths'
                            my={5}
                            w='100%'
                        >

                            المسارات التعليمية
                        </Button>
                    </Link>
                    <Link href="/#" passHref>
                        <Button
                            colorScheme='none'
                            color="white"
                            variant='ghost'
                            aria-label='contact'
                            my={5}
                            w='100%'
                        >
                            التواصل
                        </Button>
                    </Link>

                    <Box>
                        <Menu>
                            <MenuButton as={Button} colorScheme='none' color="white" variant='ghost' rightIcon={<ChevronDownIcon />}>
                                المصادر
                            </MenuButton>
                            <MenuList
                                color='#000'
                            >
                                <MenuItem> 1</MenuItem>
                                <MenuItem> 2</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>



                    <Link href="/" passHref>
                        <Button
                            colorScheme='none'
                            color="white"
                            variant='ghost'
                            aria-label='Educational-paths'
                            my={5}
                            w='90%'
                        >

                            <Image src='/images/icons/Frame 13.png' maxW='100%' />

                        </Button>
                    </Link>
                </Box>


            </Flex>
            {isMobile && (
                <IconButton
                    aria-label="Open menu"
                    icon={<HamburgerIcon />}
                    colorScheme="whiteAlpha"
                    onClick={() => { setdisplay('flex') }}
                />
            )}

            <Flex
                w="100vw"
                bg="brand.primary"
                zIndex={100}
                h='100vh'
                pos='fixed'
                top={0}
                left={0}
                direction={{ base: "column", md: "column" }}
                display={display}
            >
                <Flex justify='flex-end'>
                    <IconButton
                        m={10}
                        aria-label="close menu"
                        size='lg'
                        colorScheme="whiteAlpha"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => { setdisplay('none') }}
                    />
                </Flex>
                <Flex
                    align="center"
                    direction={{ base: "column", md: "column" }}
                >
                    <Button my={2} colorScheme='red' w={175}>
                        تسجيل الدخول
                        <Image src="/images/icons/iconLogin.png" ml={2} maxW='20px' />
                    </Button>
                    <Button my={2} colorScheme='blue' w={175}>
                        انشاء حساب
                        <Image src="/images/icons/🦆 icon _profile circled_.png" ml={2} maxW='20px' />
                    </Button>

                    <Link href="/" passHref>

                        <Button
                            colorScheme='none'
                            color="white"
                            variant='ghost'
                            aria-label='Educational-paths'
                            my={2}
                            w='100%'
                        >

                            المسارات التعليمية
                        </Button>

                    </Link>

                    <Link href="/#" passHref>

                        <Button
                            colorScheme='none'
                            color="white"
                            variant='ghost'
                            aria-label='contact'
                            my={2}
                            w='100%'
                        >
                            التواصل
                        </Button>

                    </Link>

                    <Box>

                        <Menu>

                            <MenuButton as={Button} colorScheme='none' color="white" variant='ghost' rightIcon={<ChevronDownIcon />}>
                                المصادر
                            </MenuButton>
                            <MenuList
                                color='#000'
                                my={2}
                            >
                                <MenuItem> 1</MenuItem>
                                <MenuItem> 2</MenuItem>
                            </MenuList>

                        </Menu>

                    </Box>

                    <Link href="/" passHref>

                        <Button
                            colorScheme='none'
                            color="white"
                            variant='ghost'
                            aria-label='Educational-paths'
                            my={5}
                            w='90%'
                        >
                            <Image src='/images/icons/Frame 13.png' maxW='80px' />
                        </Button>

                    </Link>

                </Flex>
            </Flex>
        </Box>

    )
}

export default MenuItems