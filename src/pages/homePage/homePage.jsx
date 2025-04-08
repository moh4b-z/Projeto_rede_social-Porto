import { useSearchParams, useNavigate } from 'react-router-dom'
import WithinPageLayout from '../../components/withinPageLayout/withinPageLayout'
import styles from './homePage.module.css'


function HomePage(){
    const navigate = useNavigate()
    return (
        <WithinPageLayout></WithinPageLayout>
    )
}

export default HomePage
