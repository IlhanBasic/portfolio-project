import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { LightMode } from "../context/switch-context.jsx";
import Notifications from "./Notifications.jsx";
import Modal from "./Modal.jsx";
import { AnimatePresence } from "framer-motion";
import { API_URL } from "../../apikey.js";
export default function Form() {
  const ctxValue = useContext(LightMode);
  const initForm = {
    userName: "",
    email: "",
    message: "",
  };
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (error === "success") {
      const timer = setTimeout(() => {
        setError("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [error]);
  function handleSubmit(event) {
    setError("");
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(formData.email);
    const isUserNameValid =
      formData.userName.trim() !== "" && formData.userName.trim().length > 6;
    const isMessageValid =
      formData.message.trim() !== "" &&
      formData.message.trim().split(/\s+/).length >= 2;

    const isValid = isEmailValid && isUserNameValid && isMessageValid;

    if (!isValid) {
      if (!isEmailValid) {
        setError("The email does not meet the template");
      } else if (!isUserNameValid) {
        setError("User name must have at least 6 characters");
      } else if (!isMessageValid) {
        setError("The message must have at least 2 words");
      }
      return;
    } else {
      async function postData() {
        setIsLoading(true);
        try {
          const response = await fetch(
            API_URL,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
          if (!response.ok) {
            setError("network error");
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setError("success");
          setTimeout(() => {
            setFormData(initForm);
          }, 1500);
        } catch (error) {
          setError("server error");
          console.error("Error posting data:", error);
        }
        setIsLoading(false);
      }
      postData();
    }
  }
  function closeModal() {
    return error != "success";
  }
  function handleChange(identificator, value) {
    setFormData((state) => {
      return {
        ...state,
        [identificator]: value,
      };
    });
  }
  return (
    <div
      id="contact"
      className={`user-inputs ${ctxValue.checked ? "light" : ""}`}
    >
      <h1>
        <span>Contact</span>
      </h1>
      {isLoading && <p>Please wait ... ⌛</p>}
      {error != "" && error!='success' && <Notifications error={error} />}{" "}
      <AnimatePresence>
        {error !== "" && error==='success' && (
          <Modal
            error={error}
            open={error === "" ? false : true}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit}>
        <Input
          value={formData.userName}
          onChange={(event) => handleChange("userName", event.target.value)}
          id="user-name"
          name="user-name"
          type="text"
          label="User Name:"
        />
        <Input
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          id="email"
          name="email"
          type="email"
          label="Email:"
        />
        <Input
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          id="message"
          name="message"
          type="textarea"
          label="Message:"
        />
        <button>Send</button>
      </form>
    </div>
  );
}
