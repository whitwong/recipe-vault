import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import RecipeCard from '../components/RecipeCard';
import db from '../lib/firestore';

export default function Home() {
  const [recipes, setRecipes] = useState(null)

  // // Fetch recipe data
  // useEffect(() => {
  //   fetch('/api/recipes')
  //     .then(res => res.json())
  //     .then(data => setRecipes(data))
  //     .catch(err => err)
  // }, []);

  useEffect(() => {
    db.collection('recipes')
      .onSnapshot(snap => {
        const recipeArr = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRecipes(recipeArr);
      });
  }, []);

  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Recipe Vault</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
          {/* Recipe Cards */}
          {recipes !== null ? <RecipeCard recipes={recipes} /> : null}

        </main>
      </div>
    </Layout>
  )
}