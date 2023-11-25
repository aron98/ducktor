import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

function LinearProgressBar(props) {
  const { value } = useCountUp({
    isCounting: true,
    duration: 1,
    easing: 'easeInCubic',
    start: 0,
    end: 75,
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={24}
      value={Number(value)}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '24px',
      }}
      style={{backgroundColor: "#056608"}}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'hard-light' }}
      >
        {props.title} {`${Math.round(Number(value))}%`}
      </Typography>
    </LinearProgress>
  );
}

export default LinearProgressBar;