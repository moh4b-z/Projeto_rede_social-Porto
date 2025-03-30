import BASE_URL from '../config'

async function deletePublication(id){
    try {
        const response = await fetch(`${BASE_URL}/publicacoes/deletarPublicacao/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error('Erro ao deletar publicação')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default deletePublication
