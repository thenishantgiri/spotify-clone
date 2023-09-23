import AuthForm from "../components/authForm";

const Signup = () => {
  // Render the 'AuthForm' component with the 'mode' prop set to "signup"
  return <AuthForm mode="signup" />;
};

// Attach a custom property 'authPage' to the 'Signup' component for metadata
Signup.authPage = true;

export default Signup;
