import { Typography, Grid, Button, TextField } from "@mui/material";

const GetStartedField = () => {
  return (
    <>
      <Typography variant='h6' component='p' color='common.white' textAlign='center' gutterBottom sx={{ my: 3 }}>
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      <Grid container>
        <Grid item xs>
          <TextField variant="filled" label='Email address' fullWidth sx={{ bgcolor: 'common.white' }} />
        </Grid>
        <Grid item xs='auto'>
          <Button variant="contained" size="large" color="primary" sx={{ height: '100%', borderRadius: '2px' }}>
            Get started
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default GetStartedField;