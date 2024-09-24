import { Box, Typography } from '@mui/material'
import React from 'react'

export const MentorSpeak = () => {
  return (
    <Box sx={{ backgroundColor: '#da3d33', display: 'flex', height: '550px', position: 'relative', padding: '20px' }}>
      
      {/* Left Quotation Mark Image */}
      <Box sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
        <img src="5.png" alt="Quote" width="20%" />
      </Box>

      {/* Left Text Section */}
      <Box sx={{ zIndex: 2, padding: '30px', color: 'white', flex: 1, position: 'relative', margin:'2%', marginTop:'5%' }}>
        <Typography variant="h4" sx={{ fontWeight: 'normal', maxWidth: '600px' }}>
          This program at Sectheta weaves payment security learning. It provides a stepping stone to create an impact that matters in the Cyber Security space.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', marginTop:'2%' }}>
          Sussanne khan
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize:'20px' }}>
          IT Analyst, Wipro
        </Typography>
      </Box>

      {/* Right Circular Background */}
      <img src="6.png" alt="circle"  height="500px"/>
    </Box>
  )
}
