import BASE_URL from '../config'

async function deleteUser(id){
    try {
        const response = await fetch(`${BASE_URL}/user/deleteUser/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error('Erro ao deletar usario')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default deleteUser
