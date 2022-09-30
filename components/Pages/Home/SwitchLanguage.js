import { Select, MenuItem } from "@mui/material";

const SwitchLanguage = () => {
  return (
    <Select name="lang" variant="outlined" size="small" defaultValue='EN' sx={{
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'common.white',
      color: 'common.white',
      '& .MuiSelect-icon': {
        color: 'common.white'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      }
    }}>
      <MenuItem value='EN'>English</MenuItem>
      <MenuItem value='ID'>Bahasa Indonesia</MenuItem>
    </Select>
  )
}

export default SwitchLanguage;