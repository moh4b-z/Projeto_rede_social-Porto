import { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'
import styles from './ParallaxWrapper.module.css'

export default function ParallaxWrapper({ children, className = '', options = {} }) {
    const sceneRef = useRef(null)
    const parallaxInstance = useRef(null)

    useEffect(() => {
        if (sceneRef.current) {
            parallaxInstance.current = new Parallax(sceneRef.current, {
                selector: '.layer',
                relativeInput: true,
                hoverOnly: true,
                ...options
            })
        }

        return () => {
            if (parallaxInstance.current) {
                parallaxInstance.current.disable()
                parallaxInstance.current = null
            }
        }
    }, [options])

    return (
        <div ref={sceneRef} className={`parallax-scene ${className}`}>
            {children}
        </div>
    )
}
