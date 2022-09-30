import { Box, Container, Typography, Grid, Button, AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";
import GetStartedField from "./GetStartedField";
import SwitchLanguage from "./SwitchLanguage";

const Header = () => {
  return (
    <BorderedBottomBox>
      <AppBar sx={{ bgcolor: 'transparent', padding: '25px 20px', position: 'absolute'}} elevation={0}>
        <Toolbar>
          <Grid container alignItems='center' spacing={2}>
            <Grid item xs>
              <Image src='/images/netflix.svg' height='45px' width='167' layout='intrinsic' alt='logo' />
            </Grid>
            <Grid item xs='auto'>
              <SwitchLanguage />
            </Grid>
            <Grid item xs='auto'>
              <Button color="primary" variant="contained">Sign in</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{
        position: 'relative',
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.8) 100%
          )`
        }
      }}>
        <Image src='/images/backdrop.jpg' layout='fill' alt='backdrop' priority />
        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1000 }}>
          <Typography variant='h2' component='h1' color='common.white' fontWeight='600' textAlign='center'>
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography variant='h5' component='p' color='common.white' textAlign='center' gutterBottom>
            Watch anywhere. Cancel anytime.
          </Typography>
          <GetStartedField />
        </Container>
      </Box>
    </BorderedBottomBox>
  )
}

export default Header;