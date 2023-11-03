import { FaAward, FaServer, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import { TbBooks, TbCertificate } from 'react-icons/tb'
import { SiAdobexd } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { BsPersonFill } from 'react-icons/bs'
import { MdHomeRepairService } from 'react-icons/md'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillAppstore,
  AiFillMessage,
  AiFillHome,
} from 'react-icons/ai'
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
} from '../assets/images/index'
import { HiOutlineMail } from 'react-icons/hi'

export const aboutData = [
  { id: 1, icon: <FaAward />, title: 'Experience', desc: '1+ Years Working' },
  { id: 2, icon: <TbBooks />, title: 'Projects', desc: '10+ Completed' },
  {
    id: 3,
    icon: <TbCertificate />,
    title: 'Certifications',
    desc: '5 Completed',
  },
]

export const headerData = [
  {
    id: 1,
    link: 'https://www.instagram.com/hamii.13',
    icon: <AiOutlineInstagram />,
  },
  { id: 2, link: 'https://twitter.com/hlatifii', icon: <AiOutlineTwitter /> },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/hamedlatifi',
    icon: <AiFillLinkedin />,
  },
  { id: 4, link: 'https://github.com/latifii', icon: <AiFillGithub /> },
]

export const navbarData = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About' },
  { id: 3, link: '#services', title: 'Services' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
]

export const servicesData = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: 'UI/UX Design',
    desc: 'My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product.',
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: 'Frontend Development',
    desc: 'Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.',
  },
  {
    id: 3,
    icon: <FaServer />,
    title: 'Backend Development',
    desc: 'The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.',
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: 'App Development',
    desc: 'Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.',
  },
]

export const portfolioData = [
  {
    id: 1,
    category: 'react',
    image: Image1,
    title: 'Jobster react-redux (open with VPN)',
    desc: 'Job Tracking App using CSS, React, Redux toolkit',
    demo: 'https://mrhamed-jobster.netlify.app/',
    github: 'https://github.com/latifii/jobster',
  },
  {
    id: 2,
    category: 'react',
    image: Image2,
    title: 'Ecommerce-comfy (react)',
    desc: 'ecommerce-comfy App using CSS, React, Context-api',
    demo: 'https://mrhamed-comfy.netlify.app/',
    github: 'https://github.com/latifii/react-ecommerce-comfy',
  },
  {
    id: 3,
    category: 'javascript',
    image: Image3,
    title: 'Ekama',
    desc: 'Ekama App using CSS,Tailwind css, Js, jQuery, Php, Laravel',
    demo: 'https://ekama.ir/',
  },
  {
    id: 11,
    category: 'javascript',
    image: Image11,
    title: 'Koomeh',
    desc: 'Koomeh App using CSS,Bootstrap, Js, jQuery, Php, Laravel',
    demo: 'https://koomeh.ir/',
  },
  {
    id: 12,
    category: 'javascript',
    image: Image12,
    title: 'Giland Melk',
    desc: 'Giland App using CSS,Bootstrap, Js, jQuery, Php, Laravel',
    demo: 'https://gilandmelk.ir/',
  },
  {
    id: 13,
    category: 'javascript',
    image: Image13,
    title: 'Mihan Melk',
    desc: 'Mihan Melk App using CSS,Bootstrap, Js, jQuery, Php, Laravel',
    demo: 'https://mmelk.ir/',
  },

  {
    id: 14,
    category: 'javascript',
    image: Image14,
    title: 'Kolbeh',
    desc: 'Kolbeh App using CSS,Bootstrap, Js, jQuery, Php, Laravel',
    demo: 'https://kolbeh.ir/',
  },

  {
    id: 15,
    category: 'javascript',
    image: Image15,
    title: 'Arman ',
    desc: 'Arman uni App using CSS,Bootstrap, Js, jQuery, Php, Laravel',
    demo: 'https://tmc-hmu.ir/',
  },
  {
    id: 7,
    category: 'javascript',
    image: Image7,
    title: 'Nartab template',
    desc: 'Nartab template using HTML, CSS, Vanilla Javascript',
    demo: 'https://mrhamed-nartab.netlify.app/',
    github: 'https://github.com/latifii/nartab-template',
  },
  {
    id: 5,
    category: 'vue',
    image: Image5,
    title: 'Medium clone (vue.js)',
    desc: 'Medium clone App using CSS, Vue.js, Vuex',
    demo: 'https://mrhamed-medium.netlify.app',
    github: 'https://github.com/latifii/medium-clone',
  },
  {
    id: 4,
    category: 'react',
    image: Image4,
    title: 'Search github users (react)',
    desc: 'Search github users App using CSS, React, Context-api',
    demo: 'https://hami-search-github.netlify.app',
    github: 'https://github.com/latifii/search-github-users',
  },

  {
    id: 10,
    category: 'mini-project',
    image: Image10,
    title: 'Pig Game',
    desc: 'Pig Game App using HTML, CSS, Vanilla Javascript',
    demo: 'https://mrhamed-pig.netlify.app/',
    github: 'https://github.com/latifii/Pig-Game',
  },
]

export const faqsData = [
  {
    id: 1,
    question: 'What do you need to start working on my project?',
    answer:
      'It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there.',
  },
  {
    id: 2,
    question: 'How long will my project take to complete?',
    answer:
      'This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date.',
  },
  {
    id: 5,
    question: 'Is hosting and domain registration inclusive in your pricing?',
    answer:
      'No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to.',
  },
  {
    id: 4,
    question: 'How much do you charge for an average website or app?',
    answer:
      "Once again, this depends. But my prices are affordable so you're good.",
  },
  {
    id: 3,
    question: "What's your payment plan?",
    answer:
      'Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered.',
  },
  {
    id: 6,
    question: "What if the project doesn't turn out good?",
    answer:
      'You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.',
  },
]

export const contactData = [
  { id: 1, icon: <HiOutlineMail />, link: 'mailto:latifi.hami@gmail.com' },
  {
    id: 2,
    icon: <FaTelegram />,
    link: 'https://t.me/latifii',
  },
  { id: 3, icon: <FaWhatsapp />, link: 'https://wa.me/+989377512323' },
]

export const socials = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About' },
  { id: 3, link: '#services', title: 'Services' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
]

export const primaryColors = [
  { className: 'color-1' },
  { className: 'color-2' },
  { className: 'color-3' },
  { className: 'color-4' },
  { className: 'color-5' },
  { className: 'color-6' },
]

export const backgroundColors = [{ className: 'bg-1' }, { className: 'bg-2' }]

export const floatingData = [
  { id: 1, link: '#', icon: <AiFillHome /> },
  { id: 2, link: '#about', icon: <BsPersonFill /> },
  { id: 3, link: '#services', icon: <MdHomeRepairService /> },
  { id: 4, link: '#portfolio', icon: <AiFillAppstore /> },
  { id: 5, link: '#contact', icon: <AiFillMessage /> },
]
