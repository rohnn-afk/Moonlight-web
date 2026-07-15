"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/assets";

export function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
      <div className="order-2 grid grid-cols-4 gap-3 lg:order-1 lg:grid-cols-1">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-[4/5] overflow-hidden rounded-md border transition ${
              activeIndex === index
                ? "border-[#c8b68a]"
                : "border-white/12 hover:border-white/36"
            }`}
            aria-label={`View ${productName} image ${index + 1}`}
          >
            <Image
              src={assetPath(image)}
              alt=""
              fill
              sizes="92px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="order-1 relative aspect-[4/5] overflow-hidden rounded-lg border border-white/12 bg-[#111827] lg:order-2">
        <Image
          src={assetPath(activeImage)}
          alt={productName}
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/36 to-transparent" />
      </div>
    </div>
  );
}
