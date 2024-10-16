import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Primer abono 10$",
    paragraph:
      "Sabado 30/11/24 4:45 PM",
    image: "/rifas-vlp/images/about/cafetera.png",
    author: {
      name: "Samuyl Joshi",
      image: "/rifas-vlp/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/rifas-vlp/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/rifas-vlp/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/rifas-vlp/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/rifas-vlp/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
