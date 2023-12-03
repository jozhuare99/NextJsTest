"use client";

import {useTheme} from 'next-themes';
import {BrightnessHigh,Moon} from 'react-bootstrap-icons';
import { DropDownMenu, DropDownMenuContent, DropDownMenuItem, DropDownMenuTrigger } from '../dropdownMenu';
import { Button } from '../button';

const ThemeToggle = () => {
  const {setTheme} = useTheme();

  return (
    <DropDownMenu>
      <DropDownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <BrightnessHigh className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute 9h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropDownMenuTrigger>
      <DropDownMenuContent align="end">
        <DropDownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropDownMenuItem>
        <DropDownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropDownMenuItem>
        <DropDownMenuItem onClick={() => setTheme("system")}>
          System
        </DropDownMenuItem>
      </DropDownMenuContent>
    </DropDownMenu>
  )
}

export default ThemeToggle;