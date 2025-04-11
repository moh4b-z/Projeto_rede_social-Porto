import { useSearchParams, useNavigate } from 'react-router-dom'
import WithinPageLayout from '../../components/withinPageLayout/withinPageLayout'
import styles from './profilePage.module.css'

function ProfilePage(){
    const navigate = useNavigate()
    return (
        <WithinPageLayout></WithinPageLayout>
    )
}

export default ProfilePage