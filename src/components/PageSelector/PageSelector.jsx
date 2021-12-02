import styles from "./PageSelector.module.scss";

const PageSelector = ({ pagesToList, handlePages }) => {
	return (
		<div className={styles.PageSelector}>
			<button className={styles.btn} onClick={handlePages} value="start">
				⮄
			</button>
			<button className={styles.btn} onClick={handlePages} value={"prev"}>
				🠐
			</button>
			{pagesToList.map((pageNum, index) => {
				return pageNum < 1 || pageNum > 40 ? null : index !== 2 ? (
					<button
						key={index}
						className={styles.btn}
						onClick={handlePages}
						value={pageNum}
					>
						{pageNum}
					</button>
				) : (
					<button
						key={index}
						className={styles.btn__underline}
						onClick={handlePages}
						value={pageNum}
					>
						{pageNum}
					</button>
				);
			})}
			<button className={styles.btn} onClick={handlePages} value="next">
				⭢
			</button>
			{/* This repeatedly broke the page so I'm removing it for now lol */}
			{/* <button className={styles.btn} onClick={handlePages} value="end">
				⮆
			</button> */}
		</div>
	);
};

export default PageSelector;
