import BASE_URL from '../config'

export async function getUser(){
    try {
        const response = await fetch(`${BASE_URL}/user/listarUsers`, {
            method: 'GET',
        })

        if (!response.ok) {
            throw new Error('Erro ao fazer o get de usario')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function getUserID(id){
    try {
        const listarUsers = await getUser()
        const response = listarUsers.find(objeto => objeto.id === id);
        if (!response) {
            throw new Error(`Usario de id: ${id} não achado`)
        }

        return response
    } catch (error) {
        console.error(error)
        return null
    }
}

