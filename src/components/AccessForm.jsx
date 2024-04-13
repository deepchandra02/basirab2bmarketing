import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  Textarea,
  Input,
  Alert,
} from "@material-tailwind/react";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import backgroundVideo from "../assets/accessForm/coffee.mp4";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

function AccessForm(props) {
  const form = useRef();

  // State for form fields
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "",
  });
  // Validate email format
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check for empty fields
    Object.keys(formFields).forEach((field) => {
      if (!formFields[field]) {
        validationErrors[field] = "This field is required";
      }
    });

    // Check for valid email
    if (!validateEmail(formFields.email)) {
      validationErrors.email = "Please enter a valid email address";
    }

    setErrors(validationErrors);

    // If no errors, proceed with form submission logic
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_4hmv49e",
          "template_kuxaoyl",
          form.current,
          "vyqdq2xwhplb46Z3B"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Success feedback to user
            // Reset form fields here if needed
            setFormFields({ name: "", email: "", message: "" });
            setAlert({
              show: true,
              message: "We will get back to you shortly!",
              color: "teal",
            });
          },
          (error) => {
            console.log(error.text);
            setAlert({
              show: true,
              message:
                "Failed to send message. Try emailing us at basira.life@gmail.com",
              color: "",
            });
          }
        );
    }
  };

  // Update form field values
  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
    // Optionally, clear the field's error when the user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <>
      <Helmet>
        <link rel="preload" as="video" href={backgroundVideo} />
      </Helmet>
      <Dialog
        className="p-4 pt-0 px-0 bg-center bg-cover bg-no-repeat !justify-between"
        size="xxl"
        open={props.open}
        handler={props.handleOpen}
      >
        <video
          autoPlay
          playsInline // This is critical for iOS devices
          muted
          loop
          className="absolute w-full h-full object-cover" // Ensures the video covers the entire background
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <DialogHeader className="flex flex-col justify-between bg-transparent text-[#ffedd8] mt-4">
          <div className="flex justify-between items-center w-full">
            <Typography className="mt-2 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold font-warsawCondensed md:font-warsaw fadeIn delay1">
              KNOW
            </Typography>
            <Typography className="mt-2 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold font-warsawCondensed md:font-warsaw fadeIn delay2">
              YOUR
            </Typography>
            <Typography className="mt-2 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold font-warsawCondensed md:font-warsaw fadeIn delay3">
              DINER
            </Typography>

            <IoCloseCircle
              onClick={props.handleOpen}
              className="absolute right-1 top-2 w-8 h-8 text-[#ffedd8] opacity-30 hover:opacity-80 hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-2 fadeIn delay4">
            <Typography className="font-allura text-3xl md:text-4xl mb-2">
              Estimated release date
            </Typography>
            <Typography className="uppercase font-medium">
              May 1, 2024
            </Typography>
            <Typography className="md:hidden mt-2">
              Save your spot before everyone else does!
            </Typography>
          </div>
        </DialogHeader>
        <DialogBody className="moveInUp delay5">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center align-items-center pb-4">
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-2 max-w-2xl lg:max-w-md 2xl:max-w-xl text-center lg:text-left"
              >
                We know – diving into AI might seem like a big step.
              </Typography>
              <Typography
                color="white"
                className="mb-4 lg:mb-0 max-w-2xl lg:max-w-md 2xl:max-w-xl text-justify"
              >
                That's why we offer a free 1-on-1 session where you can see
                Basira AI in action. No commitment, just your questions answered
                and a clear demonstration of how it can work for your
                restaurant.
              </Typography>
            </div>
            <form
              ref={form}
              className="flex flex-col gap-6 w-full max-w-2xl lg:max-w-md 2xl:max-w-xl mt-2 lg:mt-0"
              onSubmit={handleSubmit}
            >
              <Typography
                variant="h4"
                className="hidden md:flex mb-4 text-center mx-auto lg:mx-0"
                color="white"
              >
                Save your spot before everyone else does!
              </Typography>
              <div className="grid gap-4 grid-cols-2 w-full">
                <Input
                  className="!text-white"
                  size="lg"
                  variant="static"
                  color="white"
                  label="Name"
                  name="name"
                  value={formFields.name}
                  onChange={handleChange}
                  error={errors.name}
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
                <Input
                  className="!text-white"
                  size="lg"
                  variant="static"
                  color="white"
                  label="Email"
                  name="email"
                  value={formFields.email}
                  onChange={handleChange}
                  error={errors.email}
                  containerProps={{ className: "!min-w-full" }}
                />
              </div>

              <Textarea
                size="lg"
                variant="static"
                label="Message"
                name="message"
                value={formFields.message}
                onChange={handleChange}
                error={errors.message}
                labelProps={{ className: "!text-white" }}
                className="!text-white"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-[#ffedd8] text-gray-900 flex items-center justify-center"
                fullWidth
              >
                Send Message
                <IoIosSend className="h-6 w-6" />
              </Button>
              {alert.show && (
                <Alert
                  open={alert.show}
                  onClose={() => setAlert({ ...alert, show: false })}
                  color={alert.color}
                >
                  {alert.message}
                </Alert>
              )}
            </form>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default AccessForm;
