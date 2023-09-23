import AuthForm from "../components/authForm";

const Signin = () => {
  // Render the 'AuthForm' component with the 'mode' prop set to "signin"
  return <AuthForm mode="signin" />;
};

// Attach a custom property 'authPage' to the 'Signin' component for metadata
Signin.authPage = true;

export default Signin;
