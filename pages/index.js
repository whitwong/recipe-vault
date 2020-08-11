import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { MdDelete, MdEdit } from 'react-icons/md'

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Recipe Vault</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
          {/* Recipe Card Placeholders */}
          <div className={styles.recipe}>
            <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
            <div className={styles.recipeDetails}>
              <div className={styles.recipeTitle}>Title</div>
              <div className={styles.recipeIngredients}>Ingredients</div>
            </div>
            <div>
              <MdEdit className={styles.recipeUpdate} />
              <MdDelete className={styles.recipeDelete}/>
            </div>
          </div>

          <div className={styles.recipe}>
            <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
            <div className={styles.recipeDetails}>
              <div className={styles.recipeTitle}>Title</div>
              <div className={styles.recipeIngredients}>Ingredients</div>
            </div>
            <div>
              <MdEdit className={styles.recipeUpdate} />
              <MdDelete className={styles.recipeDelete}/>
            </div>
          </div>

          <div className={styles.recipe}>
            <img className={styles.recipeImage} src="/defaultImg.png" alt="recipe thumb" />
            <div className={styles.recipeDetails}>
              <div className={styles.recipeTitle}>Title</div>
              <div className={styles.recipeIngredients}>Ingredients</div>
            </div>
            <div>
              <MdEdit className={styles.recipeUpdate} />
              <MdDelete className={styles.recipeDelete}/>
            </div>
          </div>
        </main>

      </div>
    </Layout>
  )
}