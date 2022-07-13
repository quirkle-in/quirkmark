import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true
  }
}

export default createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "none",
            color: "#bdc0c2",
            backgroundColor: "#262626"
          },
        },
      ],
    },
  },
});
