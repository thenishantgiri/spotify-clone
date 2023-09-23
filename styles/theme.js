import { extendTheme } from "@chakra-ui/react";

const inputs = {
  variants: {
    custom: (props) => ({
      field: {
        marginBottom: "5px",
        border: "none",
        borderBottom: "1.3px solid",
        borderColor: "#F5f5f5",
        backgroundColor: "transparent",
        borderRadius: 0,
        paddingY: "8px",
        paddingX: "0px",
        _focus: {
          backgroundColor: "inherit",
          borderColor: "green.300",
          boxShadow: "none",
        },
        _autofill: {
          boxShadow: "0 0 0px 1000px #9E9E9E inset",
          transition: "background-color 5000s ease-in-out 0s",
        },
      },
    }),
  },
};

const buttons = {
  variants: {
    link: {
      ":focus": {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
};

const gray = {
  100: "#F5f5f5",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const theme = extendTheme({
  colors: { gray },
  components: {
    Input: inputs,
    Button: buttons,
  },
});

export default theme;
