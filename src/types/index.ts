import { ReactNode } from 'react';

export type ImageProps = {
  imgSrc: string;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
};

export type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export type InputProps = {
  className: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SearchBarProps = {
  onUpload: (file: File) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
};

export interface UploadedImage {
  id: string;
  name: string;
  url: string;
}

export interface ImageListProps {
  images: ImageListItem[];
}

export interface ImageListItem {
  img: string;
  title: string;
  author: string;
  featured?: boolean;
}
