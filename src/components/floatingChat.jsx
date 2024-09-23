import { Box, Fab } from '@mui/material'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import React from 'react'

export default function FloatingChat() {
  return (
    <div>
        <Box sx={{position:'fixed',
            right:20,
            bottom:140
        }}>

        <Fab><PermPhoneMsgIcon/></Fab>
        </Box>
    </div>
  )
}
