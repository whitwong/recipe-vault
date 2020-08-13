// import db from '../lib/firestore';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import DeleteModal from '../components/DeleteRecipeModal';
import UpdateModal from '../components/UpdateRecipeModal';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/core';

export default function RecipeCard({ recipes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recipeId, setRecipeId] = useState();
  const [whichModal, setWhichModal] = useState(null);

  // Click handler to designate which modal to open
  const handleClick = (action, id) => {
    setWhichModal(action);
    setRecipeId(id);
    onOpen();
  }

  return (
    <>
      {/* Recipe Cards */}
      {
        recipes.map(recipe => (
          <div className={styles.recipe} key={recipe.id} data-id={recipe.id}>
            <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
            <div className={styles.recipeDetails}>
              <div className={styles.recipeTitle}>{recipe.recipe_name}</div>
              <div className={styles.recipeIngredients}>{recipe.ingredients.join(', ')}</div>
            </div>
            <div>
              <MdEdit className={styles.recipeUpdate} data-id={recipe.id} onClick={() => handleClick("update", recipe.id)} />
              <MdDelete className={styles.recipeDelete} data-id={recipe.id} onClick={() => handleClick("delete", recipe.id)} />
            </div>
          </div>            
        ))
      }

      {/* Delete/Update Modals */}
      {
        whichModal === "delete" ? 
          <DeleteModal isOpen={isOpen} onClose={onClose} id={recipeId} /> : 
        whichModal === "update" ? 
          <UpdateModal isOpen={isOpen} onClose={onClose} id={recipeId} /> : 
        null
      }
    </>
  )
}