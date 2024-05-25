import React from "react";
import UserForm from "../components/UserForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className=" min-h-5/6 portrait:h-screen  flex justify-center items-center dark:bg-dark-primary py-14 portrait:-my-10">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <UserForm />
    </div>
  );
};

export default Contact;
