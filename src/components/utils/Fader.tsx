import React, {useEffect, useMemo, useRef} from 'react'

namespace Props {
    export type Fader = {
        children:JSX.Element|JSX.Element[]
        className?:string
        interval?:number
        direction?:"in"|"out"
        initialDelay?:number
        style?:React.CSSProperties
    }
    export type TextFader = Omit<Fader, "children"> & {
        text: string | string[]
        separator?: string
    }
}

export function TextFader({ 
	text, 
	separator=" ", 
	interval=100, 
	direction="in",
	initialDelay=100,
	style={}
}: Props.TextFader) {
	const textArray = useMemo(() => {
		if (typeof text === "string") return text.split(separator)
		return text;
	}, [text, separator]);
	const fadeClass = useMemo(() => `fade-${direction}`, [direction])

	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			...style
		}}>
		{textArray.map((txt, index) => (
			<span className={fadeClass} style={{
				animationDelay:`${(index*interval)+initialDelay}ms`,
			}}>
				{txt}&nbsp;
			</span>
		))}
		</div>
	)
}

export function Fader({
    children,
	interval=100, 
	direction="in",
	initialDelay=100,
	style={},
    className=""
} : Props.Fader
){
    const parentRef = useRef<HTMLDivElement>(null)
    const fadeClass = useMemo(() => `fade-${direction}`, [direction])

    useEffect(() => {
        if (parentRef.current){
            [...parentRef.current.children as any].forEach((child, index) => {
                child.classList.add(fadeClass);
                (child as HTMLElement).style.animationDelay = `${(index*interval)+initialDelay}ms`
            })
        }
    }, [parentRef])

    return (
        <div className={'fader '+className} ref={parentRef} style={{...style}}>
            {children}
        </div>
    )
}
