// Importing required modules
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

// Creating a new PrismaClient instance
const prisma = new PrismaClient();

const run = async () => {
  // Upserting artists and their songs
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name }, // Condition for upsert
        update: {}, // No updates if artist already exists
        create: {
          // Create artist if not exists
          name: artist.name,
          image: "",
          songs: {
            create: artist.songs.map((song) => ({
              // Creating songs for the artist
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );

  // Creating a user with hashed password
  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "user@test.com" },
    update: {},
    create: {
      email: "user@test.com",
      password: bcrypt.hashSync("password", salt), // Hashing the password
      firstName: "Nishant",
      lastName: "Giri",
    },
  });

  // Creating playlists for the user with songs
  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist #${i + 1}`,
          user: {
            connect: { id: user.id }, // Connecting the playlist to the user
          },
          songs: {
            connect: songs.map((song) => ({
              // Connecting the songs to the playlist
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

// Running the function and handling errors
run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Disconnecting the Prisma Client
  });
