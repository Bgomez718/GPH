'use client';

import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useMediaQuery, useTheme } from '@mui/material';

export default function EquityGauge({ value }: { value: number }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const size = isMobile ? 200 : 300;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className= "text-2xl md:text-4xl font-mono">Equity Earned</h1>
      <Gauge
        width={size}
        height={size}
        value={value}
        valueMax={100}
        innerRadius="70%"
        endAngle={360}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: isMobile ? 24 : 50,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#0A86EB',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        }}
        text={({ value }) => `${value}%`}
      />
    </div>
  );
}
