import BASE_URL from '../config'

export default async function getUser(){
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

