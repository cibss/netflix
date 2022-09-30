import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { FOOTER_LIST } from "../../../utils/constants";
import SwitchLanguage from "./SwitchLanguage";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'grey.700'}}>
      <Container maxWidth='md' sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Typography mb={4}>Questions? Call 007-803-321-2130</Typography>
          <Box>
            <Grid container spacing={4} mb={4}>
              {FOOTER_LIST.map((item) => (
                <Grid item xs={6} md={3}>
                  <Typography variant="caption" component='a' href='#'>{item}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box mb={4}>
            <SwitchLanguage />
          </Box>
          <Typography variant="caption">Netflix Indonesia</Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer;