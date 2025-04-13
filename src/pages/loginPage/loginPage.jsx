import LoginAndRegistrationPageLayout from '../../components/layouts/loginAndRegistrationPageLayout/loginAndRegistrationPageLayout'
import {useGoToSignUpPage} from '../../utils/goToAnotherPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './loginPage.module.css'
import postLogin from '../../services/login/postLogin'
import { useAuth } from '../../contexts/AuthContext'


function LoginPage(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!email || !senha) {
            alert("Preencha todos os campos!")
            return
        }
        try {
            const response = await postLogin(
                email,
                senha
            )
            console.log("Usuário logado:", response)

            if (response.success) {
                login(response.user) // salva no contexto e no localStorage
                navigate('/')
            } else {
                alert("Credenciais inválidas!")
            }
        } catch (error) {
            console.error("Erro no login:", error)
        }
    }
    
    return( 
        <LoginAndRegistrationPageLayout>
            <input 
                id='emailUser' 
                type="email" 
                placeholder='E-mail:' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                id='senhaUser' 
                type="password" 
                placeholder='Senha:' 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={handleLogin}>Avançar</button>
            <span>
                Não tem uma conta? 
                <a onClick={() => navigate('/signup')} href="">Cadastre-se</a>
            </span>
            <a onClick={() => navigate('/recover')}>Esqueci a senha</a>
        </LoginAndRegistrationPageLayout>
    )
}

export default LoginPage