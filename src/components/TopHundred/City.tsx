import { Box, Image, HStack, Text, Heading, Avatar, Center } from "@chakra-ui/react";

interface CityProps {
  city: string;
  country: string;
  flag: string;
  image: string;
  continent: number;
}
export function City({city, country, flag, image, continent}: CityProps) {

  return (
    <Box 
      //w='256px'
      maxW='sm' 
      borderWidth='1px' 
      borderRadius='lg' 
      overflow='hidden'
      borderColor='yellow.400'
    >
      <Center>
        <Image 
          src={image}
          alt={city}
          h="173px"
          objectFit='cover'
          align='center'
        />
      </Center>
      

      <Box p='6'>
        <HStack 
          mt='1'
          justifyContent="space-between"
        >
          <Box>
            <Heading 
              as='h4'
              fontSize={['xl']}
              fontWeight='semibold'
              lineHeight='25px'
              isTruncated
            >
              {city}
            </Heading>
            <Text
              fontSize={['md']}
              color='gray.400'
              lineHeight='26px'
            >
              {country}
            </Text>
          </Box>
          <Avatar size='sm' src={flag} />
        </HStack>
      </Box>
    </Box>
  )
}