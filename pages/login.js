import { Box, Container, Typography, Grid, Button, AppBar, Toolbar } from "@mui/material";
import Image from "next/image";

const Login = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: 'transparent', padding: '25px 20px', position: 'absolute'}} elevation={0}>
        <Toolbar>
          <Grid container alignItems='center' spacing={2}>
            <Grid item xs>
              <Image src='/images/netflix.svg' height='45px' width='167' layout='intrinsic' alt='logo' />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{
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
      </Box>
    </Box>
  )
}

export default Login;