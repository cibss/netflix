import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const BorderedBottomBox = styled(Box)(({ theme }) => ({
  bgcolor: theme.palette.common.black,
  borderBottom: `8px solid ${grey[900]}`
}))

export default BorderedBottomBox;