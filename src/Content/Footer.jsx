import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
      <Box sx={{backgroundColor:'black', display:'flex', flexDirection:'row', color:'white', padding:2}}>
        <Box sx={{borderRight:'2px solid white', width:'60%', padding:2}}>
        <img src='logoFooter.png' alt="company logo" style={{paddingLeft:18}}/>
        <Box sx={{padding:4 }}>

            <Typography variant='body1'>Sectheta is dedicated to bridging the gap between academic knowledge and industry demands in the field of cybersecurity, information security and payment security through its comprehensive curriculum designed by industry experts that are tailored for engineering and MCA graduates.</Typography>
        </Box>
        </Box>
        <Box sx={{paddingX:12, paddingTop:6, display:'flex', flexDirection:'column', placeItems:'left', marginLeft:12}}>
            <Typography sx={{fontFamily:'Manrope', fontSize:'20px', fontWeight:600}}>Address</Typography>
            <Typography sx={{fontFamily:'Manrope', fontSize:'16px'}}>Dwarka</Typography>
            <Typography sx={{fontFamily:'Manrope', fontSize:'20px', fontWeight:600, marginTop:4}}>Phone</Typography>
            <Typography sx={{fontFamily:'Manrope', fontSize:'16px'}}>18005709907</Typography>
        </Box>

    </Box>
  )
}
