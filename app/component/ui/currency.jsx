'use client';

import {useEffect, useState} from "react";

const formatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'USD',
});

const Currency = ({value = 0}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, {});

  if(!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">
      {formatter.format(value)}
    </div>
  )
}

export default Currency;