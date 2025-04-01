import BASE_URL from '../config'

async function postPassword(email, chave){
    const dados = {
        email: email,
        wordKey: chave,
    }
    try {
        const response = await fetch(`${BASE_URL}/user/RememberPassword`, {
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

export default postPassword
