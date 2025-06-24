import { useEffect, useState, useSyncExternalStore } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import { fetchImages } from "./Api";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const getImages = async () => {
    try {
      setLoading(true);
      const data = await fetchImages(query);
      setImages(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} value={searchText} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} />
      {loading && <Loader />}

      <LoadMoreBtn />
      <ImageModal isOpen={isOpen} onClose={close} />
    </>
  );
}

export default App;
