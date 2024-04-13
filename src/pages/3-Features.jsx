import React, { useRef, useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import card1 from "../assets/features/card1.webp";
import card2 from "../assets/features/card2.webp";
import card3 from "../assets/features/card3.webp";
import card4 from "../assets/features/card4.webp";
import card5 from "../assets/features/card5.webp";
import card6 from "../assets/features/card6.webp";
import card7 from "../assets/features/card7.webp";
import card8 from "../assets/features/card8.webp";
import card9 from "../assets/features/card9.webp";
import card10 from "../assets/features/card10.webp";

function ContentCard({ img, title, desc, className }) {
  return (
    <Card
      shadow={true}
      className={`bg-[#F3F2ED] min-w-72 rounded-3xl ${className}`}
    >
      <CardHeader
        shadow={false}
        className="bg-[#F3F2ED] mt-5 relative items-center"
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="mx-auto h-60 rounded-[1.75rem]"
        />
      </CardHeader>
      <CardBody className="flex flex-col">
        <Typography
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
    title: "AI-Powered Menu Recommendations",
    desc: "Emotionally intelligent chatbot that offers personalized meal recommendations based on guest’s preferences, past orders, allergies, and dietary needs.",
  },
  {
    img: card2,
    title: "Custom Digital Menu",
    desc: "Menu with detailed item descriptions, nutritional information, and customizable options for ingredient adjustments and spice levels.",
  },
  {
    img: card3,
    title: "Data-driven Menu Adjustments",
    desc: "We suggest modifications for menu based on guests requests: demanding missing ingredients, rating and feedback.",
  },
  {
    img: card4,
    title: "Online Ordering & Basket System",
    desc: "Online order management with special notes and notifications with the ability to modify the order in the digital basket. We reduce orders made by mistake.",
  },
  {
    img: card5,
    title: "QR Code Menu Access",
    desc: "Quick and easy access to the menu through a QR code scan, facilitating table-specific ordering and service.",
  },
  {
    img: card6,
    title: "Interactive Customer Interface",
    desc: "Real-time food preparation tracking, buttons for calling a waiter, asking for bills, or ordering takeaways.",
  },
  {
    img: card7,
    title: "Waiter Table View",
    desc: "View for waiters showing table details, guest information, and dining preferences, complete with a 'close table' feature.",
  },
  {
    img: card8,
    title: "Upsell Scripts & Recommendations for Waiters",
    desc: "Scripts and menu item recommendations for waiters to upsell high-margin items while guests are sitting too long, enhancing guest experiences and boosting sales.",
  },
  {
    img: card9,
    title: "Push to sell specific items",
    desc: "To highlight specific menu items for recommendation through the AI chatbot, aiming to reduce costs and sell more.",
  },
  {
    img: card10,
    title: "Analytics Dashboard",
    desc: "Management dashboard for detailed insights on sales, customer feedback, and menu demand.",
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
    <div id="features" className="p-4 md:p-8">
      <div className="grid max-w-[1170px] mx-auto">
        <div className="flex justify-start gap-x-8 my-4">
          <Typography className="text-4xl lg:text-5xl font-bold" color="black">
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
