import { NextResponse } from "next/server";

// Define an array of pages that require authentication
const signedinPages = ["/", "/playlist", "/library", "/search", "/favorites"];

export default function middleware(req) {
  // Check if the requested page is in the list of signed-in pages
  if (signedinPages.find((page) => page === req.nextUrl.pathname)) {
    // Retrieve the access token from cookies
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    // If no token is found, redirect the user to the sign-in page
    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
