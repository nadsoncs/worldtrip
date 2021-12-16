import { Image, Center } from '@chakra-ui/react';

export function Logo() {
  return (   
    <Center w='100%'>
      <Image
        boxSize={['81px', '184px']}
        src='/logo.svg'
        alt='Logo'
        h={['20px', '45px']}
      />
    </Center> 
  );
}