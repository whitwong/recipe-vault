import db from '../lib/firestore';

export default async (id) => {
  return await db
    .collection('recipes')
    .doc(id)
    .get()
    .then(doc => {
      return doc.data()
    })
    .catch(err => {
      console.log('Error at getRecipeDetails ', err)
    })
}