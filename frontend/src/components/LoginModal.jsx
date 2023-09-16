import React from "react";

const LoginModal = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center p-3 md:h-screen md:max-w-md">
      <div className="space-y-4 rounded-lg bg-white px-10 py-12 dark:bg-gray-700">
        <h1 className="text-gray-900 dark:text-white">
          Sign in to your account
        </h1>
        <form action="#">
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
              className="block w-full rounded p-2 placeholder-gray-400"
              placeholder="email@company.com"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
