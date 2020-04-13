import React from "react";

import SmallCarousel from "../../../components/SmallCarousel";

const data = [
  {
    key: "1",
    src: "masks/masque2.jpg",
    alt: "Masque",
  },
  {
    key: "3",
    src: "masks/masque4.jpg",
    alt: "Masque",
  },
  {
    key: "2",
    src: "masks/masque3.jpg",
    alt: "Masque",
  },
  {
    key: "4",
    src: "masks/masque5.jpg",
    alt: "Masque",
  },
];

const MaskGallery = () => <SmallCarousel data={data} />;

export default MaskGallery;
