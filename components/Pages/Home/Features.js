import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";
import DownloadBox from "./DownloadBox";

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
    <Box>

      <BorderedBottomBox>
        <Container maxWidth='lg' sx={{ py: 6 }}>
          <Grid container alignItems='center' columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text='Enjoy on your TV.' />
              <Description text='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Image src='/images/tv.png' width='640px' height='480px' layout='responsive' alt='tv' />
                </Box>
                <Box sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '72%',
                  maxHeight: '54%',
                  top: '48%',
                  left: '50%'
                }}>
                  <video src="/videos/tv.m4v" style={{ height: '100%', width: '100%' }} autoPlay playsInline muted loop></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth='lg' sx={{ py: 6 }}>
          <Grid container alignItems='center' columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: 'relative' }}>
                <Box>
                  <Image src='/images/mobile.jpg' width='640px' height='480px' layout='responsive' alt='mobile' />
                </Box>
                <DownloadBox />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box>
                <Title text='Download your shows to watch offline.' />
                <Description text='Save your favorites easily and always have something to watch.' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth='lg' sx={{ py: 6 }}>
          <Grid container alignItems='center' columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Title text='Watch everywhere.' />
              <Description text='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Image src='/images/devices.png' width='640px' height='480px' layout='responsive' alt='devices' />
                </Box>
                <Box sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '65%',
                  maxHeight: '49%',
                  top: '33%',
                  left: '50%'
                }}>
                  <video src="/videos/devices.m4v" style={{ height: '100%', width: '100%' }} autoPlay playsInline muted loop></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth='lg' sx={{ py: 6 }}>
          <Grid container alignItems='center' columnSpacing={12}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Image src='/images/kids.png' width='640px' height='480px' layout='responsive' alt='kids' />
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box>
                <Title text='Create profiles for kids.' />
                <Description text='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

    </Box>
  )
}

export default Features;