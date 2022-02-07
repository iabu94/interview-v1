import { Box, Button, Toolbar } from '@mui/material';
import React from 'react';

function TopToolbar({ menu }) {
  return (
    <Toolbar sx={{ textAlign: 'center' }}>
      <Box sx={{ flexGrow: 1 }}></Box>
      {menu.map((common) => (
        <Button
          size="large"
          sx={{
            bgcolor: 'white',
            fontWeight: 'bold',
            fontSize: 15,
            marginX: 1,
            color: 'black',
            ':hover': {
              bgcolor: 'whitesmoke',
              color: 'blue',
            },
          }}
        >
          {common.name}
        </Button>
      ))}
      <Box sx={{ flexGrow: 1 }}></Box>
    </Toolbar>
  );
}

export default TopToolbar;
