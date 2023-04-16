import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";
import tourImg4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, name: "home", href: "#home" },
  { id: 2, name: "about", href: "#about" },
  { id: 3, name: "services", href: "#services" },
  { id: 4, name: "tours", href: "#tours" },
];

export const socialLinks = [
  { id: 1, icon: "fab fa-facebook", href: "https://www.twitter.com" },
  { id: 2, icon: "fab fa-twitter", href: "https://www.twitter.com" },
  { id: 3, icon: "fab fa-instagram", href: "https://www.twitter.com" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque \
              vitae tempore voluptatum maxime reprehenderit eum quod \
              exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: tourImg2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque \
              vitae tempore voluptatum maxime reprehenderit eum quod \
              exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: tourImg3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque \
              vitae tempore voluptatum maxime reprehenderit eum quod \
              exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 3,
    img: tourImg4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque \
              vitae tempore voluptatum maxime reprehenderit eum quod \
              exercitationem fugit, qui corporis.",
    icon: "fas fa-wallet fa-fw",
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
