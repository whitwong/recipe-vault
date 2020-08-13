import db from '../lib/firestore';
import styles from '../styles/Home.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function RecipeCard({ recipes }) {
  const handleDelete = (id) => {
    db.collection('recipes')
      .doc(id)
      .delete()
  }

  return (
    <>
      {
        recipes.map(recipe => (
          <div className={styles.recipe} key={recipe.id} data-id={recipe.id}>
            <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
            <div className={styles.recipeDetails}>
              <div className={styles.recipeTitle}>{recipe.recipe_name}</div>
              <div className={styles.recipeIngredients}>{recipe.ingredients.join(', ')}</div>
            </div>
            <div>
              <MdEdit className={styles.recipeUpdate} data-id={recipe.id} onClick={() => console.log("Edit ", recipe.id)} />
              <MdDelete className={styles.recipeDelete} data-id={recipe.id} onClick={() => handleDelete(recipe.id)} />
            </div>
          </div>
        ))
      }
    </>
  )
}