import db from '../../lib/firestore';

export default async (req, res) => {
  let recipeDocs = [];

  await db
    .collection('recipes')
    .get()
    .then(docs => {
      docs.forEach(doc => recipeDocs.push(doc.data()))
      res.json(recipeDocs)
    })
    .catch(data => {
      res.json(data)
    })
}