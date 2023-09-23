import {
  Box,
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from "next/image";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  // Define state variables to store form input values and loading state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // State to toggle password visibility
  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);

  // Initialize the Next.js router
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare authentication data based on the mode (signup or signin)
    const authData =
      mode === "signup"
        ? { firstName, lastName, email, password }
        : { email, password };

    try {
      // Call the authentication function from the 'mutations' module
      await auth(mode, authData);

      // Redirect the user to the home page after successful authentication
      router.push("/");
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="1px solid"
        borderColor="green.500"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box
          width="550px"
          paddingX="80px"
          paddingY="40px"
          bg="gray.900"
          borderRadius="6px"
        >
          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <Box>
                <Input
                  isRequired
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  variant="custom"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  isRequired
                  placeholder="Last Name"
                  type="text"
                  variant="custom"
                  value={lastName}
                  focusBorderColor="green.200"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
            )}

            <Input
              isRequired
              placeholder="Email"
              type="email"
              value={email}
              variant="custom"
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputGroup size="md">
              <Input
                isRequired
                variant="custom"
                type={show ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={togglePassword}
                  color="gray.900"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button
              marginTop="20px"
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode === "signup" ? "Sign Up" : "Sign In"}
              {/* Display "Sign Up" or "Sign In" based on the mode */}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
