import BASE_URL from '../config'

async function deletePublication(id) {
  try {
    const response = await fetch(`${BASE_URL}/publicacoes/deletarPublicacao/${id}`, {
      method: 'DELETE',
    });

    console.log("Status da resposta:", response.status)

    if (!response.ok) {
      throw new Error('Erro ao deletar publicação')
    }

    const text = await response.text()
    return text ? JSON.parse(text) : null

  } catch (error) {
    console.error("Erro ao deletar publicação:", error)
    return null
  }
}

export default deletePublication
