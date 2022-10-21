import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./Gallery.scss";
import { galleryItemsData } from "./GalleryItemsData";

const Gallery = () => {
  return (
    <div className="gallery">
      {galleryItemsData.map(({ itemUrl, itemName, buyUrl }) => (
        <GalleryItem key={itemName} itemName={itemName} itemUrl={itemUrl} buyUrl={buyUrl} />
      ))}
    </div>
  );
};

export default Gallery;
