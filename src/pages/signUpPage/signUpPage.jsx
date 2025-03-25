import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginAndRegistrationPageLayout from '../../components/loginAndRegistrationPageLayout/loginAndRegistrationPageLayout'
import postUser from '../../services/post/postUser'

import './signUpPage.css'

function SignUpPage() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [nome, setNome] = useState("")
    const navigate = useNavigate()

    const handleSignUp = async () => {
        if (!email || !senha || !confirmarSenha || !nome) {
            alert("Preencha todos os campos!")
            return
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!")
            return
        }

        try {
            console.log(nome, email, senha)
            const response = await postUser(
                nome,
                email,
                senha,
                "0",
                "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
            )
            console.log("Usuário cadastrado:", response)

            // Redirecionar para a página de login após cadastro bem-sucedido
            navigate('/login')
        } catch (error) {
            console.error("Erro no cadastro:", error)
        }
    }

    return (
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
            <input 
                id='senhaConUser' 
                type="password" 
                placeholder='Confirmar senha:' 
                value={confirmarSenha} 
                onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <input 
                id='nomeUser' 
                type="text" 
                placeholder='Nome de usuário:' 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}
            />
            <button onClick={handleSignUp}>Avançar</button>
        </LoginAndRegistrationPageLayout>
    )
}

export default SignUpPage
