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


export default function DeleteModal({ isOpen, onClose, id, recipeName }) {
  // Delete recipe and close modal
  const handleDelete = (id) => {
    db.collection('recipes')
      .doc(id)
      .delete()

    onClose(true);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Delete Recipe: <span style={{color: "var(--var1)"}}>{recipeName}</span> </ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this recipe? Deleted recipe cannot be recovered.</p>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="red" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}