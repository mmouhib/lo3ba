import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
   useDisclosure,
} from '@chakra-ui/react';

interface ModalProps {
   openModal: boolean;
   setOpenModal: (arg: boolean) => void;
   setSelectedTerms: (arg: boolean) => void;
}

export default function CoreModal(props: ModalProps): JSX.Element {
   return (
      <>
         <Modal
            isOpen={props.openModal}
            onClose={() => {
               props.setOpenModal(false);
            }}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Cookies & other storage technologies</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <p>
                     Cookies are small pieces of text used to store information on web browsers.
                     Cookies are used to store and receive identifiers and other information on
                     computers, phones and other devices. Other technologies, including data that we
                     store on your web browser or device, identifiers associated with your device
                     and other software, are used for similar purposes. In this policy, we refer to
                     all of these technologies as “cookies”.
                  </p>
               </ModalBody>

               <ModalFooter>
                  <Button
                     variant="ghost"
                     onClick={() => {
                        props.setOpenModal(false);
                     }}>
                     Close
                  </Button>
                  <Button
                     colorScheme="blue"
                     onClick={() => {
                        props.setSelectedTerms(true);
                        props.setOpenModal(false);
                     }}>
                     Accept
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   );
}
