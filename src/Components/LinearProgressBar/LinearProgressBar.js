import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import {useCountUp} from "use-count-up";

function LinearProgressBar(props) {
  const { value } = useCountUp({
    isCounting: true,
    start: 0,
    end: Math.min(Math.max(Number(props.value),0), 100),
  });
  return (
    <LinearProgress
      determinate
      value={Number(value)}
    />
  );
}

export default LinearProgressBar;