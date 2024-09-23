import { Box, Typography, Card, CardContent  } from '@mui/material'
import React from 'react'

const data = [
    {
      id: 1,
      title: 'High Demand',
      content: 'With over 3.5 million cybersecurity jobs were unfilled in 2023*, the demand for specialised professionals is at an all-time high.',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      title: 'Rapidly Growing Industry',
      content: 'With Digital Payments, Crypto, Blockchain, IoT and Quantum AI taking over, there’s a need to build a resilient digital ecosystem like never before.  ',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      title: 'Career Progression',
      content: 'The field offers immense potential for advancement and to climb up the corporate ladder swifty, while ensuring a long-term career stability. ',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 4,
      title: 'Lucrative Salary ',
      content: 'Security Analyst are amongst the top earners in the IT sector. Given the specialised skillset and the increasing demand, companies are offering competitive salaries. ',
      image: 'https://via.placeholder.com/100',
    },
  ];
  

export const Why = () => {
  return (
    <Box sx={{display:'grid', placeContent:'center'}}>
        <Typography
          variant="h4"
          sx={{
            color: "#2c2c2c",
            fontFamily: "Manrope",
            fontWeight: 600,
            textAlign: "center",
            lineHeight:1.4,
            marginY:'8%',
            width:'100%'
          }}
        >
         Why Become a Security Analyst?
        </Typography>
        <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, // One column on small screens, two columns on larger screens
        rowGap: 2,
        columnGap:2,
        placeItems:'center'
      }}
    >
      {data.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            placeItems:'center',
            alignItems:'center',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow:'0px 5px 0px black',
            width: '500px', 
            height:'150px',
            padding:2,
            boxSizing: 'border-box',
          }}
        >
          {/* Image on the Left */}
          <Box sx={{ width: '200px', height: '100px', marginRight: 2 }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>
          {/* Title and Content on the Right */}
          <CardContent>
            <Typography variant="h6" sx={{color:'#DA3D33', fontFamily:'Manrope', fontWeight:'600'}}>{item.title}</Typography>
            <Typography variant="body2" sx={{fontFamily:'Manrope'}}>{item.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  )
}
