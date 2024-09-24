import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const ApplyNow = () => {
  return (
    <Box sx={{backgroundColor: '#1f2128', color:'white', marginTop:'5%', display:'flex', justifyContent:'space-between'}}>
        <Box>
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontFamily: "Manrope",
            wordSpacing:'4px',
            fontWeight: 600,
            textAlign: "left",
            lineHeight:1.4,
            paddingX:8,
            paddingTop:8,
            width:'100%'
          }}
        >
          We create leaders in Cybersecurity who learn<br/> to thrive during uncertain times.
        </Typography>
        <Typography sx={{color:'white', fontFamily:'Manrope', lineHeight:'2rem', wordSpacing:'2px', paddingX:6, paddingBottom:2, paddingTop:2}}>
            <ul>
                <li>Job readiness program with highlt experiencial curriculum in information & payment security</li>
                <li>Certification for enhancing students credentials and marketability in cybersecurity job market</li>
                <li>leverage network of industry leaders with life long learning that extends beyond this program</li>
            </ul>
        </Typography>
        <Button variant='contained' sx={{marginX:8, paddingX:4}}>Apply Now</Button>
        </Box>
        <Box sx={{marginBottom:'-6px'}}>
            <img src='./images/apply-now.png'/>
        </Box>
    </Box>
  )
}
