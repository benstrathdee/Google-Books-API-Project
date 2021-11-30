import styles from "./ResultContainer.module.scss"
import Result from "../../components/Result/Result";

const ResultContainer = ({data}) => {
    return (
        <div className={styles.ResultContainer}>
            {data.map((book, index) => { return (
                <Result
                    key = {index}
                    content = {book.volumeInfo.title}
                    author = {book.volumeInfo.authors}
                    thumbnail = {book.volumeInfo.imageLinks.thumbnail}
                />
            )})}
        </div>
    )
}

export default ResultContainer
