import { UploadedImage } from "../types";

let mockImages: UploadedImage[] = [];

export const getImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockImages]);
    }, 300);
  });
};

export const uploadImage = (image: File): Promise<UploadedImage> => {
  const imageToUpload: UploadedImage = {
    id: Date.now().toString(),
    name: image.name,
    url: URL.createObjectURL(image),
  };

  mockImages.push(imageToUpload);
  return new Promise((resolve) => {
    setTimeout(() => resolve(imageToUpload), 1000);
  });
};

export const searchImages = (searchText: string): Promise<UploadedImage[]> => {
  const filteredImages = mockImages.filter((image) =>
    image.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return new Promise((resolve) => {
    return setTimeout(() => resolve(filteredImages), 1000);
  });
};

export const deleteImage = (id: string): Promise<void> => {
  mockImages = mockImages.filter((image) => image.id !== id);
  return new Promise((resolve) => {
    return setTimeout(() => resolve(), 1000);
  });
};
