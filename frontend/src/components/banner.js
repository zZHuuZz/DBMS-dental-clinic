import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = ['./banner1.png', './banner2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={bannerImages[currentImageIndex]}
        alt={`Banner ${currentImageIndex + 1}`}
        style={{
          width: '65%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </Box>
  );
}

export default Banner;
