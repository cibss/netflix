import { Box, Container, Typography, Grid, Button, AppBar, Toolbar, TextField, FormControl, FormHelperText, InputAdornment, 
  Checkbox } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const loginBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'common.white',
  color: 'common.black',
  boxShadow: 24,
  p: 4
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={loginBoxStyle}>
            <Typography variant="h4" component='h1' mb={4}>Sign In</Typography>
            <Grid sx={{ mb: 2 }}>
              <form>
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <TextField id="email" name="email" label='Email or phone number' variant="filled" />
                  <FormHelperText>Please enter a valid email or phone number.</FormHelperText>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <TextField id="password" type={showPassword ? 'text' : 'password'} name="password" label='Password' variant="filled" InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <Button onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputAdornment>
                    )
                  }} />
                  <FormHelperText>Your password must contain between 4 and 60 characters.</FormHelperText>
                </FormControl>
                <Button variant="contained" type="submit" size="large" fullWidth sx={{ textTransform: 'none' }}>Sign In</Button>
              </form>
            </Grid>
            <Grid container alignItems='center' justifyContent='space-between'>
              <Box>
                <Checkbox />
                <Typography variant="caption">Remember me</Typography>
              </Box>
              <Typography variant="caption">Need help?</Typography>
            </Grid>
            <Grid container mb={2}>
              <Typography variant="body1">New to Netflix? Sign up now.</Typography>
            </Grid>
            <Grid container>
              <Typography variant='caption'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Typography>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Login;