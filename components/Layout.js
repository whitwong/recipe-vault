import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Layout.module.css';
import Drawer from '../components/Drawer';
import { Grid, IconButton } from '@chakra-ui/core';
import { MdMenu } from 'react-icons/md';

export default function Layout({ children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Recipe Vault"
          content="Access to your favorite recipes"
        />
      </Head>

      {/* Top Navigation Bar */}
      <nav className={styles.navbar}>
        <Grid autoFlow="column" gap={10}>
          <Link href="/" as={'/'}><a className={styles.navLogo1}>Recipe<span className={styles.navLogo2}>Vault</span></a></Link>
          <IconButton 
            size="lg"
            bg="none" 
            _hover={{ bg:"none" }} 
            _active={{
              bg: "none",
              borderColor: "none",
            }}   
            _focus={{
              boxShadow:"none",
              outline:"none"
            }}
            color="var(--var2)" 
            aria-label="Menu" 
            icon={MdMenu} 
            position='absolute'
            right={0}
            fontSize="2rem"
            marginRight="1rem"
            />
        </Grid>
      </nav>

      {/* Side Menu */}        
      <Drawer />

      {/* Need this to populate page content from other pages */}
      <main>{children}</main>
    </>
  )
}