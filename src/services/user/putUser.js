import BASE_URL from '../config'

async function putUser(id){
    try {
        const response = await fetch(`${BASE_URL}/user/atualizarUser/${id}`, {
            method: 'PUT',
        })

        if (!response.ok) {
            throw new Error('Erro ao atualizar o usario')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default putUser
