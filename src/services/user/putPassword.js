import BASE_URL from '../config'

async function putPassword(id, senha){
    const dados = {
        senha: senha
    }

    //https://back-spider.vercel.app/user/newPassword/:id

    try {
        const response = await fetch(`${BASE_URL}/user/newPassword/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(
                dados
            )
        })

        console.log(response);
        

        if (!response.ok) {
            throw new Error('Erro ao login do usario')
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        return null
    }
};

export default putPassword
