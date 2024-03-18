import { Typography, Button, Card, CardBody } from "@material-tailwind/react";

export function ContentCard({ title, description, subtitle, className }) {
  return (
    <Card shadow={false} className={className}>
      <CardBody className="flex h-full flex-col text-center items-center justify-center rounded-2xl bg-gray-900 p-10">
        <Typography variant="h6" className="mb-4 uppercase" color="white">
          {subtitle}
        </Typography>
        <Typography variant="h3" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-3 mb-14 text-center text-base font-normal opacity-70 max-w-sm"
        >
          {description}
        </Typography>
        <Button color="white">button</Button>
      </CardBody>
    </Card>
  );
}

const Contents = [
  {
    title: "Fill Restaurant Profile in 30 mins",
    description:
      "Upload your chain's branding materials (logos, color schemes, etc.), detailed menu, POS systems list if integration is needed, etc. ",
    // subtitle: "productivity",
  },
  {
    title: "Customise AI to meet your needs",
    description:
      "Work closely with our team once to tailor AI Waiter for your branch’s needs and preferences. We can support integrations with other POS systems and craft the solution personalised for you. You can even create a character of your waiter, input local jokes relevant to your positioning.",
    // subtitle: "design",
  },
  {
    title: "Get a new tireless employee - AI Waiter",
    description:
      "Supportive, intelligent and time-saving system for your brand. It will reduce costs, forecast demand, make meaningful relationships with guests and increase retention.",
    subtitle: "design",
  },
];

function Page2() {
  return (
    <div className="bg-[#EBE7E6] p-8">
      <div className="grid min-h-[85vh] px-8">
        <div className="text-center my-8 lg:mb-16">
          <Typography variant="h3" color="blue-gray">
            Basira AI recommends items from your menu <br />
            when guests scan the QR-code{" "}
          </Typography>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2">
          <ContentCard
            className="md:row-span-2" // This will make the first card span 2 rows
            title={Contents[0].title}
            description={Contents[0].description}
            subtitle={Contents[0].subtitle}
          />
          {Contents.slice(1).map(({ title, description, subtitle }, key) => (
            <ContentCard
              key={key}
              title={title}
              description={description}
              subtitle={subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page2;
