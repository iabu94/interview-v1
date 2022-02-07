import { AppBar, Box } from '@mui/material';
import React from 'react';
import common from '../MenuItems/Common';
import languages from '../MenuItems/Languages';
import TopToolbar from './TopToolbar';

function TopAppbar() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 2,
        }}
      >
        Inteview Questions and Answers
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <TopToolbar menu={common} />
          <TopToolbar menu={languages} />
        </AppBar>
      </Box>
    </>
  );
}

export default TopAppbar;
