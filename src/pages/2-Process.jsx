import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import cards from "../assets/process/card1.png";
// import restaurant from "../assets/process/card2.png";
import note_taking from "../assets/process/card3.png";

function Process() {
  return (
    <div className="p-2">
      <div className="grid max-w-screen-lg mx-auto">
        <div className="text-center mx-2 mb-10 mt-24 lg:mb-16">
          <Typography className="font-bold leading-tight text-4xl lg:text-6xl">
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
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
          <Card shadow={false} className="md:row-span-2 bg-black">
            <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
              <Typography
                variant="h3"
                className="text-gold text-xl lg:text-4xl font-bold"
              >
                Fill your restaurant's profile <br /> under 30 mins
              </Typography>
              <Typography className="text-base font-medium lg:text-2xl text-gray-200">
                Upload your chain's branding materials (logos, color schemes,
                etc.), detailed menu, POS systems list if integration is needed,
                etc.
              </Typography>

              <img src={cards} alt="restaurant profile form" />
              <Button
                size="lg"
                className="border border-gold bg-gold text-black hover:text-gold hover:bg-transparent transition duration-500 ease-in-out"
              >
                Request Access
              </Button>
            </CardBody>
          </Card>
          <Card shadow={false} className="bg-white">
            <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
              <Typography
                variant="h3"
                className="text-gold text-xl lg:text-4xl font-bold"
              >
                Customise AI to meet your needs
              </Typography>
              <Typography
                color="gray"
                className="text-base font-medium lg:text-2xl"
              >
                Work closely with our team once to tailor AI Waiter for your
                branch’s needs and preferences. We can support integrations with
                other POS systems and craft the solution personalised for you.
                You can even create a character of your waiter, input local
                jokes relevant to your positioning.
              </Typography>
            </CardBody>
          </Card>
          <Card shadow={false} className="bg-white">
            <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
              <Typography
                variant="h3"
                className="text-gold text-xl lg:text-4xl font-bold"
              >
                Get a new tireless employee - AI Waiter
              </Typography>
              <Typography
                color="gray"
                className="text-base font-medium lg:text-2xl"
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
  );
}

export default Process;
