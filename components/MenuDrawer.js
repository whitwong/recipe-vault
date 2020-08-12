import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import { FaHeart } from 'react-icons/fa';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core";


export default function MenuDrawer({ isOpen, onClose }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="var(--var1)" />
          <DrawerHeader color="var(--var2)">Navigation</DrawerHeader>

          <DrawerBody>
            <Link href="/" as="/"><a className={styles.link}>Home</a></Link>
            <br />
            <Link href="/about" as="/about"><a className={styles.link}>About</a></Link>
          </DrawerBody>

          <DrawerFooter>
            <span style={{color:"var(--var2)"}}>
              Created with <FaHeart style={{display:"inline", color: "var(--var1)"}} /> by WWong
            </span>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}