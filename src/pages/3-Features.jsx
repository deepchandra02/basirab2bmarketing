import React, { useRef } from "react";
import { IconButton } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import card1 from "../assets/features/card1.png";
import card2 from "../assets/features/card2.png";
import card3 from "../assets/features/card3.png";

function ContentCard({ img, title, desc }) {
  return (
    <Card shadow={true} className="w-62">
      <CardHeader
        shadow={false}
        color="white"
        className="mt-5 relative items-center"
      >
        <img
          src={img}
          alt=""
          className="object-cover object-center h-60 mx-auto"
        />
      </CardHeader>
      <CardBody>
        <Typography
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-3 normal-case transition-colors hover:text-gray-700"
        >
          {title}
        </Typography>
        <Typography className="mb-5 !text-base !font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: card1,
    title: "Recommendations for guests",
    desc: "High-margin menu item recommendations based on customers' demographics, preferences, allergies, frequency and time of visits, customer feedback, and special requests.",
  },
  {
    img: card2,
    title: "Demand analytics and forecasting",
    desc: "Forecasting based on consumer behavior information (time of ordering specific meals) which allows to order and prepare food in advance. Full analytics for hourly, daily, weekly, and monthly operations.",
  },
  {
    img: card3,
    title: "Menu Customization",
    desc: "Data-driven menu customization based on guests requests: food choices and rating, adjust the menu to meet the demand and follow the trends.",
  },
  {
    img: card2,
    title: "Recommendations for guests",
    desc: "High-margin menu item recommendations based on customers' demographics, preferences, allergies, frequency and time of visits, customer feedback, and special requests.",
  },
];

function Features() {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 300; // Adjust the scroll amount as needed

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-8">
      <div className="grid max-w-screen-lg mx-auto">
        <div className="flex justify-start gap-x-8 my-4">
          <Typography className="text-4xl font-bold" color="black">
            Features
          </Typography>
          <div className="flex w-max gap-4">
            <IconButton
              onClick={scrollLeft}
              variant="outlined"
              ripple={true}
              className="rounded-full"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </IconButton>
            <IconButton
              onClick={scrollRight}
              variant="outlined"
              ripple={true}
              className="rounded-full"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </IconButton>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar space-x-4"
        >
          {contents.map(({ img, title, desc, details }) => (
            <ContentCard
              details={details}
              key={title}
              img={img}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
