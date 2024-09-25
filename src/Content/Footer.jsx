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
          <Box sx={{display:'flex'}}>
          <img src="41.png" alt="location" width='30px' height='30px'/>
          <Box>
            <Typography sx={{fontFamily:'Manrope', fontSize:'20px', fontWeight:600, marginLeft:'12px'}}>Address</Typography>
            <Typography sx={{fontFamily:'Manrope', fontSize:'16px', marginLeft:'12px'}}>Dwarka</Typography>
          </Box>
          </Box>
          <Box sx={{display:'flex', marginTop:4}}>
          <img src="41.png" alt="location" width='30px' height='30px'/>
          <Box>
            <Typography sx={{fontFamily:'Manrope', fontSize:'20px', fontWeight:600, marginLeft:'12px'}}>Phone</Typography>
            <Typography sx={{fontFamily:'Manrope', fontSize:'16px', marginLeft:'12px'}}>18005709907</Typography>
          </Box>
          </Box>
        </Box>

    </Box>
  )
}
