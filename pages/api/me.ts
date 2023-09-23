import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

// Define and export the default handler function, protected by 'validateRoute'
export default validateRoute(async (req, res, user) => {
  // Fetch the count of playlists associated with the authenticated user
  const playlistsCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  });

  // Respond to the client with user information and playlists count
  res.json({ ...user, playlistsCount });
});
