import { Typography, Card, CardBody } from "@material-tailwind/react";
import phone1 from "../assets/guest/iphone1.png";
import phone2 from "../assets/guest/iphone2.png";

export function ContentCard({ title, description, image, className }) {
  return (
    <Card shadow={false} className={className}>
      <CardBody className="flex h-full flex-col rounded-2xl bg-[#F3F2ED] p-10">
        <Typography className="text-darkgold text-center mb-6 text-2xl lg:text-3xl font-semibold">
          {title}
        </Typography>
        {image && (
          <img src={image} alt={title} className="mx-auto h-96 rounded-lg" />
        )}
      </CardBody>
    </Card>
  );
}

const Contents = [
  {
    title: "Scan, Talk, Order ",
    // description:
    //   "Forget about the cluttered mailbox. Send there what you already liked",
    image: phone1,
  },
  {
    title: "Save Preferences",
    // description:
    //   "Get pitches based on the beats you choose. Switch to idle while on vacation",
    image: phone2,
  },
];

function Guest() {
  return (
    <div className="p-4 md:p-8">
      <div className="grid max-w-[1170px] mx-auto">
        <div className="text-center my-8 lg:mb-16">
          <Typography
            color="black"
            className="font-bold leading-tight text-4xl lg:text-5xl hidden sm:inline-block"
          >
            Provide your <text className="text-darkgold">guests</text> swift and
            personalized <br /> services tuned to their preferences and health
            needs
          </Typography>
          <Typography
            color="black"
            className="font-bold leading-tight text-4xl sm:hidden"
          >
            Provide your{" "}
            <text className="text-darkgold">
              {" "}
              guests <br />
            </text>{" "}
            swift and personalized services tuned to their preferences and
            health needs
          </Typography>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 mb-6">
          {Contents.map(({ title, description, image }, key) => (
            <ContentCard
              key={key}
              title={title}
              description={description}
              image={image}
              className="rounded-3xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guest;
