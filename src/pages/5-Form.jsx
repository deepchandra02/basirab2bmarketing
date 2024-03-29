import { Typography, Card, CardBody } from "@material-tailwind/react";
import phone1 from "../assets/guest/iphone1.png";
import phone2 from "../assets/guest/iphone2.png";

export function ContentCard({ title, description, image, className }) {
  return (
    <Card shadow={false} className={className}>
      <CardBody className="flex h-full flex-col rounded-2xl bg-[#F3F2ED] p-10">
        <Typography variant="h3" className="text-gold text-center mb-6">
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
    title: "Save your preferences",
    // description:
    //   "Get pitches based on the beats you choose. Switch to idle while on vacation",
    image: phone2,
  },
];

function Form() {
  return (
    <div className="p-8">
      <div className="grid max-w-[1200px] mx-auto">
        <div className="text-center my-8 lg:mb-16">
          <Typography variant="h2" color="black" className="font-bold">
            As a guest, you get <text className="text-gold">fast</text> and
            <text className="text-gold"> personalized</text> <br /> services
            catering to your preferences and health needs
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

export default Form;
