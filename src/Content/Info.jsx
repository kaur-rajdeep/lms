import { Box, Typography } from "@mui/material";
import React from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';

export const Info = () => {
  return (
    <Box sx={{ mt: "5%", backgroundColor: "#f6f6f6", py: "2%", fontFamily:'Roboto' }}>
      <Typography sx={{ textAlign: "center", fontSize: "18px"}}>
        Master Payment Security Auditing: A Curriculum Built on <br />
        <span style={{ color: "#DA3D33", fontWeight: "600" }}>
          <u>20+ Years of Expertise</u>
        </span>
      </Typography>
      <Box sx={{display:'flex', placeItems:'center', justifyContent:'space-around'}}>
      <Box sx={{display:{md:'flex', sm:'grid'}, justifyContent:{md:'space-around', sm:'center'}, m:'5%', columnGap:'2%', width:{md:'70%'}}}>
        <Box sx={{backgroundColor:'#d1cdcd', width:{md:'30%', sm:'70%', xs:'90%'}, boxShadow: '0px 10px 2px #ececec', borderRadius:'50px', p:{sm:'12%', md:'4%', xs:'6%'}, m:{sm:'4%', md:1, xs:2}, display:'flex', placeItems:'center', flexDirection:'column'}}>
            <WorkspacePremiumIcon sx={{width:'80px', height:'80px', color:'#DA3D33', px:'2%'}}/>
            <Typography sx={{ fontWeight:'600', fontFamily:'Roboto', color:'#525252' }}>Founded by Panacea
Infosec, a leading global
cybersecurity firm.</Typography>
        </Box>
        <Box sx={{backgroundColor:'#d1cdcd', width:{md:'30%', sm:'70%', xs:'90%'}, boxShadow: '0px 10px 2px #ececec', borderRadius:'50px', p:{sm:'12%', md:'4%', xs:'6%'}, m:{sm:'4%', md:1, xs:2}, display:'flex', placeItems:'center', flexDirection:'column'}}>
            <EmojiObjectsOutlinedIcon sx={{width:'80px', height:'80px', color:'#DA3D33', px:'2%'}}/>
            <Typography sx={{ fontWeight:'600', fontFamily:'Roboto', color:'#525252' }}>High practice-to-instruction
ratio for practical skill
development.</Typography>
        </Box>
        <Box sx={{backgroundColor:'#d1cdcd', width:{md:'30%', sm:'70%', xs:'90%'}, boxShadow: '0px 10px 2px #ececec', borderRadius:'50px', p:{sm:'12%', md:'4%', xs:'6%'}, m:{sm:'4%', md:1, xs:2}, display:'flex', placeItems:'center', flexDirection:'column'}}>
            <SensorOccupiedOutlinedIcon sx={{width:'80px', height:'80px', color:'#DA3D33', px:'2%'}}/>
            <Typography sx={{fontWeight:'600', fontFamily:'Roboto', color:'#525252' }}>Receive 1:1 mentorship from
seasoned industry veterans
and leaders.</Typography>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};
