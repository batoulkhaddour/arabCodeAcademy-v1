import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

function SliderItem(props) {
    return (
        <Flex
            height="100vh"
            position="relative"
            align="center"
            justify="space-between"
            flexDirection={{ base: "row", md: "row", sm: "column-reverse" }}
            wrap="wrap"
            px="3rem"
            overflowX='hidden'
            bgGradient="linear(to-r, #88559B, #0E125F)"
            color="white">
            <Image src='/images/arrow.png' alt="arrow"
                position="absolute"
                left={{ base: "-20px", md: "-20px", sm: "-160px" }}
                top={{ base: "75px", md: "85px", sm: "190px" }}
            />
            <Box>
                <Text color="white"
                    fontSize={{ base: "28", md: "28", sm: "22" }}
                    ml={{ base: "200", md: "200", sm: "100" }}
                    mt={{ base: "20", md: "20", sm: "-280px" }}
                    textAlign='right'
                    maxW={{ base: "400px", md: "400px", sm: "300px" }}

                >{props.text}</Text>
                <Button colorScheme="teal"
                    position="absolute"
                    left={{ base: "20", md: "20", sm: "120" }}
                    bottom={20}
                    w={250}
                    fontSize={{ base: "22", md: "22", sm: "20" }}
                    py={8}
                > المسارات التعليمية
                    <Image src="/images/icons/🦆 icon _Chalkboard Teacher_.png" ml={2} maxW='20px' /></Button>
            </Box>
            <Box>
                <Image src={props.image} alt="slide image" objectFit="cover" maxW={{ base: "500px", md: "500px", sm: "250px" }}
                />
            </Box>
        </Flex>
    )
}
export default SliderItem