import React from "react"
import Light from '../../components/Light/light'
import "./Lighthouse.css"

const Lighthouse = () => {
  return (
    
    //  Estrutura do farol
    <div class="light-house">
        {/* Triângulo superior do farol   */}
        <div class="top-triangle">
            {/* <!-- Detalhes do triângulo (círculos e luz) --> */}
            <div class="top-triangle-circle-top"></div>
            <div class="top-triangle-circle-middle"></div>
            <div class="top-triangle-circle"></div>

            {/* <!-- Detalhes estruturais do farol --> */}
            <div class="top-ledge"></div> {/* Parte superior do farol */}
            <div class="top-bars">
                {/* <!-- Barras superiores do farol --> */}
                <div id="top-bar-1" class="topbar"></div>
                <div id="top-bar-2" class="topbar"></div>
                <div id="top-bar-3" class="topbar"></div>
                <div id="top-bar-4" class="topbar"></div>
                <div id="top-bar-5" class="topbar"></div>
                <div id="top-bar-6" class="topbar"></div>
            </div>
            <div className="Light">
                <Light/>
            </div>
            

            {/* <!-- Grades superiores do farol --> */}
            <div class="top-railings">
                <div id="top-railing-1" class="railing"></div>
                <div id="top-railing-2" class="railing"></div>
                <div id="top-railing-3" class="railing"></div>
                <div id="top-railing-4" class="railing"></div>
                <div id="top-railing-5" class="railing"></div>
                <div id="top-railing-6" class="railing"></div>
            </div>

            {/* <!-- Detalhes estruturais do meio do farol --> */}
            <div class="mid-ledge"></div> {/*<!-- Parte do meio do farol -->*/}
            <div class="mid-railings">
                <div class="overlay"></div> {/*<!-- Sobreposição -->*/}
                <div class="mid-railings-rail">
                    {/* <!-- Grades do meio do farol --> */}
                    <div id="mid-rail-1" className="mid-rail"></div>
                    <div id="mid-rail-2" className="mid-rail"></div>
                    <div id="mid-rail-3" className="mid-rail"></div>
                    <div id="mid-rail-5" className="mid-rail"></div>
                    <div id="mid-rail-6" className="mid-rail"></div>
                </div>
                {/* <!-- Grades do meio à esquerda e à direita --> */}
                <div class="left-mid-railings"></div>
                {/* <div class="right-mid-railings"></div> */}
            </div>
        </div>

        {/* <!-- Painel com rotação 3D --> */}
        <div class="panel-container" id="rotate-x">
            <div class="left-mid-roof"></div>
            <div class="left-mid-roof-2"></div>
            <div class="panel"></div>
        </div>

        {/* <!-- Estrutura direita do farol --> */}
        <div class="right-attachment">
            <div class="right-roof"></div>
            <div class="right-building"></div>
        </div>

        {/* <!-- Luzes do farol --> */}
        <div class="lighthouse-lights">
            <div id="light-right-top" class="light"></div>
            <div id="light-left-middle" class="light"></div>
        </div>

        {/* <!-- Luzes inferiores do farol --> */}
        <div class="lighthouse-bottom-lights">
            <div id="light-right-bottom" class="light"></div>
            <div id="light-left-bottom" class="light"></div>
        </div>

        {/* <!-- Rochas ao fundo --> */}
        <div class="back-rocks">
            <div id="back-rock-1" class="back-rock"></div>
            <div id="back-rock-2" class="back-rock"></div>
            <div id="back-rock-3" class="back-rock"></div>
        </div>

        {/* <!-- Rochas na frente --> */}
        <div class="front-rocks">
            <div id="front-rock-1" class="front-rock"></div>
            <div class="satellite"></div>
            <div id="front-rock-2" class="front-rock"></div>
            <div id="front-rock-3" class="front-rock"></div>
        </div>

    
    </div>

  )
}

export default Lighthouse