import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const Info = () => {
  return (
    <Box sx={{ mt: "5%", backgroundColor: "#f6f6f6", py: "2%", fontFamily:'Manrope' }}>
      <Typography sx={{ textAlign: "center", fontSize: "18px"}}>
        Master Payment Security Auditing: A Curriculum Built on <br />
        <span style={{ color: "#DA3D33", fontWeight: "600" }}>
          <u>20+ Years of Expertise</u>
        </span>
      </Typography>
      <Box sx={{display:'flex', placeItems:'center', justifyContent:'space-around'}}>
      <Box sx={{display:{md:'flex', sm:'grid'}, justifyContent:{md:'space-around', sm:'center'}, m:'5%', columnGap:'2%', width:{md:'70%'}}}>
        <Box sx={{backgroundColor:'#e6e6e6', width:{md:'30%', sm:'70%', xs:'90%'}, boxShadow: '0px 10px 12px #ececec', borderRadius:'50px', p:{sm:'12%', md:'4%', xs:'6%'}, m:{sm:'4%', md:1, xs:2}, display:'flex', placeItems:'center', flexDirection:'column',transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.09)',
boxShadow: '-9px -9px 18px #f2f2f2, 9px 9px 18px #f2f2f2',
              },}}>
        <img width='140px' src="97.png" style={{ padding:'2%', margin:'0.2rem'}}/>
            <Typography sx={{ fontWeight:'600', fontFamily:'Manrope', color:'#525252' }}>Founded by Panacea
Infosec, a leading global
cybersecurity firm.</Typography>
        </Box>
        <Box sx={{backgroundColor:'#e6e6e6', width:{md:'30%', sm:'70%', xs:'90%'}, boxShadow: '0px 10px 12px #ececec', borderRadius:'50px', p:{sm:'12%', md:'4%', xs:'6%'}, m:{sm:'4%', md:1, xs:2}, display:'flex', placeItems:'center', flexDirection:'column',transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.09)',
boxShadow: '-9px -9px 18px #f2f2f2, 9px 9px 18px #f2f2f2',
              },}}>
        <img width='140px' src="98.png" style={{ padding:'2%', margin:'4%', marginBottom:'8%'}}/>
            <Typography sx={{ fontWeight:'600', fontFamily:'Manrope', color:'#525252' }}>High practice-to-instruction
ratio for practical skill
development.</Typography>
        </Box>
        <Box sx={{backgroundColor:'#e6e6e6', width:{md:'30%', sm:'70%', xs:'90%'}, boxShadow: '0px 10px 12px #ececec', borderRadius:'50px', p:{sm:'12%', md:'4%', xs:'6%'}, m:{sm:'4%', md:1, xs:2}, display:'flex', placeItems:'center', flexDirection:'column',transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.09)',
boxShadow: '-9px -9px 18px #f2f2f2, 9px 9px 18px #f2f2f2',
              },}}>
        <img width='180px' src="99.png" style={{ padding:'2%', margin:'4%'}}/>
            <Typography sx={{fontWeight:'600', fontFamily:'Manrope', color:'#525252' }}>Receive 1:1 mentorship from
seasoned industry veterans
and leaders.</Typography>
        </Box>
      </Box>
      </Box>
      <Box sx={{display:'grid', placeItems:'center'}}>
      <Button variant='contained' sx={{borderRadius:'25px', paddingY:1, paddingX:3}}>About us</Button>
      </Box>
    </Box>
  );
};
