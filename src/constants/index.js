import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bike1, bike2, bike3, customer1, customer2, bike4, bike5, bike6, bike7 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Our Bikes" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bikes = [

    {
        thumbnail: bike2,
        bigBike: bike2,
    },
    {
        thumbnail: bike1,
        bigBike: bike1,
    },
    {
        thumbnail: bike3,
        bigBike: bike3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Users' },
    { value: '500+', label: 'Reviews' },
    { value: '250km+', label: 'On Mountain' },
];

export const products = [
    {
        imgURL: bike4,
        name: "Bike Red JordanBulls",
        price: "$100.20",
    },
    {
        imgURL: bike5,
        name: "Bike Yellow MillerPacers",
        price: "$150.20",
    },
    {
        imgURL: bike7,
        name: "Bike Gray DurantNets",
        price: "$230.20",
    },
    {
        imgURL: bike6,
        name: "Bike Black DuncanSpurs",
        price: "$220.20",
    },

];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Red Bulls", link: "/" },
            { name: "Gray Nets", link: "/" },
            { name: "Yellow Pacers", link: "/" },
            { name: "Black Spurs", link: "/" },
            { name: "Blue Warriors", link: "/" },
            { name: "Green Celtics", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@bicycle.com", link: "mailto:customer@bicycle.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];