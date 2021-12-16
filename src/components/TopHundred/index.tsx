import { Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { City } from './City';

interface TopHundredProps {
  topHundred: City[];
}
interface City {
  city: string;
  country: string;
  flag: string;
  image: string;
  continent: number;
}
export function TopHundred({topHundred}: TopHundredProps ) {
  return (
    <Flex direction="column" w="100%" my={['32px','80px']}>
      <Heading as='h2' mb={["20px","40px"]}>Cidades +100</Heading>
      <SimpleGrid 
        flex="1"
        spacingX='45px' 
        spacingY={['20px', '48px']} 
        minChildWidth="256px" 
        align="flex-start"
      > 
        { topHundred.map(city => (
          <City 
            key={city.city}
            city={city.city}
            country={city.country}
            flag={city.flag}
            image={city.image}
            continent={city.continent}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
