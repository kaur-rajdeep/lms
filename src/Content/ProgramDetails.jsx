import { Box, Typography, Card, CardContent  } from '@mui/material'
import React from 'react'

const data = [
    {
      id: 1,
      Title:'Months Program',
      content: '06',
      image: 'https://via.placeholder.com/100',
      color:"#ffde59"
    },
    {
      id: 2,
      Title:'Core Modules',
      content: '07',
      image: 'https://via.placeholder.com/100',
      color:'#d5b740'
    },
    {
      id: 3,
      Title:'Weeks Internship',
      content: '12',
      image: 'https://via.placeholder.com/100',
      color:'#f09949'
    },
    {
      id: 4,
      Title:'Learning Hours',
      content: '100+',
      image: 'https://via.placeholder.com/100',
      color:'#bcb5e7'
    },
    {
      id: 5,
      Title:'Program Starts',
      content: 'Jan 2025',
      image: 'https://via.placeholder.com/100',
      color:'#bcb5e7'
    },
    {
      id: 6,
      Title:'Faculty and Industry',
      content: '10+',
      image: 'https://via.placeholder.com/100',
      color:'#d0cdcd'
    },
    {
      id: 7,
      Title:'Hours of Mentorship Session',
      content: '20+',
      image: 'https://via.placeholder.com/100',
      color:'#fcdd97'
    },
    {
      id: 8,
      Title:'Interview Opportunities',
      content: '3+',
      image: 'https://via.placeholder.com/100',
      color:'#ffde59'
    },
  ];
  

export const ProgramDetails = () => {
  return (
    <Box sx={{display:'grid', placeContent:'center'}}>
        <Typography
          variant="h4"
          sx={{
            color: "#2c2c2c",
            fontFamily: "Manrope",
            fontWeight: 800,
            textAlign: "center",
            lineHeight:1.4,
            marginY:'8%',
            width:'100%'
          }}
        >
         Program Details
        </Typography>
        <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '2fr', sm: 'repeat(4, 1fr)' }, // One column on small screens, two columns on larger screens
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
            flexDirection: 'column',
            placeItems:'center',
            alignItems:'center',
            border: '1px solid #ddd',
            borderRadius: '10px',
            width: '300px', 
            height:'170px',
            padding:2,
            boxSizing: 'border-box',
            borderBottom:`6px solid ${item.color}`,
            backgroundColor:'#f8f4f4'
          }}
        >
          {/* Image on the Left */}
          <Box sx={{ width: '50px', height: '50px'}}>
          <img
              src={item.image}
              alt={item.Title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          </Box>
          {/* Title and Content on the Right */}
            <Typography variant="body2" sx={{fontFamily:'Manrope', marginTop:2, textAlign:'center', fontSize:'28px', fontWeight:'bold'}}>{item.content}</Typography>
            <Typography variant="body2" sx={{fontFamily:'Manrope', textAlign:'center', fontSize:'14px'}}>{item.Title}</Typography>
        </Card>
      ))}
    </Box>
    </Box>
  )
}
