import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SearchBarStyles.css";
import { SearchBarProps } from "../../types";

const SearchBar = ({ onUpload, onSearch, searchQuery }: SearchBarProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
      e.target.value = "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="searchBarSection">
        <Input
          className="searchInput"
          type="text"
          id="searchImage"
          placeholder="Type to search for an image"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <Button className="uploadButton" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faUpload} />
          <span>Upload Image</span>
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
