import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../style";
import Button from "./Button";

const Contact = () => {
  const [sending, SetSending] = useState(false);
  const [done, SetDone] = useState(false);
  const [sent, SetSent] = useState(false);
  const form = useRef();

  const resetForumBack = async () => {
    SetSending(!sending);
    SetDone(!done);
    if (sent) SetSent(!sent);
  };

  const sendEmail = (e) => {
    SetSending(!sendEmail);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pc5a367",
        "template_g6n00a8",
        form.current,
        "k7g8jYAAdcVF6S-RL"
      )
      .then(
        (result) => {
          document.getElementById("form").reset();
          SetSent(!sent);
          SetDone(!done);
          setTimeout(() => {
            resetForumBack();
          }, 10000);
        },
        (error) => {
          SetDone(!done);
          console.log(error.text);
          setTimeout(() => {
            resetForumBack();
          }, 10000);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-center`}
    >
      <h2 className={styles.heading2}>Contact Us</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        id="form"
        className="bg-black-gradient rounded-lg sm:my-2 my-0 sm:p-8 p-4 sm:w-[50%] w-[100%] box-shadow"
      >
        <div className="flex flex-col text-start sm:mb-8 mb-4">
          <div className="text-white font-bold sm:mb-2 mb-1 sm:ml-4 ml-2">
            Name
          </div>
          <input
            type="name"
            name="name"
            className="sm:px-4 px-2 sm:py-3 py-2 rounded-lg w-[100%] bg-gray-gradient text-white"
            id="name"
            placeholder="e.g John Doe"
          />
        </div>
        <div className="flex flex-col text-start sm:mb-8 mb-4">
          <div className="text-white font-bold sm:mb-2 mb-1 sm:ml-4 ml-2">
            Email
          </div>
          <input
            type="email"
            name="email"
            className="sm:px-4 px-2 sm:py-3 py-2 rounded-lg w-[100%] bg-gray-gradient text-white"
            id="email"
            placeholder="e.g johndoe@email.com"
          />
        </div>
        <div className="flex flex-col text-start sm:mb-8 mb-4">
          <div className="text-white font-bold sm:mb-2 mb-1 sm:ml-4 ml-2">
            Title
          </div>
          <input
            type="title"
            name="title"
            className="sm:px-4 px-2 sm:py-3 py-2 rounded-lg w-[100%] bg-gray-gradient text-white"
            id="title"
            placeholder="e.g E-commerce Website"
          />
        </div>
        <div className="flex flex-col text-start sm:mb-8 mb-4">
          <div className="text-white font-bold sm:mb-2 mb-1 sm:ml-4 ml-2">
            Details
          </div>
          <textarea
            type="text"
            name="text"
            className="sm:px-4 px-2 sm:py-3 py-2 rounded-lg w-[100%] h-[128px] bg-gray-gradient text-white"
            id="text"
            placeholder="e.g Any relevant details up to 300 words"
          />
        </div>
        <Button
          type="submit"
          text={
            sending
              ? done
                ? sent
                  ? "Message Sent!"
                  : "Message Failed!"
                : "Sending..."
              : "Submit"
          }
          styles="mt-4 w-[80%]"
        />
      </form>
    </section>
  );
};

export default Contact;
