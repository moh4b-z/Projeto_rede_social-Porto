import styles from './forgotPage.module.css'

import LoginAndRegistrationPageLayout from '../../components/layouts/loginAndRegistrationPageLayout/loginAndRegistrationPageLayout'
import {useGoToSignUpPage} from '../../utils/goToAnotherPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import postPassword from '../../services/user/recPassword'



function ForgotPage(){
    const [email, setEmail] = useState("")
    const [chave, setChave] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!email || !chave) {
            alert("Preencha todos os campos!")
            return
        }
        try {
            console.log(email, chave);
            const response = await postPassword(email, chave)
            

            if (!response || !response.id) {
                throw new Error("Resposta inválida do servidor")
            }

            localStorage.setItem("userId", response.id)
            navigate('/update-passord')
                
        } catch (error) {
            console.error("Erro recupera senha:", error)
        }
    }
    
    return( 
        <LoginAndRegistrationPageLayout>
            <span>Está enfrentando dificuldades?</span>
            <p>Insira seu email e palavra-chave para que recuperarmos sua senha!</p>

            <input 
                id='emailUser' 
                type="email" 
                placeholder='E-mail:' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                id='wordKeyUser' 
                type="password" 
                placeholder='Palavra-chave:' 
                value={chave} 
                onChange={(e) => setChave(e.target.value)}
            />
            <button onClick={handleLogin}>Avançar</button>
        </LoginAndRegistrationPageLayout>
    )
}

export default ForgotPage