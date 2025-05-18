// src/pages/Gallery.jsx
import React, { useState, useEffect } from "react";
import "./Gallery.css";
import bgImage from "../../Assets/Architecture-bg.jpg"; // Make sure this image exists

const ACCESS_KEY = "Iv-pnP6N5p2HFGFcFyXh3ZWFtKzGRJ28xRDfrV0CR0g"; // Your Unsplash API Key

function Gallery() {
  const [images, setImages] = useState([]);
  const [saved, setSaved] = useState(() => {
    const savedFromStorage = localStorage.getItem("savedImages");
    return savedFromStorage ? JSON.parse(savedFromStorage) : [];
  });
  const [query, setQuery] = useState("architecture");
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetchImages(query);
  }, [query]);

  const fetchImages = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=12&client_id=${ACCESS_KEY}`
      );
      const data = await res.json();
      setImages(data.results.map((img) => img.urls.small));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleSave = (url) => {
    if (!saved.includes(url)) {
      const updated = [...saved, url];
      setSaved(updated);
      localStorage.setItem("savedImages", JSON.stringify(updated));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.search.value.trim();
    if (input) setQuery(input);
  };

  const handleImageClick = (url) => {
    setModalImage(url);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div
      className="gallery-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="title">Gallery</h2>

      <form onSubmit={handleSearch} className="search-bar">
        <input type="text" name="search" placeholder="Search images..." />
        <button type="submit">Search</button>
      </form>

      <div className="image-grid">
        {images.map((url, idx) => (
          <div key={idx} className="image-card">
            <img
              src={url}
              alt={`Gallery ${idx}`}
              onClick={() => handleImageClick(url)}
            />
            <div className="image-footer">
              <span>Image {idx + 1}</span>
              <button onClick={() => handleSave(url)}>
                {saved.includes(url) ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {saved.length > 0 && (
        <div className="saved-section">
          <h3>Saved Images</h3>
          <div className="saved-images">
            {saved.map((url, i) => (
              <img key={i} src={url} alt={`Saved ${i}`} />
            ))}
          </div>
        </div>
      )}

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Preview" />
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
