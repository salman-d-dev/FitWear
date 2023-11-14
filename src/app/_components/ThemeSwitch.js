'use client'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState('light');

    //first detect the initial theme on first load from local
    useEffect(()=>{
        const theme = localStorage.getItem('theme');
        //if there is theme in localstorage, if its dark then apply it, else light theme is default
        if(theme){
            if(theme === 'dark'){
                setTheme('dark')
                //add the dark class to doc for tailwind dark class to work
                document.documentElement.classList.add('dark')
                //theme is light so remove dark class 
            } 
            else {
                document.documentElement.classList.remove('dark')
            }
            //if no theme setting, detect the user's device theme and use it
        } else {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                setTheme('dark')
                document.documentElement.classList.add('dark')
            }
        }
    },[])

    const toggleTheme = ()=>{
        if(theme === 'light'){
            setTheme('dark');
            //save setting in local storage
            localStorage.setItem('theme','dark')
            //apply dark class
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light');
            //store setting
            localStorage.setItem('theme','light')
            //remove dark class for light to take place
            document.documentElement.classList.remove('dark')
        }
    }

  return (
    <button onClick={toggleTheme} className='fixed bottom-4 right-4 z-10 p-4 border-[1.5px] border-black dark:border-white bg-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black  dark:bg-black dark:text-white rounded-full opacity-75 text-2xl'>
            {theme === 'light'? (<BsSun className='' />) : (<BsMoon/>)}
    </button>
  )
}
