import React from "react";
import { Typography } from "@material-tailwind/react";

function Form() {
  return (
    <div className="bg-black2 p-4 md:p-8 min-h-screen">
      <div className="grid max-w-[1170px] mx-auto">
        <div className="text-center my-8 lg:mb-16">
          <Typography
            variant="paragraph"
            className="font-medium max-w-[900px] mx-auto text-[#C09E3B] mb-10"
          >
            We know – diving into AI might seem like a big step. That's why we
            offer a free 1-on-1 session where you can see Basira AI in action.
            No commitment, just your questions answered and a clear
            demonstration of how it can work for your restaurant.
          </Typography>
          <Typography variant="h2" className="font-medium text-[#EAEBE6]">
            Witness the results firsthand and
          </Typography>
          <Typography variant="h2" className="font-bold text-[#EAEBE6]">
            be the first to adapt to
            <text class="bg-gradient-to-r from-[#C09E3B] to-[#FFFFFF] bg-clip-text text-transparent">
              {" "}
              the tech <br />
              change
            </text>
          </Typography>
        </div>
        <div class="max-w-[800px] mx-auto text-[#EAEBE6] relative flex overflow-x-hidden">
          <div class="animate-marquee whitespace-nowrap">
            <span class="mx-4 ">Stay ahead of your competition</span>
            <span class="mx-4 ">Start for free</span>
            <span class="mx-4 ">Customise your style</span>
            <span class="mx-4 ">Efficiency meets excellence here!</span>
            <span class="mx-4 ">Elevate Dining with AI Waiter Tech!</span>
          </div>
          <div class="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span class="mx-4 ">Stay ahead of your competition</span>
            <span class="mx-4 ">Start for free</span>
            <span class="mx-4 ">Customise your style</span>
            <span class="mx-4 ">Efficiency meets excellence here!</span>
            <span class="mx-4 ">Elevate Dining with AI Waiter Tech!</span>
          </div>
          {/* <!-- Left Gradient Overlay --> */}
          <div class="absolute left-0 top-0 bottom-0 w-56 bg-gradient-to-r from-black2 via-transparent"></div>
          {/* <!-- Right Gradient Overlay --> */}
          <div class="absolute right-0 top-0 bottom-0 w-56 bg-gradient-to-l from-black2 via-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Form;
