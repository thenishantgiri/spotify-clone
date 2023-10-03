import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { FaHeart, FaPlus } from "react-icons/fa6";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: "/home.svg",
    route: "/",
  },
  {
    name: "Search",
    icon: "/search.svg",
    route: "/search",
  },
  {
    name: "Your Library",
    icon: "/library.svg",
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: FaPlus,
    route: "/",
    color: "black",
    background: "#a7a7a7",
  },
  {
    name: "Favorites",
    icon: FaHeart,
    route: "/favorites",
    color: "#a7a7a7",
    background: "linear-gradient(135deg, #3F13B9, #7C9287)",
  },
];

const Sidebar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        {/* Logo */}
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        {/* Nav Menu */}
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <Box
                        marginRight="20px"
                        sx={{ display: "inline", verticalAlign: "top" }}
                      >
                        <NextImage src={menu.icon} height={24} width={24} />
                      </Box>
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Music Menu */}
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          height="35px"
                          width="35px"
                          color={menu.color}
                          marginRight="20px"
                          background={menu.background}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "2px",
                          }}
                        >
                          <ListIcon as={menu.icon} sx={{ margin: "auto" }} />
                        </Box>
                        {menu.name}
                      </Box>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Grey Divider */}
        <Divider color="gray.600" />
        {/* Playlists */}
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
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
