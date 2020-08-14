import db from '../lib/firestore';

export default async function getRecipeIds() {
  let recipeIds = [];

  return await db
    .collection('recipes')
    .get()
    .then(docs => {
      docs.forEach(doc => recipeIds.push(doc.id))
    })
    .then(data => {
      return recipeIds.map(recipeId => {
        return {
          params: {
            id: recipeId
          }
        }
      })
    })
}
