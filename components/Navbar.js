"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { Height } from '@mui/icons-material';

export default function ButtonAppBar() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar appBarHeight">
        <Toolbar>

          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={() => router.push('/')}><img src='/images/logo1.png' width={85} className='ms-1' ></img></Button>
          </Typography>

          <Button className='appBar appBarff' onClick={() => router.push('/')}>Home</Button>
          <Button className='appBar appBarff' onClick={() => router.push('/about')}>About</Button>
          <Button className='appBar appBarff' onClick={() =>router.push('/products')}>Our Menu</Button>
          <Button className='appBar appBarff' onClick={() =>router.push('/login')}>Login</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}