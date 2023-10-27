'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from './components/container/PageContainer';
// components
import SalesOverview from './components/dashboard/SalesOverview';
import DailyActivity from './components/dashboard/DailyActivity';
import ProductPerformance from './components/dashboard/ProductPerformance';
import BlogCard from './components/dashboard/Blog';
const Dashboard = function () {
    return (<PageContainer title="Dashboard" description="this is Dashboard">
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={4}>
          <DailyActivity />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={12}>
          <BlogCard />
        </Grid>
      </Grid>
    </Box>
  </PageContainer>);
};
export default Dashboard;
