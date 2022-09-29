import { Box, Grid, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Image from "next/image";

const DownloadBox = () => {
  return (
    <Box sx={{
      position: 'absolute',
      bgcolor: 'common.black',
      zIndex: 1,
      border: `2px solid ${grey[700]}`,
      borderRadius: 2,
      p: 1,
      width: {
        xs: '80%',
        sm: '70%',
        md: '60%'
      },
      bottom: {
        xs: '5%',
        md: '10%'
      },
      left: '50%',
      transform: 'translate(-50%, 0)'
    }}>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={2} md={3}>
          <Image src='/images/boxshot.png' width='55px' height='80px' layout='intrinsic' alt='boxshot' />
        </Grid>
        <Grid item xs={8} md={6}>
          <Typography>Stranger Things</Typography>
          <Typography variant="body1" color={blue.A400}>
            Downloading...
          </Typography>
        </Grid>
        <Grid item xs={2} md={3}>
          <Image src='/images/download.gif' width='50px' height='50px' layout='intrinsic' alt='download' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DownloadBox;