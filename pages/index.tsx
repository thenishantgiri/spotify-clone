import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home = () => {
  return (
    <GradientLayout
      color="green"
      image="https://avatars.githubusercontent.com/u/56505350?v=4"
      title="Nishant Giri"
      subtitle="profile"
      description="6 Public Playlists"
      roundImage
    >
      <div>Home</div>
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
