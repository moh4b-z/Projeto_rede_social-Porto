import LoginAndRegistrationPageLayout from '../../components/loginAndRegistrationPageLayout/loginAndRegistrationPageLayout'
import {useGoToSignUpPage} from '../../utils/goToAnotherPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './loginPage.css'
import postLogin from '../../services/login/postLogin'



function LoginPage(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!email || !senha) {
            alert("Preencha todos os campos!")
            return
        }
        try {
            console.log(email, senha)
            const response = await postLogin(
                email,
                senha
            )
            // console.log("Usuário cadastrado:", response)

            // Redirecionar para a página de login após cadastro bem-sucedido
            navigate('/')
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
            <a href="">Esqueci a senha</a>
        </LoginAndRegistrationPageLayout>
    )
}

export default LoginPage