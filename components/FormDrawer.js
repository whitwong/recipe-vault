import AddRecipeForm from '../components/AddRecipeForm';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/core";

export default function FormDrawer({ isOpen, onClose }) {
  // Render form drawer
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent overflow="auto">
          <DrawerCloseButton color="var(--var1)" />

          <DrawerHeader>Add New Recipe</DrawerHeader>

          <DrawerBody >
            <AddRecipeForm onClose={onClose} />            
          </DrawerBody>
          
        </DrawerContent>

      </Drawer>
    </>
  );
}