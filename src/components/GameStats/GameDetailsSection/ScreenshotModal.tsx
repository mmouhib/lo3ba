import '../../../styles/GameStats/screeshots-modal.css';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';

interface ScreenshotModalProps {
   imageUrl: string;
   isOpen: boolean;
   setIsOpen: (arg: boolean) => void;
}

export default function ScreenshotModal({ imageUrl, isOpen, setIsOpen }: ScreenshotModalProps) {
   return (
      <div className="screenshots-modal">
         <Modal
            isOpen={isOpen}
            onClose={() => {
               setIsOpen(false);
            }}
            size={'6xl'}
            isCentered={true}>
            <ModalOverlay />
            <ModalContent style={{ background: 'black' }}>
               <ModalBody>
                  <div className="modal-content">
                     <img
                        className="screenshot-modal-image"
                        src={imageUrl}
                        alt="screenshot"
                     />
                  </div>
               </ModalBody>
            </ModalContent>
         </Modal>
      </div>
   );
}
