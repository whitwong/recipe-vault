import styles from '../styles/Home.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function RecipeCard({ recipes }) {
  return (
    <>
      {
        recipes.map(recipe => (
          <div className={styles.recipe} key={recipe.recipe_id} data-id={recipe.recipe_id}>
            <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
            <div className={styles.recipeDetails}>
              <div className={styles.recipeTitle}>{recipe.recipe_name}</div>
              <div className={styles.recipeIngredients}>{recipe.ingredients.join(', ')}</div>
            </div>
            <div>
              <MdEdit className={styles.recipeUpdate} data-id={recipe.recipe_id} />
              <MdDelete className={styles.recipeDelete} data-id={recipe.recipe_id} />
            </div>
          </div>
        ))
      }
    </>
  )
}