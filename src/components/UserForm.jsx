import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

// database

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOpenSnackBar = (message) => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!name) return setMessage("Please Enter your Name");

    if (!isEmailValid) return setMessage("Please Enter a Proper Email");

    if (!text) return setMessage("Please Enter your message");

    console.log("message sent");

    writeUserData(name, email, text);
  };

  async function writeUserData(name, email, text) {
    setIsSubmit(true);
    try {
      await addDoc(collection(db, "details"), {
        username: name,
        email: email,
        text: text,
      });
      setSnackBarMessage("Message has been sent");
      handleOpenSnackBar();
      setIsSubmit(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setSnackBarMessage("Some Error occured");
      handleOpenSnackBar();
      setIsSubmit(false);
    }
  }

  return (
    <div className=" bg-slate-200 dark:bg-dark-secondary w-1/2 portrait:w-5/6 p-4 portrait:px-2 my-10 shadow-md rounded-md">
      <div className="text-center mb-3 m-auto text-primary-dark dark:text-white text-3xl portrait:text-xl font-bold">
        Want to get in touch?
      </div>
      {isSubmit ? (
        <div className="w-full py-40 h-40 flex justify-center items-center">
          <CircularProgress color="primary" size={100} />
        </div>
      ) : (
        <form action="">
          <div className="flex space-x-2 justify-between items-center">
            <div className="w-1/2">
              <div className="dark:text-white py-4">Name</div>
              <input
                className="w-full p-2 rounded-md"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <div className="dark:text-white py-4">Email</div>
              <input
                className="w-full p-2 rounded-md"
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="dark:text-white py-4">Message</div>
            <textarea
              className="w-full pl-2 rounded-md"
              type="text"
              rows={5}
              cols={50}
              placeholder="Hey, type your message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="text-red-700">{message}</div>
          {/* <input type="submit" value="Submit" /> */}
          <div className=" flex justify-end items-center">
            <button
              onClick={handleSubmit}
              className=" bg-gradient-to-r flex justify-between items-center  from-primary-light from-10% to-primary-dark to-90% text-white rounded-md px-4 py-2 text-sm"
            >
              <FaPaperPlane className="mr-1" /> Submit
            </button>
          </div>
        </form>
      )}
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        // message={snackBarMessage}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UserForm;
