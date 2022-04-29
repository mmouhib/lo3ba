import { useToast, Button } from '@chakra-ui/react';

export default function AlertPopup() {
   const toast = useToast();
   return (
      <Button
         onClick={() =>
            toast({
               title: 'An error has occurred.',
               description: 'An error has occurred.',
               status: 'error',
               duration: 3000,
               isClosable: true,
            })
         }>
         Show Toast
      </Button>
   );
}
