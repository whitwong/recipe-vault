import Link from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
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
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <Link href="/" as="/"><a>Home</a></Link>
            <br />
            <Link href="/about" as="/about"><a>About</a></Link>
          </DrawerBody>

          <DrawerFooter>
            <Button color="var(--var1)" variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="var(--var2)">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}