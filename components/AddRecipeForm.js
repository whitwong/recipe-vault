import styles from '../styles/AddForm.module.css';
import db from '../lib/firestore';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { 
  Formik, 
  Field, 
  Form, 
  FieldArray 
} from "formik";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/core";


export default function AddRecipeForm({ onClose }) { 
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [creator, setCreator] = useState('');

  // Initial values specifically for Formik form
  const initialValues = {
    instructions: [
      {
        direction: "",
      }
    ]
  };

  // Render form 
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        // Post-process adding order key to instructions array 
        const orderedInstructions = values.instructions.map((instruction, index) => {
          return {
            "direction": instruction.direction,
            "order": index + 1
          }
        })

        // Add form values to Firestore and close drawer
        db.collection('recipes')
          .add({
            recipe_name: recipeName,
            ingredients: ingredients.split(',').map(i => i.trim()),
            instructions: orderedInstructions,
            creator: creator,
          });
    
        // Reset values
        setRecipeName('');
        setIngredients([]);
        setCreator('');
        onClose(true);
      }}
    >
      {({ values }) => (
        <Form>
          {/* Recipe Name Field */}
          <FormControl marginBottom="1rem" isRequired>
            <FormLabel htmlFor="recipeName">Recipe Name</FormLabel>
            <Input 
              id="recipeName" 
              placeholder="Recipe Name" 
              value={recipeName} 
              onChange={({target}) => setRecipeName(target.value)} 
            />
          </FormControl> 

          {/* Ingredients Field */}
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

          {/* Instructions Field */}
          {/* TODO: Add field validation to instructions - Required */}
          <FormControl marginBottom="1rem" isRequired>  
            <FormLabel htmlFor="instructions">Instructions</FormLabel>
            <FieldArray name="instructions">
              {({ insert, remove, push }) => (
                <div>
                  { values.instructions.length > 0 &&
                    values.instructions.map((friend, index) => (
                      <div className={styles.instructions} key={index}>
                        <div className={styles.directionDelete}>
                          <MdClose
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          />
                        </div>
                        <div className={styles.directionOrder}>{index + 1}.</div>                        
                        <div className={styles.directionValue}>
                          <Field
                            name={`instructions.${index}.direction`}
                            placeholder={index + 1 === 1 ? "Preheat oven to 350°F" : "Add new direction"}
                            type="text"
                          />
                        </div>
                      </div>
                    ))}
                  <Button
                    type="button"
                    className={styles.addDirection}
                    onClick={() => push({ direction: "" })}
                  >
                    Add Direction
                  </Button>
                </div>
              )}
            </FieldArray>
          </FormControl>

          {/* Creator Field */}
          <FormControl marginBottom="1rem" isRequired>
            <FormLabel htmlFor="creator">Creator</FormLabel>
            <Input 
              id="creator" 
              placeholder="Gordon Ramsey" 
              margin={0} value={creator} 
              onChange={({target}) => setCreator(target.value)}
            />
            <FormHelperText id="creator-helper-text" marginBottom="1rem">Credit the chef</FormHelperText>
          </FormControl>

          {/* Picture Upload Field */}
          <FormControl marginBottom="1rem">
            <FormLabel htmlFor="dishPicture">Picture</FormLabel>
            <Input id="dishPicture" placeholder="Upload Image" />
          </FormControl>
          <Button type="submit" color={"var(--var1)"} position="fixed" marginTop="1rem" left="35%" boxShadow="0px 1px 3px rgba(90,90,90,0.1)">Submit</Button>
        </Form>
      )}
    </Formik>
  ) 
};