import { Box, styled } from "@mui/system";

const CustomCenterBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
}));

export default CustomCenterBox;
