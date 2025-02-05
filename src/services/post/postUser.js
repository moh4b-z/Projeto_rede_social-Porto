import BASE_URL from '../config'

async function postUser(id){
    try {
        const response = await fetch(`${BASE_URL}/user/atualizarUser/${id}`, {
            method: 'POST',
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

export default postUser
