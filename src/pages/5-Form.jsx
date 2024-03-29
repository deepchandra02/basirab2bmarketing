import { Typography, Card, CardBody } from "@material-tailwind/react";

function Form() {
  return (
    <div className="bg-black2 p-4 md:p-8">
      <div className="grid max-w-[1170px] mx-auto">
        <div className="text-center my-8 lg:mb-16">
          <Typography variant="h2" color="white" className="font-medium">
            Witness the results firsthand and
          </Typography>
          <Typography variant="h2" color="white" className="font-bold">
            be the first to adapt to
            <text class="bg-gradient-to-r from-[#C09E3B] to-[#FFFFFF] bg-clip-text text-transparent">
              {" "}
              the tech <br />
              change
            </text>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Form;
