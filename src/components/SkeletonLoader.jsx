import React from 'react'
import { Skeleton } from '@mui/material';

function SkeletonLoader() {
  return (
    <div className='flex items-center py-5 px-5 gap-4'>
    <Skeleton animation="wave" variant="circular" width={50} height={50} sx={{padding:'1em'}}/>
    <Skeleton animation="wave" variant="rounded" width={'80%'} height={50} />
    </div>
  )
}

export default SkeletonLoader