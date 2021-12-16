import { Flex, List, HStack, VStack, Center, ListIcon, ListItem, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { NightlifeIcon, BeachIcon, ModernIcon, ClassicIcon, MoreIcon} from '../Icons';
export function TravelIcons() {
  return (
    <HStack justify="space-around">
      <VStack>
        <Icon as={NightlifeIcon} w={85} h={85}/>
        <Text fontSize='2xl' fontWeight={600}>vida noturna</Text>
      </VStack>
      <VStack>
        <Icon as={BeachIcon} w={85} h={85}/>
        <Text fontSize='2xl' fontWeight={600}>praia</Text>
      </VStack>
      <VStack>
        <Icon as={ModernIcon} w={85} h={85}/>
        <Text fontSize='2xl' fontWeight={600}>moderno</Text>
      </VStack>
      <VStack>
        <Icon as={ClassicIcon} w={85} h={85}/>
        <Text fontSize='2xl' fontWeight={600}>clássico</Text>
      </VStack>
      <VStack>
        <Icon as={MoreIcon} w={85} h={85}/>
        <Text fontSize='2xl' fontWeight={600}>e mais...</Text>
      </VStack>
    </HStack>
  )
}
