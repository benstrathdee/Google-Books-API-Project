import styles from "./ResultsNum.module.scss"

const ResultsNum = () => {
    return (
        <div className={styles.ResultsNum}>
            <p>Results per page: </p>
            <select className={styles.ResultsNum_select}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>
    )
}

export default ResultsNum
