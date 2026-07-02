"use client";

import { useState } from "react";
import Image from "next/image";

// Storefront product gallery matching the design's .gallery__* markup.
// Driven by the motorcycle's real image records; clicking a thumbnail
// swaps the main image. Falls back gracefully with 0 or 1 image.
const DetailGallery = ({ brand, modelName, images = [], tag }) => {
  const [active, setActive] = useState(0);
  const urls = images.map((img) => img.url).filter(Boolean);
  const mainSrc = urls[active] ?? urls[0];
  const alt = `${brand} ${modelName}`.trim();

  return (
    <div>
      <div className="gallery__main">
        {tag ? <span className="gallery__tag">{tag}</span> : null}
        {mainSrc ? (
          <Image
            key={mainSrc}
            src={mainSrc}
            alt={alt}
            width={856}
            height={642}
            priority
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : null}
      </div>

      {urls.length > 1 ? (
        <div className="gallery__thumbs">
          {urls.slice(0, 8).map((url, i) => (
            <button
              key={url}
              type="button"
              className={`gallery__thumb${i === active ? " gallery__thumb--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`${alt} — image ${i + 1}`}
            >
              <Image
                src={url}
                alt={`${alt} thumbnail ${i + 1}`}
                width={200}
                height={150}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DetailGallery;
