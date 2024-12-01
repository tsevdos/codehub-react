import { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-400">
        Welcome to our website. We are dedicated to providing the best service possible.
      </p>
    </div>
  );
};

export default About;
