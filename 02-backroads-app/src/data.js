import imageTour1 from "./images/tour-1.jpeg"
import imageTour2 from "./images/tour-2.jpeg"
import imageTour3 from "./images/tour-3.jpeg"
import imageTour4 from "./images/tour-4.jpeg"

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
    {id:1, href:"https://www.twitter.com", icon:"fab fa-facebook"},
    {id:2, href:"https://www.twitter.com", icon:"fab fa-twitter"},
    {id:3, href:"https://www.twitter.com", icon:"fab fa-squarespace"}
]

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];


export const tours = [
  {
    id: 1,
    img: imageTour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",

    name: " china",
    days: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: imageTour2,
    date: "october 1th, 2020",
    title: " indonesia",

    name: "best of java",
    days: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: imageTour3,
    date: "september 15th, 2020",
    title: "explore hong kong",

    name: "hong kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    img: imageTour4,
    date: "december 5th, 2019",
    title: "kenya highlights",

    name: " kenya",
    days: "20 days",
    price: "from $3300",
  },
];