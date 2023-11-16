import { Box, Text, Flex, AspectRatio } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      color="green"
      image="https://avatars.githubusercontent.com/u/56505350?v=4"
      title={`${user?.firstName} ${user?.lastName}`}
      subtitle="profile"
      description={`${user?.playlistsCount} Public Playlists`}
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="small">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <AspectRatio maxW="300px" ratio={1}>
                  <Image src={artist.image} borderRadius="100%" />
                </AspectRatio>
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
