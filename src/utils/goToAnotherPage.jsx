import { useNavigate } from 'react-router-dom'

function useGoToHomePage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/`)
    }
}

function useGoToSearchPage(task) {
    const navigate = useNavigate()
    return (task) => {
        const query = new URLSearchParams()
        query.set('s', task.search)
        navigate(`/search?${query.toString()}`)
    }
}

export {
    useGoToHomePage, 
    useGoToSearchPage
}