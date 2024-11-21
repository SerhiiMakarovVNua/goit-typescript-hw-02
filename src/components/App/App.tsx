import styles from "./App.module.css";

import toast from "react-hot-toast";
import axios from "axios";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";

import { useState, useEffect, FormEvent } from "react";
import { Data, Photo } from "./App.types";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "onM49Kt67Vh6DOKtoVKSfzkiOO2CkuSWYu7uADzJnxI";

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const [displayLoadMore, setDisplayLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImages, setModalImages] = useState<Photo | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputElement = form.elements.namedItem(
      "searchBarInput"
    ) as HTMLInputElement | null;

    if (!inputElement || inputElement.value.trim() === "") {
      toast.error("Enter a word");
      return;
    }
    const inputValue = inputElement.value.trim();

    setDisplayLoadMore(false);
    setQuery(inputValue);
    setPage(1);
    setPhotos([]);
    form.reset();
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (photos: Photo): void => {
    setModalIsOpen(true);
    setModalImages(photos);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImages(null);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!query) return;

      setDisplayLoadMore(false);
      try {
        setIsLoading(true);
        const { data } = await axios.get<Data>(API_URL, {
          params: {
            client_id: API_KEY,
            query,
            page,
            per_page: 16,
          },
        });

        if (data.total_pages === 0 || data.total_pages === page) {
          setDisplayLoadMore(false);
        } else {
          setDisplayLoadMore(true);
        }

        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || error.message);
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  return (
    <div className={styles.mainWrapper}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery photos={photos} openModal={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {displayLoadMore && <LoadMoreBtn onClick={handleClick} />}
      {modalIsOpen && (
        <ImageModal
          modalImages={modalImages}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
}
export default App;