import { Typography, Card, CardBody } from "@material-tailwind/react";
import phone from "../assets/phone.png";

export function ContentCard({ title, description, image, className }) {
  return (
    <Card shadow={false} className={className}>
      <CardBody className="flex h-full flex-col rounded-2xl bg-[#F3F2ED] p-10">
        <Typography variant="h3" className="text-text">
          {title}
        </Typography>
        <Typography className="mt-3 mb-14 text-base font-normal text-[#212529] opacity-80 max-w-sm">
          {description}
        </Typography>
        {image && (
          <div className="w-full flex justify-center">
            <img
              src={image}
              alt={title}
              className="max-w-full h-auto rounded-lg mb-4"
            />
          </div>
        )}
      </CardBody>
    </Card>
  );
}

const Contents = [
  {
    title: "Scan, Talk, Order ",
    description:
      "Forget about the cluttered mailbox. Send there what you already liked",
    image: phone,
  },
  {
    title: "Save your preferences",
    description:
      "Get pitches based on the beats you choose. Switch to idle while on vacation",
    image: phone,
  },
];

function Guest() {
  return (
    <div className="bg-[#EBE7E6] p-8">
      <div className="grid min-h-[85vh] px-8">
        <div className="text-center my-8 lg:mb-16">
          <Typography variant="h3" color="blue-gray">
            As a <text className="text-text">guest</text>, you get fast and
            personalized <br /> services spotting your preferences and health
            needs
          </Typography>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {Contents.map(({ title, description, image }, key) => (
            <ContentCard
              key={key}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guest;
