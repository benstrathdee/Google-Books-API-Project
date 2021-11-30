import styles from "./PageSelector.module.scss"
import { faForward, faBackward, faFastForward, faFastBackward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PageSelector = () => {
    return (
        <div className={styles.PageSelector}>
            <FontAwesomeIcon icon={faFastBackward} className={styles.PageSelector_btn}/>
            <FontAwesomeIcon icon={faBackward} className={styles.PageSelector_btn}/>
            <p className={styles.PageSelector_nums}>1 2 3 4 5</p>
            <FontAwesomeIcon icon={faForward} className={styles.PageSelector_btn}/>
            <FontAwesomeIcon icon={faFastForward} className={styles.PageSelector_btn}/>
        </div>
    )
}

export default PageSelector
