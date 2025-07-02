import { UploadedImage } from "../../types";
import Image from "../Image/Image";
import "./ImageListStyles.css";

interface ImageListProps {
  images: UploadedImage[];
  onDeleteImage?: (id: string) => void;
}

const ImageList = ({ images, onDeleteImage }: ImageListProps) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <Image
            imgSrc={image.url}
            altText={image.name}
            onDelete={onDeleteImage ? () => onDeleteImage(image.id) : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
