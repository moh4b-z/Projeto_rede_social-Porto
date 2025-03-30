import { useNavigate } from 'react-router-dom'

function useGoToHomePage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/`)
    }
}
function useGoToLoginPage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/login`)
    }
}
function useGoToSignUpPage(task) {
    const navigate = useNavigate()
    return (task) => {
        navigate(`/signup`)
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
    useGoToLoginPage,
    useGoToSignUpPage,
    useGoToSearchPage
}