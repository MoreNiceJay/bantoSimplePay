import { Box, styled } from "@mui/system";

const CustomLeftBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
  alignItems: "center",
  justifyContent: "center",
}));

export default CustomLeftBox;
