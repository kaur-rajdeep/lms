import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Intro = () => {
  return (
    <Box sx={{ margin:'5%', textAlign:'left', width:{md:'70%', xs:'100%'}}}>
        <Typography variant='h3' sx={{fontSize:{xs:'32px', sm:'68px', md:'48px'}, fontWeight:600, lineHeight:1.4, fontFamily:'Oswald'}}>
            POST GRADUATE<br/> CERTIFICATE PROGRAM <br/>IN PAYMENT SECURITY
        </Typography>
        <Typography variant='body1' sx={{fontSize:{xs:'16px', md:'18px'}, wordSpacing:'2px', lineHeight:{xs:'20px', md:'30px'}, fontFamily:'Manrope', mt:2}}>
            From cybersecurity enthusiast to certified auditor - launch your journey with Sectheta
        </Typography>
        <Typography variant='body1' sx={{fontSize:{xs:'16px', md:'16px'}, fontFamily:'Manrope', mt:2}}>
            <ul>
              <li>Final Year Tech Students, <b>Fresh Graduates</b> & Early Career Professionals</li>
              <li><b>6-months</b> intensive training program</li>
              <li>Practitioner-led online learning with live <b>project experiences</b></li>
            </ul>
        </Typography>

        <Button variant='contained' color='primary' sx={{borderRadius:'50px', marginTop:'5%', textTransform: 'none', fontFamily:'Manrope'}}>Download brochure</Button>
    </Box>
  )
}
