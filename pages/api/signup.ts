// Import necessary libraries and modules
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma"; // Import your Prisma client instance

// Define an asynchronous API endpoint handler function
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Generate a salt for password hashing
  const salt = bcrypt.genSaltSync();

  // Destructure email, password, firstName, and lastName from the request body
  const { email, password, firstName, lastName } = req.body;

  let user;

  try {
    // Create a new user using Prisma's user.create() method
    user = await prisma.user.create({
      data: {
        firstName, // User's first name
        lastName, // User's last name
        email, // User's email
        password: bcrypt.hashSync(password, salt), // Hash the user's password
      },
    });
  } catch (e) {
    // If an error occurs, handle it by sending a response with a 401 status code
    res.status(401);
    res.json({ error: "User already exists" });
    return; // Exit the function
  }

  // Generate a JWT token for authentication
  const token = jwt.sign(
    {
      email: user.email, // User's email
      id: user.id, // User's ID
      time: Date.now(), // Current timestamp
    },
    "hello_secret", // Secret key used for signing the token
    { expiresIn: "8h" } // Token expiration time (8 hours)
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

  // Send a JSON response containing the created user data
  res.json(user);
};
