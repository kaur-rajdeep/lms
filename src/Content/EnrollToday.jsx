import { Box, Typography } from "@mui/material";
import React from "react";

export const EnrollToday = () => {
  return (
    <Box
      sx={{ width: "100%", mt:'-14px', display: "grid", placeItems: "center", backgroundColor:'#DA3D33' }}
    >
         <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontFamily: "Manrope",
            fontWeight: 600,
            textAlign: "center",
            lineHeight:1.4,
            width:'90%',
            padding:'2%',
            backgroundColor:'#DA3D33'
          }}
        >
          Are you ready to be tomorrow's leader in
          <br /> cybersecurity?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            fontFamily: "Manrope",
            fontWeight: 400,
            textAlign: "center",
            mx: "2%",
            width:'90%',
            paddingBottom:4,
            backgroundColor:'#DA3D33'
          }}
        >
          Enroll Today to Build a Successful Career
        </Typography>
        <Box sx={{width:'90%', display:'flex', flexDirection:{md:'row', xs:'column'}}}>
        <Box sx={{ width: "90%", backgroundColor: "#DA3D33", mb:'40px' }}>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "5px",
            margin: 2,
            width: "485px",
            height: "135px",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              padding: 2,
              fontFamily: "Manrope",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            Future Chief Information Security Officer
          </Typography>
          <img
            src="1.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="image"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "5px",
            marginLeft:12,
            width: "485px",
            height: "135px",
            backgroundColor: "white",
          }}
        >
          <img
            src="2.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="image"
          />
          <Typography
            variant="body1"
            sx={{
              padding: 2,
              fontFamily: "Manrope",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            Future Ethical Technology Advisor
          </Typography>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "5px",
            margin: 2,
            width: "485px",
            height: "135px",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              padding: 2,
              fontFamily: "Manrope",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            Future Payment Security Consultant
          </Typography>
          <img
            src="3.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            alt="image"
          />
        </Box>
      
      </Box>
      <Box sx={{backgroundColor:'#DA3d33'}}>
        <Box sx={{backgroundColor:'white', padding:'2%', margin:'2%', borderRadius:'20px'}}>
            <Typography sx={{}}>You are a fresh or final year engineering or computer application graduate looking for a break in Information Security and Cyber security Industry.</Typography>
        </Box>
        <Box sx={{backgroundColor:'#22242c', padding:'2%', margin:'2%', borderRadius:'20px'}}>
            <Typography sx={{color:'white'}}>You want to be a future Chief Information Security Officer (CISO), Security Consultant or Ethical Hacking Technology Advisor.</Typography>
        </Box>
        <Box sx={{backgroundColor:'white', padding:'2%', margin:'2%', borderRadius:'20px'}}>
            <Typography sx={{}}>You have strong inclination towards future technologies in Information & Network and cybersecurity space.</Typography>
        </Box>
        <Box sx={{backgroundColor:'#22242c', padding:'2%', margin:'2%', borderRadius:'20px'}}>
            <Typography sx={{color:'white'}}>you have a strong longing to enhance your professional status and capabilities or to venture into a different field</Typography>
        </Box>
        <Box sx={{backgroundColor:'white', padding:'2%', margin:'2%', borderRadius:'20px'}}>
            <Typography sx={{}}>You seek a program with guaranteed internship & job assistance with intensive but flexible hybrid learning options.</Typography>
        </Box>
    </Box>
    </Box>
    </Box>
  );
};
