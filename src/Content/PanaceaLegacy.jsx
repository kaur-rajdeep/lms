import React from 'react'
import { Box, Typography } from "@mui/material";

export const PanaceaLegacy = () => {
    const stats = [
        { number: '50+', description: 'Presence in countries worldwide' },
        { number: '1400+', description: 'Clients across industries' },
        { number: '100+', description: 'Professionals in our qualified team' },
        { number: '300+', description: 'Man-years experience of the leadership team in cybersecurity' },
        { number: '1000+', description: 'Security professionals trained till date' },
      ];
      
  return (
    <Box
      sx={{ width: "100%", mt:'4%', display: "grid", placeItems: "center", backgroundColor:'#DA3D33' }}
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
          Panacea’s Legacy?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ffffff",
            fontFamily: "Manrope",
            fontWeight: 400,
            textAlign: "center",
            mx: "2%",
            width:'70%',
            paddingBottom:4,
            backgroundColor:'#DA3D33',
            wordSpacing:4
          }}
        >
          Panacea Infosec is a QSA company and leading provider of PCI DSS, CERT-In, ISO, GDPR, HIPAA, SOC compliance services, serving clients on all aspects of Information Security Governance, Risk Management and Compliance Management. 
        </Typography>
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 4,
        color: '#ffffff',
        gap: 4,
      }}
    >
      {stats.map((stat, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            paddingX: 2,
            borderRight: index < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.5)' : 'none', // Adds vertical divider line except for the last item
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', 
            fontFamily: "Manrope" }}>
            {stat.number}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px',
            fontFamily: "Manrope" }}>
            {stat.description}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>
  )
}
