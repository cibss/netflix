import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { FOOTER_LIST } from "../../../utils/constants";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'grey.700'}}>
      <Container maxWidth='md' sx={{ py: 6 }}>
        <Typography mb={4}>Questions? Call 007-803-321-2130</Typography>
        <Grid container spacing={4}>
          {FOOTER_LIST.map((item) => (
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography variant="body1" component='a' href='#'>{item}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer;