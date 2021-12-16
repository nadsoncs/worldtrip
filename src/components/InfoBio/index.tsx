import { Stack, Text, HStack, VStack } from "@chakra-ui/react";

interface InfoBioProps {
  description: string;
  countries: number;
  languages: number;
  topHundred: number;
}
export function InfoBio({ description, countries, languages, topHundred }: InfoBioProps) {
  return (
    <Stack 
      direction={['column', 'row']} 
      spacing={[4, 20]} 
      w="100%" 
      justify="space-between"
    >
      <Text
        fontSize={['sm','2xl']}
        lineHeight={['21px','36px']}
        textAlign="justify"
        maxW={["600px"]}
      >
        {description}
      </Text>
      <HStack  w="100%" justify="space-between">
        <VStack spacing={[0]}>
          <Text
            weight={[600]}
            fontSize={['2xl' ,'48px']}
            color="yellow.400"
          >
            {countries}
          </Text>
          <Text
            weight={[600]}
            fontSize={['lg', '2xl']}
          >
            países
          </Text>
        </VStack>

        <VStack spacing={[0]}>
          <Text
            weight={[600]}
            fontSize={['2xl' ,'48px']}
            color="yellow.400"
          >
            {languages}
          </Text>
          <Text
            weight={[600]}
            fontSize={['lg', '2xl']}
          >
            línguas
          </Text>
        </VStack>

        <VStack spacing={[0]}>
          <Text
            weight={[600]}
            fontSize={['2xl' ,'48px']}
            color="yellow.400"
          >
            {topHundred}
          </Text>
          <Text
            weight={[600]}
            fontSize={['lg', '2xl']}
          >
            cidades +100
          </Text>
        </VStack>
        
      </HStack>
    </Stack>
  )
}
