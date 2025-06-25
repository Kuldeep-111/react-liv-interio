export function getProjectImages(folder, imageCount) {
  return Array.from({ length: imageCount }).map((_, idx) => {
    const number = idx + 1;
    return {
      src: `/assets/images/projects/desktop/${folder}/${number}.webp`,
      mobileSrc: `/assets/images/projects/mobile/${folder}/${number}.webp`,
      alt: `Image ${number}`, 
    };
  });
}
