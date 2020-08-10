import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Recipe Vault"
          content="Access to your favorite recipes"
        />
      </Head>

      <nav className={styles.navbar}> 
        <div>
          <Link href="/" as={'/'}><a className={styles.navLogo1}>Recipe<span className={styles.navLogo2}>Vault</span></a></Link>
        </div>
      </nav>

      <main>{children}</main>
    </>
  )
}