import {
  FaHome,
  FaBuilding,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const navData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    title: "Property",
    path: "/property",
    icon: FaBuilding,
  },
  {
    id: 3,
    title: "About Us",
    path: "/about",
    icon: FaInfoCircle,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
    icon: FaPhoneAlt,
  },
];

export default navData;
