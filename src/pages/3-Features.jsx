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
import heroChart from "../assets/hero/hero_chart.png";

function ContentCard({ img, title, desc, details }) {
  return (
    <Card shadow={true} className="min-w-96">
      <CardHeader
        shadow={false}
        color="blue-gray"
        className="mt-5 relative h-52"
      >
        <img src={img} alt="" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="small"
          className="mb-3 !font-normal !text-gray-500"
        >
          {details}
        </Typography>
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
        <Button color="gray" variant="outlined">
          from/night
        </Button>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: heroChart,
    title: "Lovely and cozy apartment",
    details: "Entire Apartment • 3 Guests • 2 Beds",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    title: "Single details in the center of city",
    details: "Private details • 1 Guests • 1 Sofa",
    desc: "As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog3.jpg",
    title: "Independent house beddetails",
    details: "Entire Apartment • 4 Guests • 2 Beds",
    desc: "Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.",
  },
  {
    img: heroChart,
    title: "Lovely and cozy apartment",
    details: "Entire Apartment • 3 Guests • 2 Beds",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog2.jpg",
    title: "Single details in the center of city",
    details: "Private details • 1 Guests • 1 Sofa",
    desc: "As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.",
  },
  {
    img: "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog3.jpg",
    title: "Independent house beddetails",
    details: "Entire Apartment • 4 Guests • 2 Beds",
    desc: "Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.",
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
