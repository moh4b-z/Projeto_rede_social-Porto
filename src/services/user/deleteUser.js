import BASE_URL from '../config'

async function deleteUser(id){
    try {
        const response = await fetch(`${BASE_URL}/user/deleteUser/${id}`, {
            method: 'DELETE',
        })

        console.log("Status da resposta:", response.status)

        if (!response.ok) {
            throw new Error('Erro ao deletar User')
        }

        const text = await response.text()
        return text ? JSON.parse(text) : true
    } catch (error) {
        console.error(error)
        return null
    }
};

export default deleteUser
