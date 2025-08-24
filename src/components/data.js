import {
  GiftIcon,
  SparklesIcon,
  HeartIcon,
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Sustainable & Empowering",
  desc: "Every product you purchase supports women artisans and rural communities across India. Our eco-friendly approach preserves traditional craftsmanship while creating sustainable livelihoods.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Women Empowerment",
      desc: "Direct support to skilled women artisans, creating economic independence and preserving traditional skills.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Eco-Friendly Products",
      desc: "Sustainable materials like wood, soya wax, and jute with minimal environmental impact.",
      icon: <BuildingOfficeIcon />,
    },
    {
      title: "Rural Manufacturing",
      desc: "Supporting village-level production units and preserving India's rich craft heritage.",
      icon: <GlobeAsiaAustraliaIcon />,
    },
  ],
};

const benefitTwo = {
  title: "For Individuals & Corporates",
  desc: "Whether you're looking for personal gifts or corporate solutions, we offer customized packages that reflect your values and support meaningful causes.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Corporate Gifting",
      desc: "Sustainable corporate gifts that showcase your company's commitment to social responsibility.",
      icon: <GiftIcon />,
    },
    {
      title: "Authentic Craftsmanship",
      desc: "Each product tells a story of skilled artisans and traditional techniques passed down through generations.",
      icon: <StarIcon />,
    },
    {
      title: "Nationwide Delivery",
      desc: "Safe packaging and reliable delivery across India, ensuring your gifts reach on time.",
      icon: <TruckIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
