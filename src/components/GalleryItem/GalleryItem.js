import React from "react";
import "./GalleryItem.scss";

const GalleryItem = ({ itemName, itemUrl, buyUrl }) => {
  return (
    <div className="gallery-item">
      <a href={itemUrl}>
        <img src={require(`../../assets/${itemName}.jpg`)} className="gallery-item-image" />
      </a>
      <div className={`gallery-item-links gallery-item-${itemName}-links`}>
        <a href={itemUrl}>
          Learn More <i className="fa fa-chevron-right"></i>
        </a>
        <a href={buyUrl}>
          {itemName == "applecard" ? "Apply Now " : "Buy "} <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
