import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const VideoWrapper = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',
  }
}));

const Video = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const VideoBackground = () => {
  return (
    <VideoWrapper>
      <Video
        autoPlay
        muted
        loop
        playsInline
        src="https://assets.mixkit.co/videos/preview/mixkit-luxury-house-with-a-pool-seen-from-above-42693-large.mp4"
      />
    </VideoWrapper>
  );
};

export default VideoBackground;