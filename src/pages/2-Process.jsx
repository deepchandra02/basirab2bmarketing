import React, { useState } from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import cards from "../assets/process/card1.webp";
import note_taking from "../assets/process/card3.png";
import AccessForm from "../components/AccessForm";

function Process() {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm((cur) => !cur);
  return (
    <>
      <div id="process" className="p-4 md:p-8">
        <div className="grid max-w-[1170px] mx-auto">
          <div className="text-center mx-2 mb-10 mt-10 lg:mb-16">
            <Typography
              color="black"
              className="font-bold leading-tight text-4xl lg:text-5xl"
            >
              Basira AI recommends items from
              <text class="bg-gradient-to-r from-[#322911] to-[#b58c10] bg-clip-text text-transparent">
                {" "}
                your menu
              </text>
              <br />
              when guests scan the{" "}
              <text class="bg-gradient-to-r from-[#322911] to-[#b58c10] bg-clip-text text-transparent">
                {" "}
                QR-code
              </text>
            </Typography>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-2">
            <Card shadow={false} className="md:row-span-2 bg-black">
              <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
                <Typography
                  variant="h3"
                  className="text-lightgold text-xl lg:text-2xl font-bold"
                >
                  Fill your restaurant's profile <br /> under 30 mins
                </Typography>
                <Typography className="text-base font-medium lg:text-xl text-gray-200">
                  Upload your chain's branding materials (logos, color schemes,
                  etc.), detailed menu, POS systems list if integration is
                  needed, etc.
                </Typography>
                <img src={cards} alt="restaurant profile form" />
                <Button
                  onClick={handleOpenForm}
                  size="lg"
                  className="border border-lightgold bg-lightgold text-black hover:text-lightgold hover:bg-transparent transition duration-500 ease-in-out"
                >
                  Request Access
                </Button>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-white">
              <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
                <Typography
                  variant="h3"
                  className="text-darkgold text-xl text-center md:text-left lg:text-2xl font-bold"
                >
                  Customise AI to meet your needs
                </Typography>
                <Typography
                  color="gray"
                  className="text-base font-medium lg:text-xl"
                >
                  Work closely with our team once to tailor AI Waiter for your
                  branch’s needs and preferences. We can support integrations
                  with other POS systems and craft the solution personalised for
                  you. You can even create a character of your waiter, input
                  local jokes relevant to your positioning.
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-white">
              <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
                <Typography
                  variant="h3"
                  className="text-darkgold text-xl lg:text-2xl text-center md:text-left font-bold"
                >
                  Get a new tireless employee - AI Waiter
                </Typography>
                <Typography
                  color="gray"
                  className="text-base font-medium lg:text-xl"
                >
                  Supportive, intelligent and time-saving system for your brand.
                  It will reduce costs, forecast demand, make meaningful
                  relationships with guests and increase retention.
                </Typography>
                <img
                  src={note_taking}
                  alt="note taking illustration"
                  className="h-28 w-28 mx-auto"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <AccessForm
        setOpen={setOpenForm}
        open={openForm}
        handleOpen={handleOpenForm}
      />
    </>
  );
}

export default Process;
