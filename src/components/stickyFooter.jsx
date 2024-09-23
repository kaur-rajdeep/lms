import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

export default function StickyFooter() {
  return (
      <Box
        component="footer"
        sx={{
          py: 1.2,
          px: 1,
          position: 'relative', // Change to relative so it's not fixed
          top: 0, // Position the footer at the top of the page
          width: '100vw',
          textAlign: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" sx={{padding:'5px'}}>
          <Typography variant="body1">
            <AutoAwesomeIcon sx={{color:'#DA3D33', marginBottom:'-10px', marginRight:'12px', width:'50px', height:'35px'}}/>
            Master the art of security auditing with Sectheta 
            <Button variant='contained' color='primary' sx={{borderRadius:'50px', marginLeft:'15px'}}>Apply Now</Button>
          </Typography>
          {/* <Copyright /> */}
        </Container>
      </Box>
  );
}
