import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import ResultContainer from "./containers/ResultContainer";
import Modal from "./components/Modal/Modal";
import { useState, useEffect } from "react";

function App() {
	const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

	const [booksList, setBooksList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("a");
	const [searchTime, setSearchTime] = useState(false);
	const [maxResults, setMaxResults] = useState(10);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState([]);

	const getBooks = async (searchTerm = "a", maxResults = 10) => {
		const response = await fetch(
			`${GOOGLE_BOOKS_URL}${searchTerm}&maxResults=${maxResults}`
		);
		const data = await response.json();
		const items = await data.items;
		setBooksList(items);
	};

	const handleClick = () => {
		setSearchTime(!searchTime);
	};

	const handleSearch = (event) => {
		setSearchTerm(event.target.value === "" ? "a" : event.target.value);
	};

	const handleResultNum = (event) => {
		setMaxResults(event.target.value);
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};

	const handleModalContent = (content) => {
		setModalContent(content);
	};

	useEffect(() => {
		getBooks(searchTerm, maxResults);
	}, [searchTime, maxResults]);

	return (
		<div className={styles.App}>
			<Navbar
				click={handleClick}
				search={handleSearch}
				maxResults={handleResultNum}
			/>
			<ResultContainer
				data={booksList}
				modalOp={handleModal}
				modalContent={handleModalContent}
			/>
			<Modal
				modalOp={handleModal}
				showModal={showModal}
				content={modalContent}
			/>
		</div>
	);
}

export default App;
