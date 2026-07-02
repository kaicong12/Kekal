import * as React from "react";
import { useState } from "react";

export interface ThumbProps {
  /** Image URL. When missing or it fails to load, a "no image" placeholder shows. */
  src?: string | null;
  /** Alt text for the image. */
  alt?: string;
}

/**
 * Fixed-size list thumbnail (52×40) with a graceful "no image" placeholder
 * fallback when `src` is empty or fails to load.
 */
export function Thumb({ src, alt = "" }: ThumbProps) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return (
      <div className="kk-thumb kk-thumb--placeholder">
        no
        <br />
        image
      </div>
    );
  }
  return (
    <img
      className="kk-thumb"
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
    />
  );
}
