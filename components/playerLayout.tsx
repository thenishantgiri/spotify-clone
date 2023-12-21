import { Box } from "@chakra-ui/layout";
import Sidebar from "./sideBar.tsx";
import PlayerBar from "./playerBar.tsx";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      {/* SideBar */}
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      {/* Children */}
      <Box marginLeft="250px" marginBottom="100px" height="calc(100vh - 100px)">
        {children}
      </Box>
      {/* PlayerBar */}
      <Box position="absolute" left="0" bottom="0">
        <PlayerBar />
      </Box>
    </Box>
  );
};

export default PlayerLayout;
