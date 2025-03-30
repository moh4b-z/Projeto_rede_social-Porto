import BASE_URL from '../config'

async function postLogin(email, senha){
    const dados = {
        email: email,
        senha: senha,
    }
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(
                dados
            )
        })

        if (!response.ok) {
            throw new Error('Erro ao login do usario')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default postLogin
