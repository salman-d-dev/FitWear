'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from './components/container/PageContainer';
// components
import SalesOverview from './components/dashboard/SalesOverview';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const Dashboard = function () {
  const router = useRouter();
  useEffect(()=>{
    if(!localStorage.getItem('admin-token')){
      router.push('/admin')
    }
  },[])
    return (<PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
      </Grid>
    </Box>
  </PageContainer>);
};
export default Dashboard;
