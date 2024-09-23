import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Intro = () => {
  return (
    <Box sx={{ margin:'5%', textAlign:'left', width:{md:'70%', xs:'100%'}}}>
        <Typography variant='h3' sx={{fontSize:{xs:'32px', md:'42px'}, fontWeight:600, lineHeight:{md:'70px', xs:'40px'}, fontFamily:'Roboto'}}>
            POST GRADUATE<br/> CERTIFICATE PROGRAM <br/>IN PAYMENT SECURITY
        </Typography>
        <Typography variant='body1' sx={{wordSpacing:'2px', lineHeight:{xs:'20px', md:'30px'}, fontFamily:'Segoe UI'}}>
            From cybersecurity enthusiast to certified auditor - launch your journey with Sectheta.
        </Typography>
        <Button variant='contained' color='primary' sx={{borderRadius:'50px', marginTop:'5%', textTransform: 'none', fontFamily:"Segoe UI"}}>Download brochure</Button>
    </Box>
  )
}
