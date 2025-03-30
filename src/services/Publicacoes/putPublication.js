import BASE_URL from '../config'

async function putPublication(id){
    try {
        const response = await fetch(`${BASE_URL}/publicacoes/atualizarPublicacao/${id}`, {
            method: 'PUT',
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
