import BASE_URL from '../config'
// BASE_URL = 'https://back-spider.vercel.app'

async function postUser(nome, email, senha, premium, imagemPerfil, senhaRecuperacao) {
    try {

        const dados = {
            nome: nome,
            email: email,
            senha: senha,
            premium: "0",
            imagemPerfil: imagemPerfil,
            senhaRecuperacao: senhaRecuperacao
        }

        // console.log(dados)
        

        const response = await fetch(`${BASE_URL}/user/cadastrarUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            
            body: JSON.stringify(
                dados
            )
        })
        // console.log(response)
        
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário')
        }

        const responseData = await response.json()
        console.log(responseData)
        return responseData

    } catch (error) {
        console.error(error)
        return null
    }
}

export default postUser

