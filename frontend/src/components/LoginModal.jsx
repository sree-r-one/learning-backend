import axios from "axios";
import React from "react";
import { useState } from "react";

const LoginModal = () => {
  const [formdata, setFormdata] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formdata);
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formdata,
      );

      if (response.status === 200) {
        console.log("Form data submitted successfully");
      } else {
        console.log("Form data submission failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center p-3 md:h-screen md:max-w-md">
      <div className="space-y-4 rounded-lg bg-white px-10 py-12 dark:bg-gray-700">
        <h1 className="text-gray-900 dark:text-white">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full space-y-2 p-2">
            <label
              htmlFor="email"
              className="block text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formdata.email}
              onChange={handleChange}
              className="block w-full rounded border border-gray-400 p-2 placeholder-gray-900 placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-500 dark:text-white dark:placeholder:text-gray-200"
              placeholder="email@company.com"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
