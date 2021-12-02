import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import ResultContainer from "./containers/ResultContainer";
import Modal from "./components/Modal/Modal";
import Footer from "./containers/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
	const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes";
	const defaultSearchTerm = "HTML";

	const [booksList, setBooksList] = useState([]);
	const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
	const [doSearch, setDoSearch] = useState(false);

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState([]);

	const [totalResults, setTotalResults] = useState([0]);
	const [maxResults, setMaxResults] = useState(10);

	const [startIndex, setStartIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [pagesToList, setPagesToList] = useState([]);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(totalResults / maxResults) > 50
			? 50
			: Math.ceil(totalResults / maxResults)
	);

	const handleDoSearch = () => {
		setDoSearch(!doSearch);
	};

	const handleSearchTerm = (event) => {
		setSearchTerm(
			event.target.value === "" ? defaultSearchTerm : event.target.value
		);
	};

	const handleResultNum = (event) => {
		setMaxResults(event.target.value);
	};

	const handleShowModal = () => {
		setShowModal(!showModal);
	};

	const handleModalContent = (content) => {
		setModalContent(content);
	};

	useEffect(() => {
		setTotalPages(
			Math.ceil(totalResults / maxResults) > 50
				? 50
				: Math.ceil(totalResults / maxResults)
		);
	}, [maxResults, totalResults]);

	useEffect(() => {
		setPagesToList([
			parseInt(currentPage) - 2,
			parseInt(currentPage) - 1,
			parseInt(currentPage),
			parseInt(currentPage) + 1,
			parseInt(currentPage) + 2,
		]);
	}, [currentPage]);

	const handlePages = (event) => {
		window.scrollTo(0, 0);
		switch (event.target.value) {
			case "start":
				setStartIndex(0);
				setCurrentPage(1);
				break;
			case "prev":
				setStartIndex((parseInt(currentPage) - 2) * maxResults);
				setCurrentPage(parseInt(currentPage) - 1);
				break;
			case "next":
				setStartIndex(parseInt(currentPage) * maxResults);
				setCurrentPage(parseInt(currentPage) + 1);
				break;
			case "end":
				setStartIndex((totalPages - 1) * maxResults);
				setCurrentPage(totalPages);
				break;
			default:
				setStartIndex((event.target.value - 1) * maxResults);
				setCurrentPage(event.target.value);
		}
	};

	const getBooks = async (
		searchTerm = defaultSearchTerm,
		maxResults = 10,
		startIndex = 0
	) => {
		window.scrollTo(0, 0);
		const response = await fetch(
			`${GOOGLE_BOOKS_URL}
				?q=${searchTerm}
				&maxResults=${maxResults}
				&startIndex=${startIndex}`
		);
		const data = await response.json();
		const items = await data.items;
		setBooksList(items);
		setTotalResults(data.totalItems);
	};

	useEffect(() => {
		getBooks(searchTerm, maxResults, startIndex);
	}, [maxResults, startIndex]);

	useEffect(() => {
		getBooks(searchTerm, maxResults);
	}, [doSearch]);

	return (
		<div className={styles.App}>
			<Navbar
				click={handleDoSearch}
				search={handleSearchTerm}
				maxResults={handleResultNum}
				totalResults={totalResults}
			/>
			<ResultContainer
				data={booksList}
				modalOp={handleShowModal}
				modalContent={handleModalContent}
			/>
			<Modal
				modalOp={handleShowModal}
				showModal={showModal}
				content={modalContent}
			/>
			<Footer pagesToList={pagesToList} handlePages={handlePages} />
		</div>
	);
}

export default App;
