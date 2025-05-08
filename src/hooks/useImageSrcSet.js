import { useMemo } from "react";

const useImageSrcSet = (imageUrl) => {
  const generateSrcSet = (url) => {
    const baseUrl = url.split('?')[0];
    const params = [
      { width: 300 },
      { width: 400 },
      { width: 500 },
      { width: 600 },
      { width: 700 },
      { width: 800 },
      { width: 900 },
      { width: 1000 },
      { width: 1200 },
      { width: 1400 },
      { width: 1600 },
      { width: 1800 },
      { width: 2000 },
      { width: 2200 },
      { width: 2400 },
      { width: 2600 },
      { width: 2800 },
      { width: 3000 },
    ];

    return params
      .map(({ width }) => `${baseUrl}?v=1&width=${width} ${width}w`)
      .join(', ');
  };

  const srcSet = useMemo(() => generateSrcSet(imageUrl), [imageUrl]);

  return srcSet;
};

export default useImageSrcSet;
