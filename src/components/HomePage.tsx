import React, { useCallback, useEffect, useRef } from 'react'
import {Fader, TextFader} from './utils/Fader';
import "./homepage.css"
import { Styles } from '../utils/styles';

export default function HomePage() {
  const homePageRef = useRef<HTMLDivElement>(null);

  const initializeHomePage = useCallback(() => {
    if (homePageRef.current){
      setTimeout(() => {
        homePageRef.current?.classList.remove('disable-overflow');
        homePageRef.current?.querySelector("#section-1")?.classList.remove('expanded')
      }, 5500)
    }
  }, [homePageRef])
  
  useEffect(initializeHomePage, [homePageRef])

  return (
    <div id="home-page" className='disable-overflow' ref={homePageRef}>
      <div id="section-1" className='expanded'>
        <h1 style={{width:'50%'}}>
          <TextFader 
            text={"Bring Your Business to the Forefront of the Digital Age"} 
            interval={100}
            initialDelay={500}
            style={{justifyContent:'center', transform:'scale(2)', animation:Styles.createAnimationString({name: "shrink-header", delay:2300, timingFunction:'ease-in-out'})}}/>
        </h1>
        <p>
          <TextFader
            text={'Empower Your Business with the Full Force of the Modern Web and Harness the Tools You Need for Unprecedented Success.'}
            initialDelay={2500}
            style={{justifyContent:'center'}}/>
        </p>
        <div>
          <Fader
            className='button-group'
            style={{justifyContent:'center'}}
            initialDelay={5000}
            interval={300}>
            <button className='button'>Learn More</button>
            <button className='button active'>Contact</button>
          </Fader>
        </div>
      </div>
      <div id="section-2">

      </div>
    </div>
  )
}
