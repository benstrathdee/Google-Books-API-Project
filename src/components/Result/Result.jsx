import styles from "./Result.module.scss"

const Result = ({content, author, thumbnail}) => {
    return (
        <div className={styles.ResultCard}>
            <p>{content}</p>
            <p>{author}</p>
            <img src={thumbnail} alt="" />
        </div>
    )
}

export default Result
