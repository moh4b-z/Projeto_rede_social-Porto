import BASE_URL from '../config'
// BASE_URL = 'https://back-spider.vercel.app'

async function postUser(nome, email, senha, premium, imagemPerfil) {
    try {

        const dados = {
            nome: nome,
            email: email,
            senha: senha,
            premium: "0",
            imagemPerfil: imagemPerfil,
            senhaRecuperacao: "test"
        }

        console.log(dados);
        

        const response = await fetch(`${BASE_URL}/user/cadastrarUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            
            body: JSON.stringify(
                dados
            )
        });
        console.log(response);
        
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }

        console.log(response.json());
        

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default postUser;

