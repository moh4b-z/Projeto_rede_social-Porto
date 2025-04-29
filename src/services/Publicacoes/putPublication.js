import BASE_URL from '../config'

async function putPublication(dados, id){
    try {
        const response = await fetch(`${BASE_URL}/publicacoes/atualizarPublicacao/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(
                dados
            )
        })

        if (!response.ok) {
            throw new Error('Erro ao atualizar as publicacoes')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default putPublication
