import styles from "./ResultContainer.module.scss";
import Result from "../../components/Result/Result";

const ResultContainer = ({ data, modalOp, modalContent }) => {
	return data === undefined ? null : (
		<div className={styles.ResultContainer}>
			{data.map((book) => {
				const image =
					book.volumeInfo.imageLinks === undefined
						? "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
						: book.volumeInfo.imageLinks.thumbnail;

				return (
					<>
						<Result
							key={book.id}
							title={book.volumeInfo.title}
							authors={book.volumeInfo.authors}
							thumbnail={image}
							desc={book.volumeInfo.subtitle}
							release={book.volumeInfo.publishedDate}
							pages={book.volumeInfo.pageCount}
							link={book.volumeInfo.infoLink}
							modalOp={modalOp}
							modalContent={modalContent}
						/>
					</>
				);
			})}
		</div>
	);
};

export default ResultContainer;
