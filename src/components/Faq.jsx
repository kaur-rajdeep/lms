import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const data = [
  {
    id: 1,
    question: 'Q- Am I eligible for this training? ',
    answer: '- All tech final year students, fresh graduates and Early career professionals are eligible to be part of this training and placement program. A basic knowledge of programming and related technology is essential.',
    defaultExpanded: true,
  },
  {
    id: 2,
    question: 'Q- What is the cost of this training? ',
    answer: '-The complete cost of training is Rs. XXXXXX. The student will be offered a basic stipend during the internship program to cover for transportation. ',
    defaultExpanded: false,
  },
  {
    id: 3,
    question: 'Q- Do I need prior programming knowledge? ',
    answer: 'Yes, a basic knowledge of programming language like XXXX is necessary.  ',
    defaultExpanded: false,
  },
  {
    id: 4,
    question: 'Q- Does this programme come with placement assistance?  ',
    answer: 'Yes, students who successfully complete the training program are eligible to be part of our placement assistance.  ',
    defaultExpanded: false,
  },
  {
    id: 5,
    question: 'Q- Is there any scholarship programme?',
    answer: 'Top 5 students in each cohort will be awarded the 75% scholarship on the course fee.',
    defaultExpanded: false,
  },
  {
    id: 6,
    question: 'Q- Is there any entrance test? ',
    answer: 'There will be a general screening test and a personal interview conducted to ascertain your fitment and eligibility for the training.   ',
    defaultExpanded: false,
  },
];
 
export default function Faq() {
    const [expandedPanel, setExpandedPanel] = useState(null);

  const handleToggle = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Box sx={{display:'grid', placeItems:'center'}}>
    <Typography
      variant="h4"
      sx={{
        color: "#2c2c2c",
        fontFamily:"Manrope",
        fontWeight: 800,
        textAlign: "center",
        lineHeight:1.4,
        marginY:'4%',
        width:'100%'
      }}
    >
     Frequently Asked Questions
    </Typography>

      {data.map((item) => (
         <Accordion
         key={item.id}
         expanded={expandedPanel === item.id}
         onChange={handleToggle(item.id)}
         sx={{
            width:'70%',
            marginBottom: '15px',
            transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
boxShadow: '-9px -9px 18px #f2f2f2, 9px 9px 18px #f2f2f2',
              },
            '&:first-of-type': {
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
            },
            '&:last-of-type': {
              borderBottomLeftRadius: '15px',
              borderBottomRightRadius: '15px',
              marginBottom:'6rem'
            },
            '&:before': {
              display: 'none', // Removes the default line before accordion
            },
            borderRadius:'15px',
            backgroundColor: 'white',
            boxShadow:'none',
            fontFamily:"Manrope",
          }}
       >
         <AccordionSummary
           aria-controls={`panel${item.id}-content`}
           id={`panel${item.id}-header`}
           expandIcon={expandedPanel === item.id ? <span><img src='40.png' alt='shrink' width='30px' height='30px'/></span> : <span><img src='39.png' alt='shrink' width='30px' height='30px'/></span>}
           sx={{
            backgroundColor: '#f8f4f4',
            paddingTop:2,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
            borderRadius: '15px'
          }}
         >
           <Typography sx={{fontFamily:"Manrope", lineHeight:1.4, fontSize:'20px', wordSpacing:'3px'}}>{item.question}</Typography>
         </AccordionSummary>
         <AccordionDetails  sx={{
              backgroundColor: '#ffffff',
              padding: '20px',
              marginTop: '10px',  
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '15px'
            }}>
           <Typography sx={{
        fontFamily:"Manrope", lineHeight:1.4, fontSize:'20px', wordSpacing:'3px'}}>{item.answer}</Typography>
         </AccordionDetails>
       </Accordion>
      ))}
    </Box>
  );
}
