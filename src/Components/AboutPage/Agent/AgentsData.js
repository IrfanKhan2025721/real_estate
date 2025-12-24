import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Zianab from "../../../assets/images/Zianab.jpg";
import Ahmad from "../../../assets/images/ahmad.jpg";
import Usman from "../../../assets/images/usman.avif";
import Ayesha from "../../../assets/images/Ayesha.jpg";

const agentsData = [
  {
    id: 1,
    name: "Terrel Norman",
    office: "Head Office",
    mobile: "+93 78 140 4483",
    email: "terrel.norman@example.com",
    image: Ahmad,
    socials: [
      { icon: FaFacebook, link: "#" },
      { icon: FaXTwitter, link: "#" },
      { icon: FaInstagram, link: "#" },
      { icon: FaLinkedin, link: "#" },
    ],
  },
  {
    id: 2,
    name: "Zianab Quraishi",
    office: "Kabul Branch",
    mobile: "+93 79 456 7821",
    email: "sarah.johnson@example.com",
    image: Zianab,
    socials: [
      { icon: FaFacebook, link: "#" },
      { icon: FaInstagram, link: "#" },
    ],
  },
  {
    id: 3,
    name: "Michael Brown",
    office: "Herat Branch",
    mobile: "+93 70 334 1290",
    email: "michael.brown@example.com",
    image: Usman,
    socials: [
      { icon: FaXTwitter, link: "#" },
      { icon: FaLinkedin, link: "#" },
    ],
  },
  {
    id: 4,
    name: "Ayesha Rahimi",
    office: "Mazar Branch",
    mobile: "+93 77 998 4412",
    email: "ayesha.rahimi@example.com",
    image: Ayesha,
    socials: [
      { icon: FaFacebook, link: "#" },
      { icon: FaInstagram, link: "#" },
      { icon: FaLinkedin, link: "#" },
    ],
  },
];

export default agentsData;
