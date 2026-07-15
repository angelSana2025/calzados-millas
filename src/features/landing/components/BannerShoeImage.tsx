import { useState } from "react";
import type { BannerShoeLayer } from "../types/index";

type BannerShoeImageProps = {
  shoe: BannerShoeLayer;
};

export function BannerShoeImage({ shoe }: BannerShoeImageProps) {
  const [src, setSrc] = useState(shoe.image);

  return (
    <img
      src={src}
      alt={shoe.alt}
      className="mila-landing__shoe-img"
      loading="eager"
      decoding="async"
      onError={() => {
        if (shoe.fallbackImage && src !== shoe.fallbackImage) {
          setSrc(shoe.fallbackImage);
        }
      }}
      {...(shoe.layer === "center" ? { fetchPriority: "high" as const } : {})}
    />
  );
}
