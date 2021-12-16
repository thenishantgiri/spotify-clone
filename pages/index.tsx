import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://avatars.githubusercontent.com/u/56505350?v=4"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image src={artist.image} borderRadius="100%" />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
