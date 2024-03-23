import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import cards from "../assets/process/card1.png";
import restaurant from "../assets/process/card2.png";
import note_taking from "../assets/process/card3.png";

function Process() {
  return (
    <div className="p-2">
      <div className="grid max-w-screen-lg mx-auto">
        <div className="text-center mx-2 my-8 lg:mb-16">
          <Typography variant="h3" className="font-bold leading-tight">
            Basira AI recommends items from
            <text className="text-[#e2c449]"> your menu</text> <br />
            when guests scan the <text className="text-[#e2c449]">QR-code</text>
          </Typography>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
          <Card shadow={false} className="md:row-span-2 bg-black">
            <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
              <Typography variant="h3" className="text-gold text-xl">
                Fill your restaurant's profile <br /> under 30 mins
              </Typography>
              <Typography color="white" className="text-base font-normal">
                Upload your chain's branding materials (logos, color schemes,
                etc.), detailed menu, POS systems list if integration is needed,
                etc.
              </Typography>

              <img src={cards} alt="restaurant profile form" />
              <Button
                size="lg"
                className="border border-gold hover:bg-gold hover:text-black text-gold bg-transparent transition duration-500 ease-in-out"
              >
                Request Access
              </Button>
            </CardBody>
          </Card>
          <Card shadow={false} className="bg-white">
            <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
              <Typography variant="h3" className="text-gold text-xl">
                Customise AI to meet your needs
              </Typography>
              <Typography color="black" className="text-base font-normal">
                Work closely with our team once to tailor AI Waiter for your
                branch’s needs and preferences. We can support integrations with
                other POS systems and craft the solution personalised for you.
                You can even create a character of your waiter, input local
                jokes relevant to your positioning.
              </Typography>
              <img src={restaurant} alt="waiter taking order illustration" />
            </CardBody>
          </Card>
          <Card shadow={false} className="bg-white">
            <CardBody className="flex h-full flex-col space-y-4 rounded-2xl p-8">
              <Typography variant="h3" className="text-gold text-xl">
                Get a new tireless employee - AI Waiter
              </Typography>
              <Typography color="black" className="text-base font-normal">
                Supportive, intelligent and time-saving system for your brand.
                It will reduce costs, forecast demand, make meaningful
                relationships with guests and increase retention.
              </Typography>
              <img
                src={note_taking}
                alt="note taking illustration"
                className="h-40 w-40 mx-auto"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Process;
