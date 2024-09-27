import { FaAward, FaServer, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { TbBooks, TbCertificate } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillAppstore,
  AiFillMessage,
  AiFillHome,
} from "react-icons/ai";

import { HiOutlineMail } from "react-icons/hi";

export const aboutData = [
  { id: 1, icon: <FaAward />, title: "Experience", desc: "3 Years Working" },
  { id: 2, icon: <TbBooks />, title: "Projects", desc: "10+ Completed" },
  {
    id: 3,
    icon: <TbCertificate />,
    title: "Certifications",
    desc: "5 Completed",
  },
];

export const headerData = [
  {
    id: 1,
    link: "https://www.instagram.com/hamii.13",
    icon: <AiOutlineInstagram />,
  },
  { id: 2, link: "https://twitter.com/hlatifii", icon: <AiOutlineTwitter /> },
  {
    id: 3,
    link: "https://www.linkedin.com/in/hamedlatifi",
    icon: <AiFillLinkedin />,
  },
  { id: 4, link: "https://github.com/latifii", icon: <AiFillGithub /> },
];

export const navbarData = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  // { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const servicesData = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "App Development",
    desc: "Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.",
  },
];

export const faqsData = [
  {
    id: 1,
    question: "What do you need to start working on my project?",
    answer:
      "It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there.",
  },
  {
    id: 2,
    question: "How long will my project take to complete?",
    answer:
      "This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date.",
  },
  {
    id: 5,
    question: "Is hosting and domain registration inclusive in your pricing?",
    answer:
      "No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to.",
  },
  {
    id: 4,
    question: "How much do you charge for an average website or app?",
    answer:
      "Once again, this depends. But my prices are affordable so you're good.",
  },
  {
    id: 3,
    question: "What's your payment plan?",
    answer:
      "Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered.",
  },
  {
    id: 6,
    question: "What if the project doesn't turn out good?",
    answer:
      "You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.",
  },
];

export const contactData = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:latifi.hami@gmail.com" },
  {
    id: 2,
    icon: <FaTelegram />,
    link: "https://t.me/latifii",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+989377512323" },
];

export const socials = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const primaryColors = [
  { className: "color-1" },
  { className: "color-2" },
  { className: "color-3" },
  { className: "color-4" },
  { className: "color-5" },
  { className: "color-6" },
];

export const backgroundColors = [{ className: "bg-1" }, { className: "bg-2" }];

export const floatingData = [
  { id: 1, link: "#", icon: <AiFillHome /> },
  { id: 2, link: "#about", icon: <BsPersonFill /> },
  { id: 3, link: "#services", icon: <MdHomeRepairService /> },
  { id: 4, link: "#portfolio", icon: <AiFillAppstore /> },
  { id: 5, link: "#contact", icon: <AiFillMessage /> },
];
