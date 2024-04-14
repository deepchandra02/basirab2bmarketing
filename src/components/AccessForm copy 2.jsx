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

  if (!props.open) return null;

  return (
    <>
      <Helmet>
        <link rel="preload" as="video" href={backgroundVideo} />
      </Helmet>
      <div
        className="absolute top-0 z-50 overflow-auto bg-black bg-opacity-40 flex"
        onClick={props.handleOpen}
      >
        <div
          className="relative p-4 w-full max-w-6xl m-auto flex-col flex"
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        >
          {/* <video
            autoPlay
            playsInline
            muted
            loop
            className="absolute w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video> */}
          <div className="bg-white p-8 rounded-lg shadow space-y-6">
            <IoCloseCircle
              onClick={props.handleOpen}
              className="absolute right-2 top-2 w-8 h-8 text-black cursor-pointer"
            />
            <div className="space-y-4">
              <Typography color="gray" className="text-center text-4xl">
                Contact Us
              </Typography>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <Input
                  size="lg"
                  variant="outlined"
                  color="lightBlue"
                  label="Name"
                  name="name"
                  value={formFields.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  size="lg"
                  variant="outlined"
                  color="lightBlue"
                  label="Email"
                  name="email"
                  value={formFields.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Textarea
                  size="lg"
                  variant="outlined"
                  label="Message"
                  name="message"
                  value={formFields.message}
                  onChange={handleChange}
                  error={errors.message}
                />
                <Button type="submit" color="blue" size="lg" className="w-full">
                  Send Message
                  <IoIosSend className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
          {alert.show && (
            <Alert
              open={alert.show}
              onClose={() => setAlert({ ...alert, show: false })}
              color={alert.color}
            >
              {alert.message}
            </Alert>
          )}
        </div>
      </div>
    </>
  );
}

export default AccessForm;
