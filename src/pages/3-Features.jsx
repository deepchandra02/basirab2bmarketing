import React, { useRef, useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import card1 from "../assets/features/card1.png";
import card2 from "../assets/features/card2.png";
import card3 from "../assets/features/card3.png";

function ContentCard({ img, title, desc, className }) {
  return (
    <Card shadow={true} className={`bg-body min-w-72 rounded-3xl ${className}`}>
      <CardHeader shadow={false} className="bg-body mt-5 relative items-center">
        <img src={img} alt="" className="mx-auto h-60" />
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
    img: {},
    title: "Online Orders",
    desc: "Online order management with special notes and notifications with the ability to modify the order in minutes. We reduce orders made by mistake.",
  },
];

function Features() {
  const scrollContainerRef = useRef(null);
  const [atInitial, setAtInitial] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  let scrollAmount = 300;

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      setAtInitial(scrollLeft <= 0);
      setAtEnd(scrollLeft >= maxScrollLeft - 1); // A tolerance of 1px to ensure reliability across browsers
    };

    // Initial check in case the content is not fully loaded
    checkScrollPosition();

    // Add event listener for scroll events
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", checkScrollPosition, {
      passive: true,
    });

    // Clean up event listener on component unmount
    return () => {
      scrollContainer.removeEventListener("scroll", checkScrollPosition);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const maxScrollLeft =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
      console.log(maxScrollLeft);
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setAtEnd(false);
      if (scrollContainerRef.current.scrollLeft <= scrollAmount) {
        setAtInitial(true);
      }
    }
    console.log(scrollContainerRef.current.scrollLeft);
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const maxScrollLeft =
        scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth;
      console.log(maxScrollLeft);
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setAtInitial(false);
      if (
        maxScrollLeft - scrollContainerRef.current.scrollLeft <
        scrollAmount
      ) {
        setAtEnd(true);
      }
    }
    console.log(scrollContainerRef.current.scrollLeft);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="grid max-w-[1170px] mx-auto">
        <div className="flex justify-start gap-x-8 my-4">
          <Typography className="text-4xl font-bold" color="black">
            Features
          </Typography>
          <div className="flex w-max gap-4">
            <IconButton
              disabled={atInitial}
              onClick={scrollLeft}
              variant={atInitial ? "outlined" : "filled"}
              ripple={true}
              className={`rounded-full ${
                atInitial ? "cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </IconButton>
            <IconButton
              disabled={atEnd}
              onClick={scrollRight}
              variant={atEnd ? "outlined" : "filled"}
              ripple={true}
              className={`rounded-full ${atEnd ? "cursor-not-allowed" : ""}`}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </IconButton>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          // TODO: Add listener to change button states if user scrolls the cards without the buttons
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-4 py-2"
        >
          {contents.map(({ img, title, desc, details }) => (
            <ContentCard
              details={details}
              key={title}
              img={img}
              title={title}
              desc={desc}
              className="snap-start"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
