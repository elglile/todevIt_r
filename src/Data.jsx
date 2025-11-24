import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaLinkedinIn, FaPhoneAlt, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill, RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCode, FaPalette, FaCloud, FaBullhorn, FaMobileAlt } from "react-icons/fa";
import { assets } from "./assets/assets";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FiCheckCircle, FiCode, FiPenTool, FiPhoneCall, FiUsers } from "react-icons/fi";

import {
  FiSearch,
  FiPackage,
} from "react-icons/fi";


export const Menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Services", path: "/services" },
  { name: "Our projectss", path: "/ourprojects" },
  { name: "Contact", path: "/contact" },
];



export const socialMedia = [
  {
    name: "Facebook",
    icon: <FaFacebook size={16} className="hover:text-1-700   transition-discrete duration-300  " />,
    url: "https://facebook.com/yourpage",
    text: "TodevIT",
  },
  {
    name: "Instagram",
    icon: <RiInstagramFill size={16} className="hover:text-pink-700  transition-discrete duration-300  " />,
    url: "https://instagram.com/yourprofile",
    text: "TodevIT",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={16} className="hover:text-1-700   transition-discrete duration-300  " />,
    url: "https://linkedin.com/in/yourprofile",
    text: "TodevIT",
  },
  //   {
  //     name: "GitHub",
  //     icon: <FaGithub size={16} />,
  //     url: "https://github.com/yourusername",
  //     text: "TodevIT",
  //   },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter size={16} className="hover:text-black   transition-discrete duration-300  " />,
    url: "https://twitter.com/yourprofile",
    text: "TodevIT",
  },
  {
    name: "phone",
    icon: <FaPhoneAlt size={24} className="text-1-700 mx-2" />,
    url: "https://twitter.com/yourprofile",
    text: "0687976771",
    title: "Call us",
  },
  {
    name: "email",
    icon: <MdEmail size={24} className="text-1-700 mx-2" />,
    url: "mailto:todevit@outlook.com",
    text: "todevit@outlook.com",
    title: "Send us an email",
  },
];

export const siteInfo = {
  name: "TodevIt",
  year: new Date().getFullYear(),
  rights: "All rights reserved.",
};


export const servicesDat = [
  {
    id: 1,
    icon: <FaCode size={30} className="text-1-500" />,
    title: "Web Development",
  },

  {
    id: 2,
    icon: <FaPalette size={30} className="text-1-500" />,
    title: "UI/UX Design",

  },

  // {
  //   id: 3,
  //   icon: <FaCloud size={30} className="text-1-500" />,
  //   title: "Cloud Hosting",
  // 
  // },

  {
    id: 4,
    icon: <FaBullhorn size={30} className="text-1-500" />,
    title: "Digital Marketing",

  },

  {
    id: 5,
    icon: <FaMobileAlt size={30} className="text-1-500" />,
    title: "Mobile Development",

  }, {
    id: 6,
    icon: <FaBullhorn size={30} className="text-1-500" />,
    title: "Social Media Management",
  },
];


