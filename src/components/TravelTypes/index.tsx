import { Flex, VStack, Center, Divider, Text, useBreakpointValue } from "@chakra-ui/react";
import { TravelList } from './TravelList';
import { TravelIcons } from './TravelIcons';

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      maxW={['275px', '1440px']}
      mx="auto"
      mt={[9, 20]}
      mb={[5, 13]}
      direction="column"
    >
      { isWideVersion?
        <TravelIcons />
        : <TravelList/>
      }
      
      <Center mt={[9, 20]}>
        <VStack>
          <Divider w={[15, 22]} orientation='horizontal'/>
          <Text fontSize={['xl', '4xl']} fontWeight={500}>Vamos nessa?</Text>
          <Text fontSize={['lg', '4xl']}fontWeight={500}>Então escolha seu continente</Text>
        </VStack>
      </Center>
    </Flex>
  )
}
