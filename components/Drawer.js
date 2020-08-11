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
  useDisclosure,
} from "@chakra-ui/core";


export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button  variantColor="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
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