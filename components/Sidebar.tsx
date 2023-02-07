import Image from "next/image";
import Link from "next/link";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favourites",
    icon: MdFavorite,
    route: "/favurite",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%" display="flex" flexDirection="column">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <Center>
            <Image src="/logo.svg" alt="" width={120} height={60} />
          </Center>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menuItem) => (
              <ListItem paddingX="20px" fontSize="16px" key={menuItem.name}>
                <LinkBox>
                  <Link href={menuItem.route} passHref>
                    {/* <LinkOverlay> */}
                    <ListIcon
                      as={menuItem.icon}
                      color="white"
                      marginRight="20px"
                    />{" "}
                    {menuItem.name}
                    {/* </LinkOverlay> */}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((musicItem) => (
              <ListItem paddingX="20px" fontSize="16px" key={musicItem.name}>
                <LinkBox>
                  <Link href={musicItem.route} passHref>
                    {/* <LinkOverlay> */}
                    <ListIcon
                      as={musicItem.icon}
                      color="white"
                      marginRight="20px"
                    />{" "}
                    {musicItem.name}
                    {/* </LinkOverlay> */}
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray-800" flexGrow="1" />
        <Box overflowY="auto" appearance="none" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem color="gray" paddingX="20px" key={playlist}>
                <LinkBox>
                  <Link href="/">{playlist}</Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
