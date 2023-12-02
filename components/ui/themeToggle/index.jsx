"use client";

import {useTheme} from 'next-themes';

const ThemeToggle = () => {
  const {setTheme} = useTheme();

  return (
    <p>drop down</p>
  )
}

export default ThemeToggle;