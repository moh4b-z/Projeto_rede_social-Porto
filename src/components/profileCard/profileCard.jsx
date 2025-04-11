import styles from './profileCard.module.css'
import {useGoToProfilePage} from '../../utils/goToAnotherPage'


export default function ProfileCard(props){

    const nameUser = props.nameUser
    const urlIMG = props.urlIMG
    const goToProfilePage = useGoToProfilePage()
    return(
        <div 
            className={styles.ProfileCard}
            onClick={() => goToProfilePage(nameUser)}
        >
            <div>
                <img src={urlIMG} alt="" />
            </div>
            <span>{nameUser}</span>
        </div>
    )
} 