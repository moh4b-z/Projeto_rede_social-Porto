import BASE_URL from '../config'

async function putCommentPublication(id, comment){
    const dados = {
        idUser: comment.idUser,
        descricao: comment.descricao
    }
    try {
        const response = await fetch(`${BASE_URL}/publicacoes/commentPublicacao/${id}`, {
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

export default putCommentPublication
