import { FaAward, FaServer } from 'react-icons/fa'
import { TbBooks } from 'react-icons/tb'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { SiAdobexd } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { AiFillAppstore } from 'react-icons/ai'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiFillGithub,
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
} from '../assets/images/index'

export const aboutData = [
  { id: 1, icon: <FaAward />, title: 'Experience', desc: '3+ Years Working' },
  { id: 2, icon: <TbBooks />, title: 'Projects', desc: '180+ Completed' },
  {
    id: 3,
    icon: <BiHappyHeartEyes />,
    title: 'Clients',
    desc: '70+ happy clients',
  },
]

export const headerData = [
  { id: 1, link: 'https://instagram.com', icon: <AiOutlineInstagram /> },
  { id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter /> },
  { id: 3, link: 'https://dribbble.com', icon: <AiOutlineDribbble /> },
  { id: 4, link: 'https://github.com', icon: <AiFillGithub /> },
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
    category: 'uiux',
    image: Image1,
    title: 'Project Title One (UIUX)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 2,
    category: 'frontend',
    image: Image2,
    title: 'Project Title Two (Frontend)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 3,
    category: 'frontend',
    image: Image3,
    title: 'Project Title Three (Frontend)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 4,
    category: 'uiux',
    image: Image4,
    title: 'Project Title Four (UIUX)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 5,
    category: 'uiux',
    image: Image5,
    title: 'Project Title Five (UIUX)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 6,
    category: 'frontend',
    image: Image6,
    title: 'Project Title Six (Frontend)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 7,
    category: 'frontend',
    image: Image7,
    title: 'Project Title Seven (Frontend)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 8,
    category: 'backend',
    image: Image8,
    title: 'Project Title Eight (Backend)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
  {
    id: 9,
    category: 'frontend',
    image: Image9,
    title: 'Project Title Nine (Frontend)',
    desc: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!',
    demo: 'http://egatortutorials.com',
    github: 'https://github.com/egattor',
  },
]
