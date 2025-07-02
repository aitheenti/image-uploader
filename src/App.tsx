import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import { useEffect, useState } from "react";
import { UploadedImage } from "./types";
import { uploadImage } from "./api/mockApi";
import { mockImages } from "./mockimages";

function App() {
  const [imageList, setImageList] = useState<UploadedImage[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchImageList = () => {
    const formattedImages = mockImages.map((img, index) => ({
      id: `img-${index}`,
      name: img.title,
      url: img.img,
    }));
    setImageList(formattedImages);
  };

  const onSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      fetchImageList();
    } else {
      const filtered = mockImages
        .filter(
          (img) =>
            img.title.toLowerCase().includes(query.toLowerCase()) ||
            img.author.toLowerCase().includes(query.toLowerCase())
        )
        .map((img, index) => ({
          id: `img-${index}`,
          name: img.title,
          url: img.img,
        }));
      setImageList(filtered);
    }
  };

  const onUpload = (file: File) => {
    uploadImage(file).then((newImage) => {
      setImageList((prev) => [...prev, newImage]);
    });
  };

  const handleDeleteImage = (id: string) => {
    setImageList((prev) => prev.filter((img) => img.id !== id));
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col">
        <SearchBar
          searchQuery={searchQuery}
          onUpload={onUpload}
          onSearch={onSearch}
        />
        <div className="flex">
          <ImageList images={imageList} onDeleteImage={handleDeleteImage} />
        </div>
      </div>
    </div>
  );
}

export default App;
