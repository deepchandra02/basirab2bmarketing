import { Typography, IconButton, Card } from "@material-tailwind/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const faqs = [
  {
    title: "Recommendations for guests",
    icon: <ShoppingCartIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "High-margin menu item recommendations based on customers' demographics, preferences, allergies, frequency and time of visits, customer feedback, and special requests.",
  },
  {
    title: "Demand analytics and forecasting",
    icon: <CreditCardIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "Forecasting based on consumer behavior information (time of ordering specific meals) which allows to order and prepare food in advance. Full analytics for hourly, daily, weekly, and monthly operations. ",
  },
  {
    title: "Menu Customization",
    icon: <UserGroupIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "Data-driven menu customization based on guests requests: food choices and rating, adjust the menu to meet the demand and follow the trends. ",
  },
  {
    title: "Online Orders",
    icon: <UserGroupIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "Online order management with special notes and notifications with the ability to modify the order in minutes. We reduce orders made by mistake.",
  },
  {
    title: "Stock management system automation",
    icon: <UserGroupIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "Automate stock orders based on demand predictions to ensure availability and minimize customer dissatisfaction.",
  },
  {
    title: "Order automation",
    icon: <UserGroupIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "Automation of the most frequent guest orders",
  },
  {
    title: "TBD",
    icon: <UserGroupIcon className="h-5 w-5" strokeWidth={2} />,
    desc: "Timely notifications for waiters to come to a table and suggest something according to the order and recommended approach",
  },
];

function Features() {
  return (
    <div className="bg-[#EBE7E6] p-8">
      <div className="grid min-h-[85vh] px-8">
        <div className="flex justify-start gap-x-8 my-4">
          <Typography variant="h3" className="" color="blue-gray">
            Features
          </Typography>
          <div className="flex w-max gap-4">
            <IconButton
              variant="outlined"
              ripple={true}
              className="rounded-full"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </IconButton>
            <IconButton
              variant="outlined"
              ripple={true}
              className="rounded-full"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </IconButton>
          </div>
        </div>
        <div className="mb-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {faqs.map(({ title, desc, icon }) => (
            <Card key={title} shadow={true} className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-gray-900 text-left text-white">
                {icon}
              </div>
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
