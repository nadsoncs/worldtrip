import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Flex, Icon } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

import { Logo } from './Logo';

interface HeaderProps {
  backPage?: string;
}
export function Header({backPage}: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h={["50", "100"]}
      mx="auto"
      py={["15", "27"]}
      px="4"
      align="center"
    >
      { backPage && (
        <Link href={backPage} passHref>
          <ChakraLink>
            <Icon as={IoIosArrowBack} w={4} h={4}/>
          </ChakraLink>
        </Link>
      )}
      
      <Logo />
    </Flex>
  )
}
