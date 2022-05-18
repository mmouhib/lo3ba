import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
} from '@chakra-ui/react';
import LoginForm from './LoginForm';

interface LoginModalProps {
   openModal: boolean;
   setOpenModal: (arg: boolean) => void;
}

export default function LoginModal(props: LoginModalProps) {
   return (
      <>
         <Modal
            isCentered
            isOpen={props.openModal}
            onClose={() => {
               props.setOpenModal(false);
            }}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Log In</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <LoginForm />
               </ModalBody>

               <ModalFooter>
                  <Button
                     variant="ghost"
                     mr={3}
                     onClick={() => {
                        props.setOpenModal(false);
                     }}>
                     Cancel
                  </Button>
                  <Button colorScheme="purple">Log In</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
}
