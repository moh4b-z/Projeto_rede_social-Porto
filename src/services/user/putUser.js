import BASE_URL from '../config'

async function putUser(nome, email, imagemPerfil, senhaRecuperacao, id){
    try {
        const dados = {
            nome: nome,
            email: email,
            premium: "0",
            imagemPerfil: imagemPerfil,
            senhaRecuperacao: senhaRecuperacao
        }
        const response = await fetch(`${BASE_URL}/user/atualizarUser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(
                dados
            )
        })

        if (!response.ok) {
            throw new Error('Erro ao atualizar o usario')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

export default putUser
