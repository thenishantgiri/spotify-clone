// Import necessary libraries and modules
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma"; // Import your Prisma client instance

// Define an asynchronous API endpoint handler function
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Destructure email and password from the request body
  const { email, password } = req.body;

  // Try to find a user with the provided email using Prisma
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // Check if the user exists and if the provided password matches the hashed password
  if (user && bcrypt.compareSync(password, user.password)) {
    // Generate a JWT token for authentication
    const token = jwt.sign(
      {
        id: user.id, // User's ID
        email: user.email, // User's email
        time: Date.now(), // Current timestamp
      },
      "hello_secret", // Secret key used for signing the token
      {
        expiresIn: "8h", // Token expiration time (8 hours)
      }
    );

    // Set a secure HTTP-only cookie containing the JWT token
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKEN", token, {
        httpOnly: true, // Accessible only through HTTP
        maxAge: 8 * 60 * 60, // Max age of the cookie (8 hours)
        path: "/", // Path where the cookie is valid
        sameSite: "lax", // Same-site cookie attribute
        secure: process.env.NODE_ENV === "production", // Cookie is secure in production environment
      })
    );

    // Create a payload containing user information and send it as JSON response
    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    res.json(payload);
  } else {
    // If authentication fails, send a 401 Unauthorized response
    res.status(401);
    res.json({ error: "Email or Password is wrong" });
  }
};
