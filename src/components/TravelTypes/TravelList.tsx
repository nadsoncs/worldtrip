import { List, HStack, Center, ListIcon, ListItem } from "@chakra-ui/react";
import { BsCircleFill } from 'react-icons/bs';

export function TravelList() {
  return (
    <List fontSize='lg' spacing={6} w="100%" my={9}>
      <HStack justify="space-between">
        <ListItem fontWeight={500}>
          <ListIcon as={BsCircleFill} color='yellow.400' w={3} h={3} />
          vida noturna
        </ListItem>
        <ListItem fontWeight={500}>
          <ListIcon as={BsCircleFill} color='yellow.400' w={3} h={3}/>
          praia
        </ListItem>
      </HStack>
      <HStack justify="space-between">
        <ListItem fontWeight={500}>
          <ListIcon as={BsCircleFill} color='yellow.400' w={3} h={3}/>
          moderno
        </ListItem>
        <ListItem fontWeight={500}>
          <ListIcon as={BsCircleFill} color='yellow.400' w={3} h={3}/>
          clássico
        </ListItem>
      </HStack>
      <Center>
        <ListItem fontWeight={500}>
          <ListIcon as={BsCircleFill} color='yellow.400' w={3} h={3}/>
          e mais...
        </ListItem>
      </Center>
    </List>
  )
}
