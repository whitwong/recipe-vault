import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/core";

export default function FormDrawer({ isOpen, onClose }) {
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
            <FormControl isRequired>
              <FormLabel htmlFor="recipeName">Recipe Name</FormLabel>
              <Input id="recipeName" placeholder="Recipe Name" />
              <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
              <Input id="ingredients" placeholder="Salt, pepper, garlic, ..." />
              <FormLabel htmlFor="instructions">Instructions</FormLabel>
              <Input id="instructions" placeholder="1. Preheat oven to 350°F" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="creator">Creator</FormLabel>
              <Input id="creator" placeholder="Gordon Ramsey" margin={0}/>
              <FormHelperText id="creator-helper-text" marginBottom="1rem">Credit the chef</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="dishPicture">Picture</FormLabel>
              <Input id="dishPicture" placeholder="Upload Image" />
            </FormControl>
            <Button type="submit" color={"var(--var1)"} position="fixed" marginTop="2rem" left="35%">Submit</Button>
          </DrawerBody>
          
        </DrawerContent>

      </Drawer>
    </>
  );
}