export const servicesData = [
  {
    id: 1,
    icon: <img src={assets.webdev} className="w-[320px] lg:w-auto  h-full object-cover shadow-1-300 rounded-xl" alt="Project coding" />,
    title: "Web Development",
    shortDesc: "Do you have a project idea?",
    longDesc:
      "We build high-performance websites and web applications using the latest technologies, offering secure, scalable, and optimized solutions tailored to your business needs.",
    Tools: [
      { name: "React", icon: <FaReact className=" group-hover:text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className=" group-hover:text-black" /> },
      { name: "Node.js", icon: <FaNodeJs className=" group-hover:text-green-600" /> },
      { name: "Node.js", icon: <SiExpress size={60} className=" group-hover:text-gray-600" /> },
      { name: "Node.js", icon: <FaLaravel size={60} className=" group-hover:text-orange-600" /> },
      { name: "Node.js", icon: <TbBrandJavascript  size={60} className=" group-hover:text-yellow-600" /> },
      { name: "Node.js", icon: <RiTailwindCssFill   size={60} className=" group-hover:text-blue-600" /> },
    ]

  },
  {
    id: 2,
    icon: <img src={assets.uiux} className="w-[320px] lg:w-auto  h-full object-cover shadow-1-300 rounded-xl" alt="Project coding" />,
    title: "UI/UX Design",
    shortDesc: "Clean Creative Minimal",
    longDesc:
      "We design visually stunning and user-friendly interfaces that deliver a seamless experience, focusing on beauty, simplicity, and user-centric functionality.",
  },


  {
    id: 4,
    icon: <img src={assets.marketing} className="w-[320px] lg:w-auto  h-full object-cover shadow-1-300 rounded-xl" alt="Project coding" />,
    title: "Digital Marketing",
    shortDesc: "Growth Target Results",
    longDesc:
      "We craft marketing strategies that increase visibility, attract customers, and grow your brand through SEO, ads, social media management, and content marketing.",
  },

  {
    id: 5,
    icon: <img src={assets.mobil} className="w-[320px] lg:w-auto  h-full object-cover shadow-1-300 rounded-xl" alt="Project coding" />,
    title: "Mobile Development",
    shortDesc: "Hybrid Fast Responsive",
    longDesc:
      "We develop mobile applications that are fast, responsive, and optimized for both iOS and Android, ensuring a smooth and powerful user experience.",
  }, {
    id: 6,
    icon: <img src={assets.socialmediamanager} className="w-[320px] lg:w-auto  h-full object-cover shadow-1-300 rounded-xl" alt="Project coding" />,
    title: "Social Media Management",
    shortDesc: "Engage Grow Convert",
    longDesc:
      "We manage your social media presence with engaging content, audience interaction, and growth strategies to increase brand visibility and customer engagement.",
  },
  {
    id: 7,
    icon: <img src={assets.wcreation} className="w-[320px] lg:w-auto  h-full object-cover shadow-1-300 rounded-xl" alt="Project coding" />,
    title: "websites creation ",
    shortDesc: "websites creation",
    longDesc:
      "Are you still relying on word-of-mouth or traditional advertising to grow your business? /br It’s time to elevate your marketing and build a website that works for you 24/7.",
  },

];


export const benefits = [
  'Expert team with strong technical & creative skills',
  'Modern and scalable development practices',
  'Clean, user-centered design approach',

  'Fast delivery with consistent communication',

  'Flexible pricing tailored to project needs',

  'Full transparency across process and results',
];

export const imgWhyChooseUs = [
  {
    images: [
      {
        h: "h-32",
        gradient: "from-[#00C853]/20 to-gray-200",
        url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Team collaboration",
      },
      {
        h: "h-48",
        gradient: "from-gray-200 to-[#00C853]/20",
        url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Working on code",
      },
    ],
    extraClass: "space-y-4",
  },

  {
    images: [
      {
        h: "h-48",
        gradient: "from-[#00C853]/20 to-gray-200",
        url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Creative meeting",
      },
      {
        h: "h-32",
        gradient: "from-gray-200 to-[#00C853]/20",
        url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Team discussion",
      },
    ],
    extraClass: "space-y-4 pt-8",
  },
];

export const steps = [
  {
    title: "Reach us",
    icon: <FiPhoneCall className="text-orange-500 text-3xl size-7 md:size-8 " />,
    img: "https://res.cloudinary.com/dvmmezhei/image/upload/v1763633979/Contactus-pro_jhf7ae.png", // optional image
    desc:
      "The first step in our collaboration process is reaching out to us. Whether you have a specific project in mind or are looking for consultation, our team is ready to listen and understand your requirements.",
  },

  {
    title: "Meet us",
    icon: <FiUsers className="text-blue-500 text-3xl size-7 md:size-8" />,
    img: "https://res.cloudinary.com/dvmmezhei/image/upload/v1763634100/Remote_meeting-bro_ppalxd.png",
    desc:
      "Once you've reached out, we'll schedule a meeting to discuss your project in detail. This meeting helps us understand your goals, target audience, and the specific features you want in your software or application.",
  },

  {
    title: "Prototyping",
    icon: <FiPenTool className="text-purple-500 text-3xl size-7 md:size-8" />,
    img: "https://res.cloudinary.com/dvmmezhei/image/upload/v1763634495/Prototyping_process-bro_jf9ued.png",
    desc:
      "After understanding your project, we move to the prototyping phase. Our designers create a visual representation of your software, showcasing the layout, UI, and core functionalities.",
  },

  {
    title: "Coding",
    icon: <FiCode className="text-green-600 text-3xl size-7 md:size-8" />,
    img: "https://res.cloudinary.com/dvmmezhei/image/upload/v1763634616/Low_code_development-pana_diu6gv.svg",
    desc:
      "Once the prototype is approved, our development team starts coding your solution using modern technologies, ensuring your product is secure, scalable, and meets industry standards.",
  },

  {
    title: "Testing",
    icon: <FiSearch className="text-red-500 text-3xl size-7 md:size-8" />,
    img: "https://res.cloudinary.com/dvmmezhei/image/upload/v1763634739/QA_engineers-bro_rpqfcr.png",
    desc:
      "Quality assurance is a critical step in our workflow. Our testing team performs thorough checks to identify and fix bugs, ensuring smooth performance and reliability.",
  },

  {
    title: "Delivery",
    icon: <FiPackage className="text-teal-500 text-3xl size-7 md:size-8" />,
    img: "https://res.cloudinary.com/dvmmezhei/image/upload/v1763634740/Delivery_address-bro_g2vtee.png",
    desc:
      "The final step is delivering your customized software or application. We assist with deployment, installation, and provide full support to ensure a seamless launch.",
  },
];


export const aboutData = {
  title: "About Us",
  text: `
We are a modern digital agency focused on web development, UI/UX design,
mobile applications, and digital marketing. We help businesses grow by
creating high-quality, scalable, and user-friendly digital solutions.
  `,
  images: [
    <img
      src={assets.about1}
      className="w-full h-40 object-cover rounded-xl shadow-1-300"
      alt="About Image 1"
    />,
    <img
      src={assets.about2}
      className="w-full h-40 object-cover rounded-xl shadow-1-300"
      alt="About Image 2"
    />,

  ],
};

