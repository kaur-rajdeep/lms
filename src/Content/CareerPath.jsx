import React from 'react'
import { Box, Card, Typography } from '@mui/material';

// Mock data representing each career stage
const careerStages = [
  {
    id: '01',
    image:'./career/18.png',
    title: 'Security Analyst/Engineer',
    description: 'Mastering and applying general security principles',
    salary: '4-6 LPA',
    level: 'Early Career (Fresher)',
    icon: '', // Add path to icon if needed
  },
  {
    id: '02',
    image:'./career/19.png',
    title: 'Security Consultant I',
    description: 'Provide expert advice on an organization’s security posture, strategies and Solutions',
    salary: '6-12 LPA',
    level: 'Mid-Career (2-4 Years)',
    icon: '', // Add path to icon if needed
  },
  {
    id: '03',
    image:'./career/20.png',
    title: 'Security Consultant II',
    description: 'Provide expert advice on an organization’s security posture, strategies and Solutions',
    salary: '12-30 LPA',
    level: 'Mid-Career (4-6 Years)',
    icon: '', // Add path to icon if needed
  },
  {
    id: '04',
    image:'./career/21.png',
    title: 'Senior Security Consultant',
    description: 'Lead threat intelligence teams, pen tests, and incident response teams',
    salary: '30-40 LPA',
    level: 'Senior Level (6-8 Years)',
    icon: '', // Add path to icon if needed
  },
  {
    id: '05',
    image:'./career/22.png',
    title: 'Chief Information Security Officer',
    description: 'Leading and protecting information resources and technologies, developing, implementing and enforcing security policies',
    salary: '40+ LPA',
    level: 'Security Leaders (8+ Years)',
    icon: '', // Add path to icon if needed
  },
];


export const CareerPath = () => {
        const baseHeight = 300;
        const heightIncrement = 50;
        const baseOpacity = 50;
        const opacityIncrement = 10;
  return (
    <Box sx={{display:'Grid', placeItems:'center'}}>

    <Box sx={{marginTop:10, display:'Grid', placeItems:'center'}}>
        <Typography variant='h4' sx={{fontFamily:'Manrope', fontWeight:'bold'}}>The Career Path to Success</Typography>
        <Typography variant='body1' sx={{fontFamily:'Manrope', mt:'2%', wordSpacing:'4px'}}>A fulfilling, successful and well-paying career in cybersecurity awaits you</Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 2,
        padding: 4,
        marginLeft:10,
        position: 'relative',
      }}
    >
      {/* Vertical Arrow Label */}
      <Typography
        variant="h5"
        sx={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          position: 'absolute',
          left: '-50px',
          top: ' 55%',
          color: '#da3d33',
          fontWeight: 'bold',
        }}
      >
        Career Progression
      </Typography>

      {/* Career Stages */}
      {careerStages.map((stage, index) => (
        <Card
          key={stage.id}
         sx={{
            padding: 2,
            borderLeft: `4px solid black`,
            width: '200px',
            height: `${baseHeight + index * heightIncrement}px`, // Increment height progressively
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#ffffff', // Highlight the last card
            color: '#000',
            transition: 'height 0.3s ease',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'left', gap: 1 }}>
            <Box
              sx={{
                width: '50px',
                height: '30px',
                backgroundColor: '#da3d33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              {stage.id}         
              </Box>
              <Box sx={{ width: '100px',
    height: '70px',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    lineHeight: '100px',
    fontSize: '20px',
                 backgroundColor:'#da3d33', opacity:`${baseOpacity+index*opacityIncrement}%`
        }}>
          <div style={{content: "''",
    position: 'absolute',
    right: '-50px',
    top: '0',
    width: '0',
    height: '0',
    borderTop: '31px solid transparent',
    borderBottom: '40px solid transparent',
    borderLeft: '50px solid #da3d33'}}></div>
          <img src={stage.image} alt="image" height='50' />
        </Box>
            <Typography variant="h6" sx={{ fontSize: '14px' }}>
              {stage.title}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginY: 1, fontSize: '12px' }}>
            {stage.description}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px' }}>
            Salary - <b>{stage.salary}</b>
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '12px' }}>
            <b>{stage.level}</b>
          </Typography>
        </Card>
      ))}
    </Box>
    <Box sx={{ width: '80%',
    height: '80px',
   background: 'linear-gradient(90deg, #f38787 0%, #da3d33 100%)',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    lineHeight: '100px',
    fontSize: '20px',}}>
      <Box sx={{content: "''",
    position: 'absolute',
    right: '-50px',
    marginTop:'-18px',
    top: '0',
    width: '0',
    height: '0',
    borderTop: '60px solid transparent',
    borderBottom: '60px solid transparent',
    borderLeft: '60px solid #da3d33',}}>

      </Box>
    </Box>

    </Box>
  )
}
