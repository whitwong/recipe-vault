import Head from 'next/head';
import Layout from '../../components/Layout';
import DeleteModal from '../../components/DeleteRecipeModal';
import UpdateModal from '../../components/UpdateRecipeModal';
import getRecipeDetails from '../../lib/getRecipeDetails';
import styles from '../../styles/Recipe.module.css';
import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { 
  Text,
  Divider,
  useDisclosure,
} from '@chakra-ui/core';

export default function RecipeDetails({ id, recipeData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recipeId, setRecipeId] = useState();
  const [recipeName, setRecipeName] = useState();
  const [whichModal, setWhichModal] = useState(null);

  // Click handler to designate which modal to open
  const handleClick = (action, id, recipeName) => {
    setWhichModal(action);
    setRecipeId(id);
    setRecipeName(recipeName);
    onOpen();
  }

  return (
    <Layout>
      <Head>
        <title>{recipeData.recipe_name}</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.content}>
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
        <footer className={styles.footer}>
          <div className={styles.edit}>
            <div className={styles.deleteRecipe}>
              <MdDelete fontSize="1.5rem" onClick={() => handleClick("delete", id, recipeData.recipe_name)} />
              <span style={{fontSize:'0.9rem'}}>Delete</span>
            </div>
            <div className={styles.editRecipe}>
              <MdEdit fontSize="1.5rem" onClick={() => handleClick("update", id)} />
              <span style={{fontSize:'0.9rem'}}>Edit</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Delete/Update Modals */}
      {
        whichModal === "delete" ? 
          <DeleteModal isOpen={isOpen} onClose={onClose} id={recipeId} recipeName={recipeName} /> : 
        whichModal === "update" ? 
          <UpdateModal isOpen={isOpen} onClose={onClose} id={recipeId} /> : 
        null
      }
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
      id: params.id,
      recipeData,
    }
  }
}