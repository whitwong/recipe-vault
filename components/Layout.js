import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import MenuDrawer from './MenuDrawer';
import { MdMenu } from 'react-icons/md';
import { 
  IconButton,
  useDisclosure,
} from '@chakra-ui/core';

export default function Layout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          onClick={onOpen}
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

      {/* Side Menu Drawer */}        
      <MenuDrawer isOpen={isOpen} onClose={onClose}/>

      {/* Need this to populate page content from other pages */}
      <main>{children}</main>
    </>
  )
}