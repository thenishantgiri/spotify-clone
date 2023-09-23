import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signup",
  body: {
    email: string;
    password: string;
    firstName?: string; // firstName and lastName are optional
    lastName?: string;
  }
) => {
  // Explicitly define the type of requestBody to include all properties
  const requestBody: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  } = {
    email: body.email,
    password: body.password,
  };

  // Add firstName and lastName to the request body if provided and the mode is "signup"
  if (mode === "signup" && body.firstName && body.lastName) {
    requestBody.firstName = body.firstName;
    requestBody.lastName = body.lastName;
  }

  return fetcher(`/${mode}`, requestBody);
};
