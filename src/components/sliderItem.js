import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

function SliderItem(props) {
    return (
        <Flex
            height="100vh"
            position="relative"
            align="center"
            justify="space-between"
            flexDirection={{ base: "row", md: "row", sm: "column" }}
            wrap="wrap"
            px="3rem"
            bgGradient="linear(to-r, #88559B, #0E125F)"
            color="white">
            <Image src='/images/arrow.png' alt="arrow"
                position="absolute"
                left={0}
                top={{ base: "60px", md: "60px", sm: "160px" }}
            />
            <Box>
                <Text color="white"
                    pl={{ base: "300px", md: "300px", sm: "200px" }}
                    w={600}

                >{props.text}</Text>
                <Button colorScheme="teal"
                    position="absolute"
                    left={20}
                    bottom={20}
                    w={200}
                > المسارات التعليمية
                    <Image src="/images/icons/🦆 icon _Chalkboard Teacher_.png" ml={2} maxW='20px' /></Button>
            </Box>
            <Box>
                <Image src={props.image} alt="slide image" objectFit="cover" />
            </Box>
        </Flex>
    )
}
export default SliderItem