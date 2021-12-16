import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Center, Flex, VStack, Heading } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

interface Continent {
  id: string;
  name: string;
  slogan: string;
  description: string;
  countries: number;
  languages: number;
  banner: string;
}
interface SliderProps {
  continents: Continent[];
}
export function Slider({continents}: SliderProps) {
  return (
    <>
      <Swiper navigation={true} pagination={{"clickable": true}}>

        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Link href={`/continents/${continent.id}`}  passHref>
              <ChakraLink>
                <Flex
                  w="100%"
                  h="100%"
                  bgImage={`url(${continent.banner})`}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                >
                  <Center w="100%">
                    <VStack spacing={3} justify="center">
                      <Heading as='h1' size='4xl'  fontSize={['2xl', '48px']} color="gray.50">{continent.name}</Heading>
                      <Heading as='h2' size='xl'  fontSize={['sm', '4xl']} color="gray.200">{continent.slogan}</Heading>
                    </VStack>
                  </Center>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  )
}