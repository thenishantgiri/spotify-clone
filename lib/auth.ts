import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// Middleware for route authorization
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Check if the request contains a valid access token in cookies
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user;

      try {
        // Verify the token and extract user information
        const { id } = jwt.verify(token, "hello_secret");

        // Retrieve the user from the database based on the extracted user ID
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("User not found");
        }
      } catch (error) {
        // Handle token verification or database retrieval errors
        res.status(401);
        res.json({ error: "Unauthorized" });
        return;
      }

      // Call the original route handler with the user context
      return handler(req, res, user);
    }

    // If no valid token is found, return an unauthorized response
    res.status(401);
    res.json({ error: "Unauthorized" });
  };
};

// Function to validate and decode a token
export const validateToken = (token) => {
  try {
    // Verify the token and return user information
    const user = jwt.verify(token, "hello_secret");
    // return user;
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    return payload;
  } catch (error) {
    // Handle token verification errors
    return null;
  }
};
