import db from '../lib/firestore';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/core";


export default function UpdateModal({ isOpen, onClose, id, recipeData }) {
  const [recipeName, setRecipeName] = useState(recipeData.recipe_name);
  const [ingredients, setIngredients] = useState(recipeData.ingredients.join(', '));
  const [instructions, setInstructions] = useState(recipeData.instructions);
  const [creator, setCreator] = useState(recipeData.creator);

  // Update recipe document by id
  const handleUpdate = (evt) => {
    // Prevent page refresh on form submission (normal click handler behaviour)
    evt.preventDefault();

    // Update recipe document
    db.collection('recipes')
      .doc(id)
      .set({
        recipe_name: recipeName,
        ingredients: ingredients.split(',').map(i => i.trim()),
        instructions: instructions,
        creator: creator,
      })
      .then(() => {
        // Close modal
        onClose(true);
      })
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Recipe: <span style={{color:"var(--var1)"}}>{recipeData.recipe_name}</span></ModalHeader>
          
          {/* Update Form */}
          <form onSubmit={handleUpdate}>     
            <ModalBody>
              {/* Recipe Name */}
              <FormControl marginBottom="1rem" isRequired>
                <FormLabel htmlFor="recipeName">Recipe Name</FormLabel>
                <Input 
                  id="recipeName" 
                  placeholder="Recipe Name" 
                  value={recipeName} 
                  onChange={({target}) => setRecipeName(target.value)} 
                />
              </FormControl> 

              {/* Ingredients */}
              <FormControl marginBottom="1rem" isRequired> 
                <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
                <Input 
                  id="ingredients" 
                  placeholder="Salt, pepper, garlic, ..." 
                  value={ingredients} 
                  onChange={({target}) => setIngredients(target.value)} 
                />
                <FormHelperText id="ingredients-helper-text" marginBottom="1rem">Separate ingredients with commas</FormHelperText>
              </FormControl>

              {/* Instructions */}


              {/* Creator Field */}
              <FormControl marginBottom="1rem" isRequired>
                <FormLabel htmlFor="creator">Creator</FormLabel>
                <Input 
                  id="creator" 
                  placeholder="Gordon Ramsey" 
                  margin={0} 
                  value={creator} 
                  onChange={({target}) => setCreator(target.value)}
                />
                <FormHelperText id="creator-helper-text" marginBottom="1rem">Credit the chef</FormHelperText>
              </FormControl>

            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variantColor="green">
                Update
              </Button>
            </ModalFooter>
          </form>

        </ModalContent>
      </Modal>
    </>
  );
}