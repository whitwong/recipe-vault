import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { IoIosArrowForward } from 'react-icons/io';

export default function RecipeCard({ recipes }) {
  return (
    <>
      {/* Recipe Cards */}
      {
        recipes.map(recipe => (
          <Link key={recipe.id} href='recipes/[id]' as={`recipes/${recipe.id}`}>
            <a>
              <div className={styles.recipe} data-id={recipe.id}>
                <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
                <div className={styles.recipeDetails}>
                  <div className={styles.recipeTitle}>{recipe.recipe_name}</div>
                  <div className={styles.recipeIngredients}>{recipe.ingredients.join(', ')}</div>
                </div>
                <IoIosArrowForward className={styles.recipeForward} />
              </div> 
            </a>
          </Link>           
        ))
      }
    </>
  )
}