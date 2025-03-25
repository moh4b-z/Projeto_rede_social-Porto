import LoginAndRegistrationPageLayout from '../../components/loginAndRegistrationPageLayout/loginAndRegistrationPageLayout'
import './loginPage.css'

function LoginPage(){
    
    
    return( 
        <LoginAndRegistrationPageLayout>
            <input type="email" placeholder='E-mail:'/>
            <input type="password" placeholder='Senha:'/>
            <button>Avançar</button>
            <span>Não tem uma conta? <a href="">Cadastre-se</a></span>
            <a href="">Esqueci a senha</a>
        </LoginAndRegistrationPageLayout>
    )
}

export default LoginPage