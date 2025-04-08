import { useState, useRef, useEffect } from 'react'

import styles from './Lighthouse.module.css'
import Light from '../light/light'


function LightHouse(props){

    const zindex = Number(props.zindex) || 1
    const size = Number(props.size) || 1
    useEffect(() => {
        document.documentElement.style.setProperty("--headlightProportion", `${size}px`);
    }, [size])
      

    return (
        <div className={styles.location}>
            <div className={styles["light-house"]}>
                {/* <!-- Triângulo superior do farol --> */}
                <div className={styles["top-triangle"]}>
                    {/* <!-- Detalhes do triângulo (círculos e luz) --> */}
                    <div className={styles["top-triangle-circle-top"]}></div>
                    <div className={styles["top-triangle-circle-middle"]}></div>
                    <div className={styles["top-triangle-circle"]}></div>

                    {/* <!-- Detalhes estruturais do farol --> */}
                    <div className={styles["top-ledge"]}></div> {/*<!-- Parte superior do farol -->*/}
                    <div className={styles["top-bars"]}>
                        {/* <!-- Barras superiores do farol --> */}
                        <div id="top-bar-1" className={styles["topbar"]}></div>
                        <div id="top-bar-2" className={styles["topbar"]}></div>
                        <div id="top-bar-3" className={styles["topbar"]}></div>
                        <div id="top-bar-4" className={styles["topbar"]}></div>
                        <div id="top-bar-5" className={styles["topbar"]}></div>
                        <div id="top-bar-6" className={styles["topbar"]}></div>
                    </div>
                    <div className={styles.glow} style={{zIndex: zindex - 10}}>
                        <Light/>
                    </div>

                    {/* <!-- Grades superiores do farol --> */}
                    <div className={styles["top-railings"]}>
                        <div id="top-railing-1" className={styles["railing"]}></div>
                        <div id="top-railing-2" className={styles["railing"]}></div>
                        <div id="top-railing-3" className={styles["railing"]}></div>
                        <div id="top-railing-4" className={styles["railing"]}></div>
                        <div id="top-railing-5" className={styles["railing"]}></div>
                        <div id="top-railing-6" className={styles["railing"]}></div>
                    </div>

                    {/* <!-- Detalhes estruturais do meio do farol --> */}
                    <div className={styles["mid-ledge"]}></div> {/*<!-- Parte do meio do farol -->*/}
                    <div className={styles["mid-railings"]}>
                        <div className={styles.overlay}></div> {/*<!-- Sobreposição -->*/}
                        <div className={styles["mid-railings-rail"]}>
                            {/* <!-- Grades do meio do farol --> */}
                            <div id='mid-rail-1' className={styles["mid-rail"]}></div>
                            <div id='mid-rail-2' className={styles["mid-rail"]}></div>
                            <div id='mid-rail-3' className={styles["mid-rail"]}></div>
                            <div id='mid-rail-5' className={styles["mid-rail"]}></div>
                            <div id='mid-rail-6' className={styles["mid-rail"]}></div>
                        </div>
                        {/* <!-- Grades do meio à esquerda e à direita --> */}
                        <div className={styles["left-mid-railings"]}></div>
                        {/* <!-- <div className="right-mid-railings"></div> --> */}
                    </div>
                </div>

                {/* <!-- Painel com rotação 3D --> */}
                <div className={styles["panel-container"]} id="rotate-x">
                    <div className={styles["left-mid-roof"]}></div>
                    <div className={styles["left-mid-roof-2"]}></div>
                    <div className={styles.panel}></div>
                </div>

                {/* <!-- Estrutura direita do farol --> */}
                <div className={styles["right-attachment"]}>
                    <div className={styles["right-roof"]}></div>
                    <div className={styles["right-building"]}></div>
                </div>

                {/* <!-- Luzes do farol --> */}
                <div className={styles["lighthouse-lights"]}>
                    <div id="light-right-top" className={styles.light}></div>
                    <div id="light-left-middle" className={styles.light}></div>
                </div>

                {/* <!-- Luzes inferiores do farol --> */}
                <div className={styles["lighthouse-bottom-lights"]}>
                    <div id="light-right-bottom" className={styles.light}></div>
                    <div id="light-left-bottom" className={styles.light}></div>
                </div>

                {/* <!-- Rochas ao fundo --> */}
                <div className={styles["back-rocks"]}>
                    <div id="back-rock-1" className={styles["back-rock"]}></div>
                    <div id="back-rock-2" className={styles["back-rock"]}></div>
                    <div id="back-rock-3" className={styles["back-rock"]}></div>
                </div>

                {/* <!-- Rochas na frente --> */}
                <div className={styles["front-rocks"]}>
                    <div id="front-rock-1" className={styles["front-rock"]}></div>
                    <div className={styles.satellite}></div>
                    <div id="front-rock-2" className={styles["front-rock"]}></div>
                    <div id="front-rock-3" className={styles["front-rock"]}></div>
                </div>

            
            </div>
        </div>
    )
}

export default LightHouse
