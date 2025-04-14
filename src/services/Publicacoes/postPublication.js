import BASE_URL from '../config'

async function postPublication(dados){
    try {
        // console.log("Dados sendo enviados:", dados)

        const response = await fetch(`${BASE_URL}/publicacoes/cadastrarPublicacao`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(
                dados
            )
        })

        if (!response.ok) {
            throw new Error('Erro ao fazer post da publicação')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default postPublication
