import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";

const Title = ({ text }) => (
  <Typography variant="h3" component='h2' gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
    {text}
  </Typography>
);

const Description = ({ text }) => (
  <Typography variant="h5" component='h3' sx={{ textAlign: { xs: 'center', md: 'left' } }}>
    {text}
  </Typography>
)

const Features = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'common.white' }}>
      <BorderedBottomBox>
        <Container maxWidth='lg' sx={{ py: 6 }}>
          <Grid container alignItems='center' columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text='Enjoy on your TV.' />
              <Description text='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Image src='/images/tv.png' width='640px' height='480px' layout='responsive' alt='tv' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
    </Box>
  )
}

export default Features;