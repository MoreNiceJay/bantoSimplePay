import "../index.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans KR, Noto Sans, Montserrat",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // "@global": {
        //   "@font-face": [notoSansKR, notoSans],
        // },
      },
    },
  },
});

export default theme;
