import db from '../lib/firestore';
import { useState } from 'react';
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
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [creator, setCreator] = useState('');

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('recipes')
      .add({
        recipe_name: recipeName,
        ingredients: ingredients.split(','),
        instructions: instructions,
        creator: creator,
      });

    setRecipeName('');
    setIngredients('');
    setInstructions('');
    setCreator('');
    onClose(true); // **Check that this doesn't have any negative/unintentional side effects**
  }

  // Form drawer render
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
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="recipeName">Recipe Name</FormLabel>
                <Input id="recipeName" placeholder="Recipe Name" value={recipeName} onChange={({target}) => setRecipeName(target.value)} />
                <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
                <Input id="ingredients" placeholder="Salt, pepper, garlic, ..." value={ingredients} onChange={({target}) => setIngredients(target.value)} />
                <FormLabel htmlFor="instructions">Instructions</FormLabel>
                <Input id="instructions" placeholder="1. Preheat oven to 350°F" value={instructions} onChange={({target}) => setInstructions(target.value)}/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="creator">Creator</FormLabel>
                <Input id="creator" placeholder="Gordon Ramsey" margin={0} value={creator} onChange={({target}) => setCreator(target.value)}/>
                <FormHelperText id="creator-helper-text" marginBottom="1rem">Credit the chef</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="dishPicture">Picture</FormLabel>
                <Input id="dishPicture" placeholder="Upload Image" />
              </FormControl>
              <Button type="submit" color={"var(--var1)"} position="fixed" marginTop="2rem" left="35%">Submit</Button>
            </form>
          </DrawerBody>
          
        </DrawerContent>

      </Drawer>
    </>
  );
}