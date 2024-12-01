import { FC } from "react";

const Loader: FC = () => (
  <div className="flex items-center justify-center my-4 bg-gray-900">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-gray-200"></div>
  </div>
);

export default Loader;
