import { Flex, Stack, HStack,Text, Box, Image, useBreakpointValue, } from '@chakra-ui/react';
export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex 
      w="100%" 
      bgImage="url('/banner/banner.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <HStack
        w="100%"  
        maxWidth={1480}
        minH={[163, 375]}
        mx="auto" 
        px={[4, 35]}
        py={[7, 20]}
        justify="space-between"
      >
        <Stack spacing={[2, 5]} >
          <Text fontSize={['xl', '4xl']} color="gray.50" fontWeight="500">5 Continentes,<br />infinitas possibilidades.</Text>
          <Text fontSize={['sm', 'xl']} color="gray.200">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Stack>
        { isWideVersion && (
        <Box
    
        >
          <Image
            alt={'Puzzle Image'}
            objectFit={'cover'}
            src={
              '/banner/airplane.svg'
            }
          />
        </Box>
      )}
      </HStack>
    </Flex>
  )
}
