import React from "react"

export namespace Styles {
    interface AnimationStringParams {
        name:string 
        duration?:number 
        timingFunction?:React.CSSProperties['transitionTimingFunction']
        delay?:number 
        iterationCount?:number|"infinity" 
        direction?:"forwards"|"backwards"|""
        fillMode?:"forwards"|""
    }
    export function createAnimationString({
        name,
        duration=1000,
        timingFunction="linear",
        delay=0,
        iterationCount=1,
        direction="",
        fillMode="forwards"
    } : AnimationStringParams){
        return `${name} ${duration}ms ${timingFunction} ${delay}ms ${iterationCount} ${direction} ${fillMode}`
    }
}