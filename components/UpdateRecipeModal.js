import db from '../lib/firestore';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/core";


export default function DeleteModal({ isOpen, onClose, id }) {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Recipe</ModalHeader>
          <ModalBody>
            <p>Add form here</p>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost">Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}