import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const SongTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px" padding="22px">
          <IconButton
            icon={<BsFillPlayFill fontSize="25px" />}
            colorScheme="green"
            size="lg"
            isRound
            aria-label="play"
          />
        </Box>
        <Table variant="unstyled">
          <Thead
            borderBottom="1px solid"
            borderColor="rgba(255, 255, 255, 0.2)"
          >
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </Box>
  );
};

export default SongTable;
