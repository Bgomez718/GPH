'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Gauge with SSR disabled
const EquityGauge = dynamic(() => import( "./EquityGuage"), { ssr: false });

export default function EquityGaugeClient({ value }: { value: number }) {
  return(
    <div className='content-center justify-center'>
        <EquityGauge value={value} />
    </div> 
  );
}
