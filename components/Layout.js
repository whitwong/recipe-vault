import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import FormDrawer from './FormDrawer';
import { MdMenu, MdAddCircle } from 'react-icons/md';
import { 
  IconButton,
  useDisclosure,
} from '@chakra-ui/core';

export default function Layout({ children, home }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [whichDrawer, setWhichDrawer] = useState(null);

  const handleClick = buttonClicked => {
    setWhichDrawer(buttonClicked);
    onOpen();
  };

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
        <Link href="/" as={'/'}><a className={styles.navLogo1}>Recipe<span className={styles.navLogo2}>Vault</span></a></Link>
        <IconButton 
          onClick={() => handleClick("menu")}
          icon={MdMenu} 
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
          position='absolute'
          right={0}
          fontSize="2rem"
          marginRight="1rem"
          />
      </nav>


      {/* Side Drawers */}
      {
        // Check to see which side drawer to open
        whichDrawer === "menu" ?
          <MenuDrawer isOpen={isOpen} onClose={onClose} /> :
        whichDrawer === "add" ?
          <FormDrawer isOpen={isOpen} onClose={onClose} /> :
        null
      }


      {/* Add New Recipe Button */}
      {
        home 
          ?
        <IconButton
          onClick={() => handleClick("add")}
          icon={MdAddCircle}
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
          zIndex={5}
          color="var(--var1)"
          fontSize="2.5em"
          position="fixed"
          right={0}
          bottom={50}
          marginRight="1rem"
          />
          :
        null
      }
 

      {/* Need this to populate page content from other pages */}
      <main>{children}</main>
    </>
  )
}