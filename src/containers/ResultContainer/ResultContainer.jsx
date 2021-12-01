import styles from "./ResultContainer.module.scss";
import Result from "../../components/Result/Result";

const ResultContainer = ({ data, modalOp, modalContent }) => {
	return data === undefined ? (
		<p className={styles.ResultContainer_blank}>No results found.</p>
	) : (
		<div className={styles.ResultContainer}>
			{data.map((book, index) => {
				const image =
					book.volumeInfo.imageLinks === undefined
						? "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
						: book.volumeInfo.imageLinks.thumbnail;

				return (
					<>
						<Result
							key={index}
							title={book.volumeInfo.title}
							authors={book.volumeInfo.authors}
							thumbnail={image}
							desc={book.volumeInfo.subtitle}
							release={book.volumeInfo.publishedDate}
							pages={book.volumeInfo.pageCount}
							link={book.volumeInfo.previewLink}
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
