import BASE_URL from '../config'

async function postLogin(naosei){
    try {
        const response = await fetch(`${BASE_URL}/login${naosei}`, {
            method: 'POST',
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

export default postLogin
