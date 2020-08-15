import Head from 'next/head';
import Layout from '../../components/Layout';
import getRecipeDetails from '../../lib/getRecipeDetails';
import styles from '../../styles/Recipe.module.css';
import { 
  Text,
  Divider,
} from '@chakra-ui/core';

export default function RecipeDetails({ recipeData }) {
  return (
    <Layout home>
      <Head>
        <title>{recipeData.recipe_name}</title>
      </Head>
      <div className={styles.main}>
        <Text className={styles.title}>{recipeData.recipe_name}</Text>
        <Text className={styles.creator}>Created by: {recipeData.creator}</Text>

        <Divider borderColor="var(--var1)" margin="0.5rem auto" width="90%" />

        <Text className={styles.sectionTitle}>Ingredients</Text>
        <ul className={styles.listIngredients}>
          {recipeData.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</li>
          ))}
        </ul>

        <Divider borderColor="var(--var1)" margin="0.5rem auto" width="90%" />
        <Text className={styles.sectionTitle}>Instructions</Text>
        <ul className={styles.listInstructions}>
          {
            recipeData.instructions === undefined  || recipeData.instructions.length === 0 ?
            null :
            recipeData.instructions.map((item, i) => (
              <li key={i}>{item.order}. {item.direction}</li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}

// With ability to create new recipes and then route to details page, need to retrieve
// recipe details on each request. Statically generating pages only works for recipes already
// in Firestore db at build time.
export async function getServerSideProps({ params }) {
  const recipeData = await getRecipeDetails(params.id);

  return {
    props: {
      recipeData,
    }
  }
}