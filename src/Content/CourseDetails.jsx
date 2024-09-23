import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GppGoodSharpIcon from '@mui/icons-material/GppGoodOutlined';

export const CourseDetails = () => {
  return (
    <Box sx={{ width: '100%', my:'1%'}}>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, mx:'auto', width:'100%', fontFamily:'Roboto', backgroundColor:'#f5f5f5' }}>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, placeItems:'center', mx:'auto', p:2}}>
      <Typography variant='body1' sx={{ fontSize:'18px'}}><b>Batch Starts: </b>January 2025</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, placeItems:'center', mx:'auto', p:2}}>
      <Typography variant='body1' sx={{fontSize:'18px'}}><b>Duration: </b>6 Months</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, placeItems:'center', mx:'auto', p:2}}>
      <Typography variant='body1' sx={{fontSize:'18px'}}><b>Mode: </b>Online and On Job Training</Typography>
    </Box>
    </Box>

  </Box>

  )
}