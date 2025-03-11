import './lightHouse.css'
import {useGoToLanguagePage} from '../../utils/goToAnotherPage'
import {Light} from '../light/light'


function LightHouse(){
    return 
    // <!-- Estrutura do farol -->
    <div className="light-house">
        {/* <!-- Triângulo superior do farol --> */}
        <div className="top-triangle">
            {/* <!-- Detalhes do triângulo (círculos e luz) --> */}
            <div className="top-triangle-circle-top"></div>
            <div className="top-triangle-circle-middle"></div>
            <div className="top-triangle-circle"></div>

            {/* <!-- Detalhes estruturais do farol --> */}
            <div className="top-ledge"></div> {/*<!-- Parte superior do farol -->*/}
            <div className="top-bars">
                {/* <!-- Barras superiores do farol --> */}
                <div id="top-bar-1" className="topbar"></div>
                <div id="top-bar-2" className="topbar"></div>
                <div id="top-bar-3" className="topbar"></div>
                <div id="top-bar-4" className="topbar"></div>
                <div id="top-bar-5" className="topbar"></div>
                <div id="top-bar-6" className="topbar"></div>
            </div>

            {/* <!-- Grades superiores do farol --> */}
            <div className="top-railings">
                <div id="top-railing-1" className="railing"></div>
                <div id="top-railing-2" className="railing"></div>
                <div id="top-railing-3" className="railing"></div>
                <div id="top-railing-4" className="railing"></div>
                <div id="top-railing-5" className="railing"></div>
                <div id="top-railing-6" className="railing"></div>
            </div>

            {/* <!-- Detalhes estruturais do meio do farol --> */}
            <div className="mid-ledge"></div> {/*<!-- Parte do meio do farol -->*/}
            <div className="mid-railings">
                <div className="overlay"></div> {/*<!-- Sobreposição -->*/}
                <div className="mid-railings-rail">
                    {/* <!-- Grades do meio do farol --> */}
                    <div className="mid-rail mid-rail-1"></div>
                    <div className="mid-rail mid-rail-2"></div>
                    <div className="mid-rail mid-rail-3"></div>
                    <div className="mid-rail mid-rail-5"></div>
                    <div className="mid-rail mid-rail-6"></div>
                </div>
                {/* <!-- Grades do meio à esquerda e à direita --> */}
                <div className="left-mid-railings"></div>
                {/* <!-- <div className="right-mid-railings"></div> --> */}
            </div>
        </div>

        {/* <!-- Painel com rotação 3D --> */}
        <div className="panel-container" id="rotate-x">
            <div className="left-mid-roof"></div>
            <div className="left-mid-roof-2"></div>
            <div className="panel"></div>
        </div>

        {/* <!-- Estrutura direita do farol --> */}
        <div className="right-attachment">
            <div className="right-roof"></div>
            <div className="right-building"></div>
        </div>

        {/* <!-- Luzes do farol --> */}
        <div className="lighthouse-lights">
            <div id="light-right-top" className="light"></div>
            <div id="light-left-middle" className="light"></div>
        </div>

        {/* <!-- Luzes inferiores do farol --> */}
        <div className="lighthouse-bottom-lights">
            <div id="light-right-bottom" className="light"></div>
            <div id="light-left-bottom" className="light"></div>
        </div>

        {/* <!-- Rochas ao fundo --> */}
        <div className="back-rocks">
            <div id="back-rock-1" className="back-rock"></div>
            <div id="back-rock-2" className="back-rock"></div>
            <div id="back-rock-3" className="back-rock"></div>
        </div>

        {/* <!-- Rochas na frente --> */}
        <div className="front-rocks">
            <div id="front-rock-1" className="front-rock"></div>
            <div className="satellite"></div>
            <div id="front-rock-2" className="front-rock"></div>
            <div id="front-rock-3" className="front-rock"></div>
        </div>

    
    </div>
}

export default LightHouse