import { ImageProps } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ImageStyles.css";

interface ImageComponentProps extends ImageProps {
  onDelete?: () => void;
}

const Image = ({
  imgSrc,
  altText,
  width = 300,
  height = 200,
  className = "",
  onDelete,
}: ImageComponentProps) => {
  return (
    <div className={`image-container ${className}`}>
      <div className="image-wrapper">
        <img
          src={imgSrc}
          alt={altText}
          width={width}
          height={height}
          className="image"
        />
        {onDelete && (
          <button
            className="delete-button"
            onClick={onDelete}
            aria-label="Delete image"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <div className="image-name">{altText}</div>
    </div>
  );
};

export default Image;
