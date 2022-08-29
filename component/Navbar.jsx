import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey, fiKey } from "react-icons/fi";
import { useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const [isMoblie] = useMediaQuery("(min-width: 1280px)");
  return (
    <Flex p={"2"} borderBottom="1px" borderColor={"gray.100"}>
      <Box fontSize={"3xl"} color="blue.400" fontWeight={"bold"}>
        <Link href={"/"} paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Box>
        {!isMoblie ? (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outlined"
              color="red.400"
            />
            <MenuList>
              <Link href={"/"} passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href={"/search"} passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href={"/search?purpose=for-sale"} passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href={"/search?purpose=for-rent"} passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (
          <Flex alignContent={"center"} justifyContent="center">
            <Link href={"/"} passHref>
              <Text
                m={"2"}
                fontSize="medium"
                color={"blue.300"}
                cursor="pointer"
                _hover={{ color: "blue.700" }}
              >
                Home
              </Text>
            </Link>
            <Link href={"/search"} passHref>
              <Text
                m={"2"}
                fontSize="medium"
                color={"blue.300"}
                cursor="pointer"
                _hover={{ color: "blue.700" }}
              >
                Search
              </Text>
            </Link>
            <Link href={"/search?purpose=for-sale"} passHref>
              <Text
                m={"2"}
                fontSize="medium"
                color={"blue.300"}
                cursor="pointer"
                _hover={{ color: "blue.700" }}
              >
                Buy Property
              </Text>
            </Link>
            <Link href={"/search?purpose=for-rent"} passHref>
              <Text
                m={"2"}
                fontSize="medium"
                color={"blue.300"}
                cursor="pointer"
                _hover={{ color: "blue.700" }}
              >
                Rent Property
              </Text>
            </Link>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
