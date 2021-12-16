import { Flex, Text, useBreakpointValue, Center } from "@chakra-ui/react";
interface ContinentBannerProps{
  name: string;
  banner: string;
}
export function ContinentBanner({name, banner}: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex 
      w="100%"
      h={[150, 500]}
      minH={[150, 500]}
      bgImage={`url(${banner})`}
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Flex
        w={["100%",1480]}
        mx="auto"
        px={[4, 140]}
        py={[7, 20]}
        justify={['center', 'flex-start']}
        alignItems='baseline'
        pos="relative"
      >
        { isWideVersion? (
          <Text 
            fontSize={['3xl', '48px']} 
            color="gray.50" 
            fontWeight="600"
            pos="absolute" 
            left="140"
            bottom="20"
          >{name}</Text>
        ) : (
          <Center>
            <Text 
              fontSize={['3xl', '48px']} 
              color="gray.50" 
              fontWeight="600"
            >{name}</Text>
          </Center>
        ) }
        
      </Flex>
    </Flex>
  )
}
