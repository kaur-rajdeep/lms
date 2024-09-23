import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GppGoodSharpIcon from '@mui/icons-material/GppGoodOutlined';

export const Highlight = () => {
  return (
    <Box sx={{ width: '100%', my:'2%' }}>
    <Divider
      sx={{
        borderBottomWidth: '3px', 
        borderColor: '#e6e6e6',    
        width: '90%',              
        mx: 'auto',                
      }}
    />
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, mx:'auto', width:'90%'}}>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, placeItems:'center', mx:'auto', p:2}}>
      <SchoolIcon sx={{width:"80px", height:"80px", borderRadius:'100%', backgroundColor:'#e6e6e6', padding:{xs:'6%', md:'5%'}, mx:'1%'}}/>
      <Typography variant='body1' sx={{mx:{xs:'8%', md:'1%'}, padding:'2%'}}>Final Year Tech Students, Fresh Graduates & Early Career Professionals</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, placeItems:'center', mx:'auto', p:2}}>
      <CalendarMonthOutlinedIcon sx={{width:"80px", height:"80px", borderRadius:'100%', backgroundColor:'#e6e6e6', padding:{xs:'6%', md:'6%'}, mx:'1%'}}/>
      <Typography variant='body1' sx={{mx:{xs:'8%', md:'1%'}, padding:'2%'}}>6-months intensive training program</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, placeItems:'center', mx:'auto', p:2}}>
      <GppGoodSharpIcon sx={{width:"80px", height:"80px", borderRadius:'100%', backgroundColor:'#e6e6e6', padding:{xs:'6%', md:'5%'}, mx:'1%'}}/>
      <Typography variant='body1' sx={{mx:{xs:'8%', md:'1%'}, padding:'2%'}}>Practitioner-led online learning with live project experiences</Typography>
    </Box>
    </Box>
    <Divider
      sx={{
        borderBottomWidth: '3px', 
        borderColor: '#e6e6e6',    
        width: '90%',              
        mx: 'auto',                
      }}
    />

  </Box>

  )
}
